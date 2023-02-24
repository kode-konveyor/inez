package com.kodekonveyor.integrationtests.helper;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.io.Files;
import com.kodekonveyor.integrationtests.IntegrationtestsConstants;

import lombok.Getter;

public class SeleniumTestHelper {

	private static final String PICTURE_REFERENCE_FORMAT = "<picture ref=\"{0}\"/>";
	private static final String STEP_TAG_END = "</step>";
	private static final String STEP_TAG_BEGIN = "<step>\n";
	private static final String STEP_TITLE_FORMAT = "<title>{0}</title>";
	private static final String EXITING_PROCESS_WE_ARE_NOT_IN = "exiting Process we are not in";
	private static final String SCROLLER_SCRIPT = "arguments[0].scrollIntoView(false);";
	private static final String CLICK_THERE = "Click there";
	private static final String ID = "id";
	private static final String HASHTAG = "#";

	@Getter
	private Integer step = 0;
	private final WebDriver driver;
	@Getter
	private WebElement element;
	@Getter
	private String cssSelector;
	private final TestPlatform platform;
	private final WebDriverWait wait;
	@Getter
	List<String> rabbitHole = new ArrayList<>();
	@Getter
	List<Step> steps;

	public SeleniumTestHelper(final TestPlatform platform) throws IOException {
		this.platform = platform;
		driver = platform.makeDriver();
		wait = new WebDriverWait(driver,
				IntegrationtestsConstants.WAIT_TIME);

	}

	public SeleniumTestHelper checkText(final String reason, final String text)
			throws IOException {
		takeScreenshot(reason);
		if (SeleniumTestConstants.INPUT.equals(element.getTagName())) {
			assertEquals(text, element.getAttribute(SeleniumTestConstants.VALUE));
		} else {
			assertEquals(text, element.getText());
		}
		return this;
	}

	public SeleniumTestHelper click() throws Exception {
		return click(CLICK_THERE);
	}

	public SeleniumTestHelper click(final String reason) throws Exception {
		takeScreenshot(reason);
		element.click();
		return this;
	}

	public SeleniumTestHelper enter(final String reason, final String text)
			throws Exception {
		element.sendKeys(text);
		takeScreenshot(reason);
		return this;
	}

	public SeleniumTestHelper enterProcess(final String name) {
		steps = new ArrayList<>();
		steps.add(
				new Step(
						MessageFormat.format(STEP_TITLE_FORMAT, name),
						null));
		rabbitHole.add(name);
		return this;
	}

	public SeleniumTestHelper exitProcess(final String name) throws IOException {
		if (!rabbitHole.get(rabbitHole.size() - 1).equals(name))
			throw new InternalError(EXITING_PROCESS_WE_ARE_NOT_IN);
		rabbitHole.remove(name);
		final File processDescriptionFile = Path
				.of("target", platform.getDocDir(), name + ".process")
				.toFile();
		final StringBuilder content = new StringBuilder();
		steps.forEach(step -> {
			content.append(STEP_TAG_BEGIN);
			content.append(step.description);
			if (step.pictureReference != null) {
				content.append(MessageFormat.format(PICTURE_REFERENCE_FORMAT,
						step.pictureReference));
			}
			content.append(STEP_TAG_END);
		});
		Files.write(content.toString().getBytes(), processDescriptionFile);
		return this;
	}

	public WebDriver getDriver() {
		return driver;
	}

	public String getText(final String reason)
			throws IOException {
		takeScreenshot(reason);
		if (SeleniumTestConstants.INPUT.equals(element.getTagName()))
			return element.getAttribute(SeleniumTestConstants.VALUE);
		return element.getText();
	}

	public SeleniumTestHelper lookAtElement(final String cssSelector)
			throws Exception {

		this.cssSelector = cssSelector;
		try {
			element = waitFor(cssSelector);
			return this;
		} catch (final TimeoutException exception) {
			final String reason = SeleniumTestConstants.COULD_NOT_FIND + cssSelector;
			this.cssSelector = SeleniumTestConstants.NO_CSS_SELECTOR;
			takeScreenshot(reason);
			throw exception;
		}

	}

	public SeleniumTestHelper lookAtElementXpath(final String xpath)
			throws Exception {
		try {
			element = waitForXpath(xpath);
			cssSelector = HASHTAG + element.getDomAttribute(ID);
			return this;
		} catch (final TimeoutException exception) {
			final String reason = SeleniumTestConstants.COULD_NOT_FIND + xpath;
			cssSelector = SeleniumTestConstants.NO_CSS_SELECTOR;
			takeScreenshot(reason);
			throw exception;
		}

	}

	public SeleniumTestHelper switchToContext(final String context)
			throws InterruptedException {
		platform.switchToContext(context);
		return this;
	}

	public SeleniumTestHelper takeScreenshot(
			final String reason) throws IOException {
		platform.takeScreenshot(reason, this);
		step++;
		return this;
	}

	private WebElement waitFor(final By selector) {
		final WebElement found = wait.until(
				ExpectedConditions.presenceOfElementLocated(selector));
		((JavascriptExecutor) driver).executeScript(SCROLLER_SCRIPT, found);
		wait.until(
				ExpectedConditions.elementToBeClickable(selector));
		return found;
	}

	public WebElement waitFor(final String cssSelector) {
		return waitFor(By.cssSelector(cssSelector));
	}

	public WebElement waitForXpath(final String cssSelector)
			throws InterruptedException {
		return waitFor(By.xpath(cssSelector));
	}

}
