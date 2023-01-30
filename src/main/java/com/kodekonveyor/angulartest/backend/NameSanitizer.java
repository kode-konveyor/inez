package com.kodekonveyor.angulartest.backend;

import com.kodekonveyor.exception.ValidationException;

public class NameSanitizer {

	private static final String UNICODE_LETTERS_SPACES_AND_DOTS_STARTING_WITH_LETTER = "[\\p{L}][\\p{L} .]*";
	private static final String NAME_IS_NOT_SAFE_REJECTING_IT = "name is not safe, rejecting it";

	public static String sanitize(final String name) {
		if (!name.matches(UNICODE_LETTERS_SPACES_AND_DOTS_STARTING_WITH_LETTER)) {
			throw new ValidationException(NAME_IS_NOT_SAFE_REJECTING_IT);
		}
		return name;
	}
}
