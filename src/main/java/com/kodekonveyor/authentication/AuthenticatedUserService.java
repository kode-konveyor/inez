package com.kodekonveyor.authentication;

import java.util.List;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticatedUserService {

  @Autowired
  private Logger loggerService;

  @Autowired
  private UserEntityRepository userEntityRepository;

  public UserEntity call() {
    final String loginName = getNameForUser();
    loggerService
        .info(AuthenticationConstants.LOGIN, loginName);
    checkCredential(loginName);
    final List<UserEntity> userList =
        userEntityRepository.findByLogin(loginName);
    if (userList.isEmpty())
      throw new NotLoggedInException(
          AuthenticationConstants.THIS_SHOULD_NOT_HAPPEN
      );
    return userList.get(0);
  }

  private void checkAuthentication(final Authentication authentication) {
    if (null == authentication)
      throw new NotLoggedInException(AuthenticationConstants.NO_AUTHENTICATION);
  }

  private void checkCredential(final String login) {
    if (null == login)
      throw new NotLoggedInException(AuthenticationConstants.NO_CREDENTIAL);
  }

  private String getNameForUser() {
    final Authentication authentication =
        SecurityContextHolder.getContext().getAuthentication();
    checkAuthentication(authentication);
    return authentication.getName();
  }

}
