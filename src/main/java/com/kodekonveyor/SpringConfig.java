package com.kodekonveyor;

import java.lang.reflect.Field;
import java.util.Optional;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import javax.servlet.Filter;
import javax.sql.DataSource;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InjectionPoint;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.core.MethodParameter;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.filter.CharacterEncodingFilter;

import com.kodekonveyor.annotations.ExcludeFromCodeCoverage;
import com.kodekonveyor.annotations.InterfaceClass;
import com.kodekonveyor.webapp.ResponseFilter;
import com.kodekonveyor.webapp.WebappConstants;

@EnableScheduling
@SpringBootApplication
@ServletComponentScan
@InterfaceClass
@ExcludeFromCodeCoverage("interface to underlaying framework")
public class SpringConfig extends SpringBootServletInitializer {

  @Value("${com.kodekonveyor.repo.jdbcDriver}")
  private String jdbcDriver;

  @Value("${com.kodekonveyor.repo.jdbcUri}")
  private String jdbcUri;

  @Value("${com.kodekonveyor.task.max-thread:10}")
  private int maxThreadCount;

  @Value("${com.kodekonveyor.task.max-measurement-loops:10}")
  private int maxMeasurementLoops;

  public static void main(final String[] args) {
    SpringApplication.run(SpringConfig.class, args);
  }

  @Bean
  public DataSource dataSource() {
    final DataSourceBuilder<?> dataSourceBuilder = DataSourceBuilder.create();
    dataSourceBuilder.driverClassName(jdbcDriver);
    dataSourceBuilder.url(jdbcUri);
    return dataSourceBuilder.build();
  }

  @Bean
  public FilterRegistrationBean<CharacterEncodingFilter> filterRegistrationBean() {
    final FilterRegistrationBean<CharacterEncodingFilter> registrationBean = new FilterRegistrationBean<>();
    final CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
    characterEncodingFilter.setForceEncoding(true);
    characterEncodingFilter.setEncoding(WebappConstants.UTF_8);
    registrationBean.setFilter(characterEncodingFilter);
    return registrationBean;
  }

  @Bean
  public FilterRegistrationBean<Filter> responseFilterRegistrationBean() {
    final FilterRegistrationBean<Filter> registrationBean = new FilterRegistrationBean<>();
    registrationBean.setFilter(new ResponseFilter());
    return registrationBean;
  }

  @Bean
  @Scope("prototype")
  public Logger logger(final InjectionPoint injectionPoint) {
    return LoggerFactory.getLogger(
        Optional.ofNullable(injectionPoint.getMethodParameter())
            .<Class<?>>map(MethodParameter::getContainingClass)
            .orElseGet(() -> Optional.ofNullable(injectionPoint.getField())
                .map(Field::getDeclaringClass)
                .orElseThrow(IllegalArgumentException::new)));
  }

  @Bean
  public ModelMapper modelMapper() {
    return new ModelMapper();
  }

  @Bean(destroyMethod = "shutdown")
  public ExecutorService executorService() {// NOPMD
    return Executors.newFixedThreadPool(maxThreadCount);
  }

  public int getMaxMeasurementLoops() {
    return maxMeasurementLoops;
  }
}
