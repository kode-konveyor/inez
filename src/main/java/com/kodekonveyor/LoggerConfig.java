package com.kodekonveyor;

import java.lang.reflect.Field;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InjectionPoint;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.core.MethodParameter;

@Configuration
public class LoggerConfig {
	@Bean
	@Scope("prototype")
	public Logger logger(final InjectionPoint injectionPoint) {
		return LoggerFactory.getLogger(
				Optional.ofNullable(injectionPoint.getMethodParameter())
						.<Class<?>>map(MethodParameter::getContainingClass)
						.orElseGet(() -> Optional
								.ofNullable(injectionPoint.getField())
								.map(Field::getDeclaringClass)
								.orElseThrow(IllegalArgumentException::new)));
	}

}
