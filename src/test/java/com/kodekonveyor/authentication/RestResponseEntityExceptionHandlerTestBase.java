package com.kodekonveyor.authentication;

import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.slf4j.Logger;

class RestResponseEntityExceptionHandlerTestBase {

  @Mock
  Logger loggerService;

  @InjectMocks
  RestResponseEntityExceptionHandler restResponseEntityExceptionHandler;

  @BeforeEach
  void setUp() {
  }

}
