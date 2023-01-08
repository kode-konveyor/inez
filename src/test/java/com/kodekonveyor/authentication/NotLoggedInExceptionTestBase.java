package com.kodekonveyor.authentication;

import org.junit.jupiter.api.BeforeEach;

class NotLoggedInExceptionTestBase {

  NotLoggedInException exception;

  @BeforeEach
  void setUp() {
    exception = new NotLoggedInException(NotLoggedInExceptionTestData.MESSAGE);
  }

}
