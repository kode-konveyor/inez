export TOOLCHAINDIR = /usr/local/toolchain
export GITHUB_ORGANIZATION=$(shell repofullname -d | sed 'sA/.*AA')
export REPO_NAME=$(shell repofullname | sed 'sA.*/AA')
export VERSION=$(shell git describe --tags)
export ANDROID_SDK_ROOT=/opt/Android/Sdk
LANGUAGE=java
#export MODEL_BASENAME=model
#export REPO_NAME=angulartest
#export GITHUB_ORGANIZATION=kode-konveyor
#export CONSISTENCY_INPUTS=model.rich target/behaviours.xml

all: $(BEFORE_ALL) target/gather_deliverables $(AFTER_ALL)

ci: all

foo:
	echo $(REPO_NAME) $(GITHUB_ORGANIZATION) $(VERSION)

clean:
	git clean -fdx && rm -rf inputs/codingrules

jetty:
	rm -f target/typescript_build && make target/typescript_build && JAVA_HOME=/usr/lib/jvm/java-19-openjdk-amd64 mvn jetty:run

IT:
	rm -f target/typescript_build && make target/typescript_build && JAVA_HOME=/usr/lib/jvm/java-19-openjdk-amd64 mvn integration-test

target/zentaworkaround:
	mkdir -p ~/.zenta/.metadata/.plugins/org.eclipse.e4.workbench/
	cp etc/workbench.xmi ~/.zenta/.metadata/.plugins/org.eclipse.e4.workbench/
	touch target/zentaworkaround

target/version_updated:
	updateversion
	touch target/version_updated

target/gather_deliverables: target/documentation target/android_app target/ios_app target/war_built
	echo "gather_deliverables NOTIMPLEMENTED">target/gather_deliverables

target/documentation: target/java_documentation target/typescript_documentation target/end_to_end_documentation target/model_documentation
	echo "documentation NOTIMPLEMENTED">target/documentation

target/android_app: target/typescript_qa target/androidplatform
	echo ANDROID_SDH ROOT is $(ANDROID_SDK_ROOT)
	ls $(ANDROID_SDK_ROOT)
	cordova telemetry off
	JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64 cordova build android
	mv platforms/android/app/build/outputs/apk/debug/app-debug.apk target
	touch target/android_app

target/androidplatform:
	mkdir -p www && cordova platform rm android && cordova platform add android && cordova prepare android
	touch target/androidplatform

target/ios_app: target/typescript_qa
	echo "ios_app NOTIMPLEMENTED">target/ios_app

target/typescript_documentation: target/typescript_qa
	echo "typescript_documentation NOTIMPLEMENTED">target/typescript_documentation

target/java_documentation: target/java_qa target/implementedBehaviours.xml
	touch target/java_documentation

target/end_to_end_documentation: target/end_to_end_test
	echo "end_to_end_documentation NOTIMPLEMENTED">target/end_to_end_documentation

target/typescript_qa: target/version_updated target/typescript_dependencies target/typescript_source_generation
	npm run qa
	touch target/typescript_qa

target/typescript_dependencies:
	npm install
	touch target/typescript_dependencies

target/typescript_build: target/version_updated target/typescript_qa
	npm run build
	cp -r www target/public
	cp  www/* src/main/webapp
	touch target/typescript_build

target/deploy_war: target/runApache target/war_built
	deploywar $(REPO_NAME) $(VERSION)
	touch target/deploy_war

#target/end_to_end_test: target/runtomcat target/deploy_war
#	echo "end_to_end_test NOTIMPLEMENTED">target/end_to_end_test

target/typescript_source_generation: model.rich
	echo "typescript_source_generation NOTIMPLEMENTED">target/typescript_source_generation

target/java_source_generation: model.rich
	echo "java_source_generation NOTIMPLEMENTED">target/java_source_generation

target/x_runs:
	tools/prepare
	touch target/x_runs

target/model_documentation: target/x_runs model.compiled
	mv model target
	touch target/model_documentation

target/model_check: target/java_qa target/typescript_qa model.rich
	echo "model_check NOTIMPLEMENTED">target/model_check

target/runApache:
	runApache
	touch target/runApache

#target/runtomcat: target/runApache target/deploy_war
#	tomcat
#	touch target/runtomcat

target/java_qa: target/mutation_check target/end_to_end_test target/test/javadoc.xml
	echo "java_qa NOTIMPLEMENTED">target/java_qa

target/mutation_check target/test/javadoc.xml target/war_built target/end_to_end_test: target/version_updated inputs/codingrules target/typescript_build target/runApache target/java_source_generation
	JAVA_HOME=/usr/lib/jvm/java-19-openjdk-amd64 mvn -B javadoc:javadoc javadoc:test-javadoc org.jacoco:jacoco-maven-plugin:prepare-agent site install org.pitest:pitest-maven:mutationCoverage
	cp target/pit-reports/mutations.xml target/mutations.xml
	mkdir -p target/test
	cp ./target/site/testapidocs/javadoc.xml target/test/javadoc.xml
	touch target/mutation_check
	touch target/end_to_end_test
	touch target/war_built

#export MODEL_BASENAME=model
#export REPO_NAME=angulartest
#export GITHUB_ORGANIZATION=kode-konveyor
#export CONSISTENCY_INPUTS=model.rich target/behaviours.xml
#LANGUAGE=java
#BEFORE_ALL=runapache
#BEFORE_JAVADOC=target/codingrules
#BEFORE_DEPENDENCIES=target/androidplatform
#
#
##include /usr/local/toolchain/rules.java
#
#java-compile: target/.dir $(BEFORE_COMPILE) target/pomcheck.ok target/zentaworkaround.ok target/product.war createdocs $(AFTER_COMPILE)
#
#checks: $(BEFORE_CHECKS) checkdoc pmdcheck coveragecheck $(AFTER_CHECKS)
#
#codedocs: target/implementedBehaviours.html
#
#cpdcheck: target/cpd.xml
#	if grep -A 1 "<duplication" target/cpd.xml; then exit 1; fi
#
#pmdcheck: target/pmd.xml
#	if grep -A 1 "<violation" target/pmd.xml; then exit 1; fi
#
#coveragecheck: target/coverage-report
#	if grep ERROR target/coverage-report; then exit 1; fi
#
#target/behaviours.xml target/behaviours.txt: $(MODEL_BASENAME).rich $(MODEL_BASENAME).zenta target/implementedBehaviours.xml inputs/issues.xml
#	zenta-xslt-runner -xsl:xslt/generate_behaviours.xslt -s:$(MODEL_BASENAME).rich modelbasename=$(MODEL_BASENAME) reponame=$(REPO_NAME) github_org=$(GITHUB_ORGANIZATION)
#
#target/install.ok: $(MODEL_BASENAME).compiled target/implementedBehaviours.html target/product.war target/coverage-report
#	cp -rf $(MODEL_BASENAME)/* target/* target
#	touch target/install.ok
#
#target/pomcheck.ok: target/.dir
#	pomchecker
#	touch target/pomcheck.ok
#
#target/coverage-report target/coverage-report.xml: target/site/jacoco/jacoco.xml target/mutations.xml
#	wget https://raw.githubusercontent.com/jacoco/jacoco/master/org.jacoco.report/src/org/jacoco/report/xml/report.dtd -O target/site/jacoco/report.dtd
#	zenta-xslt-runner -xsl:xslt/check_coverage.xslt -s:target/mutations.xml -o:target/coverage-report
#

target/implementedBehaviours.xml target/implementedBehaviours.docbook target/implementedTestCases.xml: target/test/javadoc.xml model.rich
	zenta-xslt-runner -xsl:xslt/generate_implemented_behaviours.xslt -s:target/test/javadoc.xml modelbasename=model
	mv shippable/* target
	rmdir shippable

#
#
#
#
#
#target/maven-prepare.ok: target/.dir $(BEFORE_MAVEN_PREPARE)
#	mvn -B build-helper:parse-version versions:set versions:commit -DnewVersion=\$${parsedVersion.majorVersion}.\$${parsedVersion.minorVersion}.\$${parsedVersion.incrementalVersion}-$$(/usr/local/toolchain/tools/getbranch|sed 'sA/A_Ag').$$(git rev-parse --short HEAD)
#	touch target/maven-prepare.ok
#
#
#target/test-classes/resources/keystore.pk12:
#	generate_keystore
#
##end include /usr/local/toolchain/rules.java
##include /usr/local/toolchain/rules.javascript
#
##include /usr/local/toolchain/rules.common
##build_workflow:
##	- model.rich
##	- generate source code for both languages
##		- generate source to target
##		- copy over fully generated files unconditionally
##		- copy over templates if the file does not exist yet
##	- QA for typescript
##		- static code analysis (eslint)
##		- testing (jest)
##		- mutation testing (stryker)
##	- build typescript ->#5, done
##	- QA for java
##		- static code analysis (pmd)
##		- testing (junit)
##		- mutation testing (pitest)
##	- build java (include the typescript output) ->#4
##	- build model
##	- check model consistency
##	- check java consistency to the model
##	- check javascript consistency to the model
##	- run end-to-end tests
##	- build java documentation
##	- build typescript documentation
##	- build end-to-end usage documentation
##	- build android
##	- test android app
##	- build ios
##	- test ios app
##	- gather deliverables to target ->#3
##	- deploy to repository ->#2
##	- deploy to development server -> goal now
##release_workflow:
##	- ship to production server
##	- sign and deploy to android store
##	- sign and deploy to ios store
#
#
#
#
#install: $(BEFORE_INSTALL) target/.dir compile checks target/install.ok $(AFTER_INSTALL)
#
#createdocs: $(BEFORE_CREATEDOCS) $(MODEL_BASENAME).compiled codedocs $(AFTER_CREATEDOCS)
#
#clean: $(BEFORE_CLEAN)
#	if git clean -ndx|grep "^Would remove src"; then echo  "\n\n----------  WARNING! ---------------\nnot deleting anything: please remove or add the above by hand\n\n";exit 1; fi
#	git clean -fdx
#
#checkdoc: $(MODEL_BASENAME).consistencycheck
#	checkDocErrors
#
inputs/issues.xml: target/zentaworkaround
	echo "repo: $(GITHUB_ORGANIZATION)/$(REPO_NAME)"
	mkdir -p inputs
	getGithubIssues >inputs/issues.xml.in
	mv inputs/issues.xml.in inputs/issues.xml
#
#target/.dir:
#	mkdir -p target
#	touch target/.dir
#
#target/.dir:
#	mkdir -p target
#	touch target/.dir
#
#target/nodok.ok:
#	notCreatingDocumentationInPullRequest
#
#$(MODEL_BASENAME).consistencycheck $(MODEL_BASENAME).consistency.stderr: $(MODEL_BASENAME).rich $(MODEL_BASENAME).check $(CONSISTENCY_INPUTS)
#	zenta-xslt-runner -xsl:xslt/consistencycheck.xslt -s:$(basename $@).check -o:$@ 2>&1 |tee $(basename $@).consistency.stderr
#
target/behaviours.xml target/behaviours.txt: $(MODEL_BASENAME).rich $(MODEL_BASENAME).zenta target/implementedBehaviours.xml inputs/issues.xml
	zenta-xslt-runner -xsl:xslt/generate_behaviours.xslt -s:$(MODEL_BASENAME).rich modelbasename=$(MODEL_BASENAME) reponame=$(REPO_NAME) github_org=$(GITHUB_ORGANIZATION)
#
#target/zentaworkaround.ok: target/.dir
#	mkdir -p ~/.zenta/.metadata/.plugins/org.eclipse.e4.workbench/
#	cp $(TOOLCHAINDIR)/etc/workbench.xmi ~/.zenta/.metadata/.plugins/org.eclipse.e4.workbench/
#	touch target/zentaworkaround.ok
#
#
#delink:
#	mkdir -p modelparts/metamodel
#	zenta-xslt-runner -xsl:xslt/delink.xslt -s:$(MODEL_BASENAME).zenta -o:modelparts/$(MODEL_BASENAME).zentapart -im:delink
#
#$(MODEL_BASENAME).zenta:
#	zenta-xslt-runner -xsl:xslt/delink.xslt  -s:.zentasources -im:prepare|sed 's/<.*>//'|bash
#	zenta-xslt-runner -xsl:xslt/delink.xslt -o:$(MODEL_BASENAME).zenta -s:modelparts/$(MODEL_BASENAME).zentapart -im:link
#
include /usr/share/zenta-tools/model.rules
#
##end include /usr/local/toolchain/rules.common
#
#compile: target/.dir $(BEFORE_COMPILE) target/zentaworkaround.ok target/publish createdocs $(AFTER_COMPILE)
#
#checks: $(BEFORE_CHECKS) checkdoc pmdcheck coveragecheck $(AFTER_CHECKS)
#
#
#coveragecheck: target/coverage-report
#	if grep ERROR target/coverage-report; then exit 1; fi
#
#target/install.ok: $(MODEL_BASENAME).compiled
#	cp -rf $(MODEL_BASENAME)/* target/* target
#	touch target/install.ok
#
inputs/codingrules:
	git clone -b v0.5 https://github.com/kode-konveyor/codingrules.git inputs/codingrules
#
#target/coverage-report target/coverage-report.xml: target/site/jacoco/jacoco.xml target/mutations.xml
#	wget https://raw.githubusercontent.com/jacoco/jacoco/master/org.jacoco.report/src/org/jacoco/report/xml/report.dtd -O target/site/jacoco/report.dtd
#	zenta-xslt-runner -xsl:xslt/check_coverage.xslt -s:target/mutations.xml -o:target/coverage-report
#
#delink:
#	zenta-xslt-runner -xsl:xslt/delink.xslt -s:$(MODEL_BASENAME).zenta -o:modelparts/$(MODEL_BASENAME).zentapart -im:delink
#
#$(MODEL_BASENAME).zenta:
#	mkdir -p inputs
#	./tools/clonearchrepos
#	zenta-xslt-runner -xsl:xslt/delink.xslt -o:$(MODEL_BASENAME).zenta -s:modelparts/$(MODEL_BASENAME).zentapart -im:link
#
#target/dependencies: $(BEFORE_DEPENDENCIES)
#	npm install && touch target/dependencies
#
#target/build: target/dependencies $(BEFORE_BUILD)
#	npm run all && touch target/build
#
#
#target/implementedBehaviours.xml:
#	echo "not implemented yet";/bin/false
#
#codedocs pmdcheck target/coverage-report target/site/jacoco/jacoco.xml target/mutations.xml:
#	echo "not implemented yet";/bin/false
##end include /usr/local/toolchain/rules.javascript
#
#
#target/codingrules:
#	git clone -b v0.5 https://github.com/kode-konveyor/codingrules.git target/codingrules
#
#target/androidplatform:
#	mkdir -p www && cordova platform rm android && cordova platform add android && cordova prepare android
#	touch target/androidplatform
#
#target/publish: target/build $(BEFORE_PUBLISH)
#	mv www target
#	mv reports target
#	mv platforms/android/app/build/outputs/apk/debug/app-debug.apk target/$(REPO_NAME).apk
#	mv target/generated target
#	mv model target
#	echo "APK must have be signed"
#	touch target/publish
