package com.kodekonveyor.webapp;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletResponse;

import com.kodekonveyor.annotations.ExcludeFromCodeCoverage;
import com.kodekonveyor.annotations.InterfaceClass;

@InterfaceClass
@ExcludeFromCodeCoverage("interface to underlying framework")
@WebFilter()
public class ResponseFilter implements Filter {

  private static final String CONTENT_TYPE = "Content-Type";
  private static final String ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers";
  private static final String VALUE = "*";
  private static final String CORS_HEADER = "Access-Control-Allow-Origin";
  // Access-Control-Allow-Headers: Content-Type

  @Override
  public void doFilter(final ServletRequest request, final ServletResponse response,
      final FilterChain chain) throws IOException, ServletException {
    HttpServletResponse httpServletResponse = (HttpServletResponse) response;
    httpServletResponse.setHeader(
        CORS_HEADER, VALUE);
    httpServletResponse.setHeader(
        ACCESS_CONTROL_ALLOW_HEADERS, CONTENT_TYPE);
    chain.doFilter(request, response);
  }

  @Override
  public void init(final FilterConfig filterConfig) throws ServletException {
  }

  @Override
  public void destroy() {
  }
}
