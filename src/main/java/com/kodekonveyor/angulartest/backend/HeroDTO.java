package com.kodekonveyor.angulartest.backend;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder(toBuilder=true)
@NoArgsConstructor
public class HeroDTO {
  Long id;
  String name;

}
