package com.kodekonveyor.exception;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import org.junit.platform.commons.util.ExceptionUtils;
import org.springframework.stereotype.Service;

@Service
public class ThrowableTester {// NOPMD

	private static final String EXCEPTION_THROWN = "exception thrown";
	private static final String EXPECTED_S_BUT_GOT_S = "expected %s but got %s";
	private static final String MESSAGE_DOES_NOT_CONTAIN_S_GOT_S = "message does not contain: %s\n got:%s";
	private static final String MESSAGE_DOES_NOT_MATCH_EXPECTED_S_GOT_S = "message does not match. \nexpected: %s\n got:%s";
	private static final String NO_EXCEPTION_THROWN = "no exception thrown";
	private static final String NO_MESSAGE_OF_THE_EXCEPTION = "no message of the exception";

	public static void assertNoException(final Thrower thrower) {
		try {
			thrower.throwException();
		} catch (final Throwable e) {//NOPMD
			fail(EXCEPTION_THROWN);
		}
	}

	public static ThrowableTester assertThrows(final Thrower thrower) {
		final ThrowableTester tester = new ThrowableTester();
		return tester._assertThrows(thrower);
	}

	public Throwable thrown;//NOPMD

	private ThrowableTester() {

	}

	private ThrowableTester _assertThrows(final Thrower thrower) {//NOPMD
		try {
			thrower.throwException();
		} catch (final Throwable exception) { // NOPMD AvoidCatchingThrowable
			thrown = exception;
		}
		if (thrown == null)
			fail(NO_EXCEPTION_THROWN);
		return this;
	}

	public ThrowableTester assertException(
			final Class<? extends Throwable> klass) {
		final String message = String.format(
				EXPECTED_S_BUT_GOT_S, klass, ExceptionUtils.readStackTrace(thrown));
		assertEquals(message, klass.toString(), thrown.getClass().toString());
		return this;
	}

	public ThrowableTester assertMessageContains(final String string) {
		assertTrue(
				thrown.getMessage().contains(string),
				String.format(
						MESSAGE_DOES_NOT_CONTAIN_S_GOT_S, string, thrown.getMessage()));
		return this;
	}

	public ThrowableTester assertMessageIs(final String message) {
		assertEquals(message, thrown.getMessage());
		return this;
	}

	public ThrowableTester assertMessageMatches(final String string) {
		assertNotNull(NO_MESSAGE_OF_THE_EXCEPTION, thrown.getMessage());
		assertTrue(
				thrown.getMessage().matches(string),
				String.format(
						MESSAGE_DOES_NOT_MATCH_EXPECTED_S_GOT_S, string,
						thrown.getMessage()));
		return this;
	}

	public ThrowableTester assertStackClass(final int stackIndex,
			final String string) {
		final StackTraceElement stackElement = getStackTraceElement(stackIndex);
		assertEquals(string, stackElement.getClassName());
		return this;
	}

	public ThrowableTester assertStackFileName(final int stackIndex,
			final String string) {
		final StackTraceElement stackElement = getStackTraceElement(stackIndex);
		assertEquals(string, stackElement.getFileName());
		return this;
	}

	public ThrowableTester assertStackLineNumber(final int stackIndex,
			final int lineNumber) {
		final StackTraceElement stackElement = getStackTraceElement(stackIndex);
		assertEquals(lineNumber, stackElement.getLineNumber());
		return this;
	}

	public ThrowableTester assertStackMethod(final int stackIndex,
			final String string) {
		final StackTraceElement stackElement = getStackTraceElement(stackIndex);
		assertEquals(string, stackElement.getMethodName());
		return this;
	}

	public ThrowableTester assertUnimplemented(final Thrower thrower) {
		assertThrows(thrower).assertException(UnsupportedOperationException.class);
		return this;
	}

	public Throwable getException() {
		return thrown;
	}

	private StackTraceElement getStackTraceElement(final int stackIndex) {
		return thrown.getStackTrace()[stackIndex];
	}

	public ThrowableTester showStackTrace() {
		thrown.printStackTrace(); // NOPMD AvoidPrintStackTrace
		return this;
	}

}
