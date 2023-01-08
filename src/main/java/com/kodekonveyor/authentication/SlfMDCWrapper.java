package com.kodekonveyor.authentication;

import org.slf4j.MDC;
import org.springframework.stereotype.Component;

import com.kodekonveyor.annotations.ExcludeFromCodeCoverage;
import com.kodekonveyor.annotations.InterfaceClass;

@InterfaceClass
@ExcludeFromCodeCoverage("wrapper")
@Component
public class SlfMDCWrapper {

  public void clear() {
    MDC.clear();
  }

  public void put(final String key, final String val) {
    MDC.put(key, val);
  }
}
