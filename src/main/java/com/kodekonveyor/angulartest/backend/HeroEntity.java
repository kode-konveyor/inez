package com.kodekonveyor.angulartest.backend;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@SuperBuilder(toBuilder=true)
@NoArgsConstructor
public class HeroEntity extends HeroDTO{
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;
}
