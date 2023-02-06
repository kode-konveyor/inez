package com.kodekonveyor.integrationtests;

import java.time.Duration;

public class IntegrationtestsConstants {

  public static final String AUTH0_LOCK_SOCIAL_BUTTON_TEXT = ".auth0-lock-social-button-text";
  public static final String APP_URL = "http://localhost:9090/angulartest";
  public static final String LOCAL_SERVER_URI = "http://localhost:9090/angulartest";
  public static final String LOGIN_BUTTON = "#login_button";
  public static final String LOGIN_FIELD = "input[type=email]";
  public static final String OBJECT_BOX_STRING = ".objectBox-string";
  public static final String OIDC_CLAIM_NICKNAME = "OIDC_CLAIM_nickname";
  public static final String PASSWORD_FIELD = "div.auth0-lock-input-block:nth-child(1) > div:nth-child(1) > input:nth-child(2)";
  public static final String QUOTED_FORMAT = "\"%s\"";
  public static final Duration WAIT_TIME = Duration.ofSeconds(20);
  public static final String HEADLESS = "--headless";
  public static final String HERO_SELECTOR = "#heroes-herolist-heroitem-17-name";
  public static final String INPUT_SELECTOR = "#heroes-heroeditor-name-input";
  public static final String FILTER_INPUT_SELECTOR = "#heroes-herofilter-filterstring-input";
  public static final String ADDED_TEXT = "Hello";
  public static final String HERO_NAME = "Superman";
  public static final String HEROITEM_SELECTOR_TEMPLATE = "#{0}";
  public static final String HEROEDITOR_CREATE_SELECTOR = "#heroes-heroeditor-create";
  public static final String HEROES_PLUSBUTTON_SELECTOR = "#heroes-plusbutton";
  public static final String AUTH0_LOGIN_BUTTON = ".auth0-label-submit";

}
