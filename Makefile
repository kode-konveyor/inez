export MODEL_BASENAME=model
export REPO_NAME=metamodel
export GITHUB_ORGANIZATION=kode-konveyor
export CONSISTENCY_INPUTS=model.rich shippable/behaviours.xml
LANGUAGE=java
BEFORE_ALL=runapache
BEFORE_JAVADOC=inputs/codingrules
BEFORE_DEPENDENCIES=inputs/androidplatform

include /usr/local/toolchain/rules.javascript


inputs/codingrules:
	git clone -b v0.5 https://github.com/kode-konveyor/codingrules.git inputs/codingrules

inputs/androidplatform:
	mkdir -p www && cordova platform rm android && cordova platform add android && cordova prepare android

