package com.kodekonveyor.authentication;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.kodekonveyor.annotations.ExcludeFromCodeCoverage;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@Data
@EqualsAndHashCode
@ToString
@ExcludeFromCodeCoverage("no code")
public class UserEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column
  private String login;
  @ManyToMany(
      fetch = FetchType.LAZY,
      cascade = {
          CascadeType.ALL
      }
  )
  @EqualsAndHashCode.Exclude
  private Set<RoleEntity> roles;

}
