package com.kodekonveyor.authentication;

import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.slf4j.Logger;

class AuthenticatedUserServiceTestBase {

  @InjectMocks
  AuthenticatedUserService authenticatedUserService;
  @Mock
  Logger loggerService;

  @Mock
  UserEntityRepository userEntityRepository;

  @BeforeEach
  void setUp() {
    UserEntityRepositoryStubs.behaviour(userEntityRepository);
  }

}
