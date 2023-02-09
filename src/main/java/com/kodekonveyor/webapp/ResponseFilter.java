package com.kodekonveyor.webapp;

import java.io.IOException;

import com.kodekonveyor.annotations.ExcludeFromCodeCoverage;
import com.kodekonveyor.annotations.InterfaceClass;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletResponse;

@InterfaceClass
@ExcludeFromCodeCoverage("interface to underlying framework")
@WebFilter()
public class ResponseFilter implements Filter {

	private static final String ALLOWED_HEADERS = "Content-Type, Authorization";
	private static final String ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers";
	private static final String ALLOWED_ORIGINS = "*";
	private static final String CORS_HEADER = "Access-Control-Allow-Origin";

	@Override
	public void doFilter(final ServletRequest request,
			final ServletResponse response,
			final FilterChain chain) throws IOException, ServletException {
		HttpServletResponse httpServletResponse = (HttpServletResponse) response;
		httpServletResponse.setHeader(
				CORS_HEADER, ALLOWED_ORIGINS);
		httpServletResponse.setHeader(
				ACCESS_CONTROL_ALLOW_HEADERS, ALLOWED_HEADERS);
		chain.doFilter(request, response);
	}

	@Override
	public void init(final FilterConfig filterConfig) throws ServletException {
	}

	@Override
	public void destroy() {
	}
}
