package com.kodekonveyor.authentication;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class UserEntityTestData {

  public static final Long ID = (long) 42;
  public static final long ID_BAD = -42;
  public static final String LOGIN = "user1";
  public static final String LOGIN_BAD = "badlogin";
  public static final String PASSWORD = "1234";

  public static final UserEntity get() {
    final UserEntity user = new UserEntity();
    user.setLogin(LOGIN);
    user.setRoles(Set.of(RoleEntityTestData.get()));
    user.setId(ID);
    return user;
  }

  public static final UserEntity getIdUninitialized() {
    final UserEntity userEntity = new UserEntity();
    userEntity.setLogin(LOGIN);
    return userEntity;
  }


  public static final List<UserEntity> list() {
    return List.of(get());
  }

  public static final List<UserEntity> listEmpty() {
    return new ArrayList<>();
  }

}
