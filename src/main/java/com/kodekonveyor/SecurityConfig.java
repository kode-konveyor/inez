package com.kodekonveyor;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import com.kodekonveyor.annotations.InterfaceClass;

@InterfaceClass
@EnableWebSecurity
public class SecurityConfig {

	@Value("${auth0.audience}")
	private String audience;

	@Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri}")
	private String issuer;

	@Autowired
	Logger logger;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

		http
				.authorizeHttpRequests(
						authz -> authz.antMatchers(HttpMethod.GET, "/api/v1/hero")
								.hasAuthority("SCOPE_read:current_user")
								.anyRequest().permitAll())
				.csrf()
				.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
				.and()
				.oauth2ResourceServer(oauth2 -> oauth2.jwt());

		//http.authorizeHttpRequests().anyRequest().permitAll();
		/*
		http.authorizeHttpRequests()
				.requestMatchers("/api/**").permitAll();
		.requestMatchers("/private").
		hasAuthority(
		"SCOPE_read:messages")
		.and().cors()
		.and().oauth2ResourceServer()
		.jwt();
		 */
		return http.build();

	}
}