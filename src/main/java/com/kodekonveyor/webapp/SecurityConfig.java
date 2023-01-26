package com.kodekonveyor.webapp;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtDecoders;
import org.springframework.security.oauth2.jwt.JwtValidators;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.SecurityFilterChain;


import com.kodekonveyor.annotations.InterfaceClass;

@InterfaceClass
@EnableWebSecurity
public class SecurityConfig {

  private static final String SCOPE_READ_CURRENT_USER = "SCOPE_read:current_user";

  private static final String API_PRIVATE_SCOPED = "/api/private-scoped";

  private static final String API_PRIVATE = "/api/private";

  private static final String API_PUBLIC = "/api/public";

  @Value("${auth0.audience:read:current_user}")
  private String audience;

  @Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri:https://kode-konveyor.eu.auth0.com/}")
  private String issuer;

  @Bean
  public SecurityFilterChain filterChain(final HttpSecurity http) throws Exception {
    http.authorizeRequests()
        .mvcMatchers(API_PUBLIC).permitAll()
        .mvcMatchers(API_PRIVATE).authenticated()
        .mvcMatchers(API_PRIVATE_SCOPED).hasAuthority(SCOPE_READ_CURRENT_USER)
        .and().cors()
        .and().oauth2ResourceServer().jwt();
    return http.build();
  }

  @Bean
  JwtDecoder jwtDecoder() {

    NimbusJwtDecoder jwtDecoder = (NimbusJwtDecoder) JwtDecoders.fromOidcIssuerLocation(issuer);

    OAuth2TokenValidator<Jwt> audienceValidator = new AudienceValidator(audience);
    OAuth2TokenValidator<Jwt> withIssuer = JwtValidators.createDefaultWithIssuer(issuer);
    OAuth2TokenValidator<Jwt> withAudience = new DelegatingOAuth2TokenValidator<>(withIssuer, audienceValidator);

    jwtDecoder.setJwtValidator(withAudience);

    return jwtDecoder;
  }
}
