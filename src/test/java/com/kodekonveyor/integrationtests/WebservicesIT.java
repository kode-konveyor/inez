package com.kodekonveyor.integrationtests;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.platform.commons.annotation.Testable;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.kodekonveyor.annotations.TestedBehaviour;
import com.kodekonveyor.annotations.TestedService;
import com.kodekonveyor.authentication.UserDTO;
import com.kodekonveyor.authentication.UserEntityTestData;
import com.kodekonveyor.webapp.UrlMapConstants;

import net.minidev.json.parser.ParseException;

@TestedBehaviour("roles")
@TestedService("ListLeadController")
@Testable
@Tag("IntegrationTest")
class WebservicesIT {

  private ObjectMapper mapper;

  private String urlBase;

  @BeforeEach
  void setUp() {
    mapper = new ObjectMapper();
    urlBase = IntegrationtestsConstants.LOCAL_SERVER_URI;
  }

  @Test
  @DisplayName("A user can get its data at member/user")
  void test1() throws IOException, ParseException {
    final URL url =
        new URL(urlBase + UrlMapConstants.SHOW_USER_PATH);
    final HttpURLConnection connection =
        (HttpURLConnection) url.openConnection();
    connection
        .setRequestProperty(
            IntegrationtestsConstants.OIDC_CLAIM_NICKNAME,
            UserEntityTestData.LOGIN
        );
    final UserDTO marketUser = mapper
        .readValue((InputStream) connection.getContent(), UserDTO.class);
    assertEquals(UserEntityTestData.LOGIN, marketUser.getLogin());
  }

}
