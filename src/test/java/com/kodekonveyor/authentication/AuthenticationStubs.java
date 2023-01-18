package com.kodekonveyor.authentication;

import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

public class AuthenticationStubs {

	public static SecurityContext anonymous() {
		final SecurityContext securityContext = mock(SecurityContext.class);
		final Authentication authentication = mock(Authentication.class);
		doReturn(false).when(authentication).isAuthenticated();
		doReturn(authentication).when(securityContext).getAuthentication();
		SecurityContextHolder.setContext(securityContext);
		return securityContext;
	}

	public static SecurityContext authenticated() {
		final SecurityContext securityContext = mock(SecurityContext.class);
		final Authentication authentication = mock(Authentication.class);
		doReturn(true).when(authentication).isAuthenticated();
		doReturn(authentication).when(securityContext).getAuthentication();
		doReturn(UserEntityTestData.LOGIN).when(authentication).getCredentials();
		doReturn(UserEntityTestData.LOGIN).when(authentication).getName();
		SecurityContextHolder.setContext(securityContext);
		return securityContext;
	}

	public static SecurityContext badAuthenticated() {
		final SecurityContext securityContext = mock(SecurityContext.class);
		final Authentication authentication = mock(Authentication.class);
		doReturn(true).when(authentication).isAuthenticated();
		doReturn(authentication).when(securityContext).getAuthentication();
		doReturn(UserEntityTestData.LOGIN_BAD).when(authentication)
				.getCredentials();
		doReturn(UserEntityTestData.LOGIN_BAD).when(authentication).getName();
		SecurityContextHolder.setContext(securityContext);
		return securityContext;
	}

	public static SecurityContext nullAuthentication() {
		final SecurityContext securityContext = mock(SecurityContext.class);
		doReturn(null).when(securityContext).getAuthentication();
		SecurityContextHolder.setContext(securityContext);
		return securityContext;
	}

	public static SecurityContext nullCredential() {
		final SecurityContext securityContext = mock(SecurityContext.class);
		final Authentication authentication = mock(Authentication.class);
		doReturn(true).when(authentication).isAuthenticated();
		doReturn(authentication).when(securityContext).getAuthentication();
		doReturn(null).when(authentication).getCredentials();
		SecurityContextHolder.setContext(securityContext);
		return securityContext;
	}

}
