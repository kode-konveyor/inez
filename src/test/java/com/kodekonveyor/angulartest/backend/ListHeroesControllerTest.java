package com.kodekonveyor.angulartest.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.kodekonveyor.annotations.TestedBehaviour;
import com.kodekonveyor.annotations.TestedService;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
@RunWith(MockitoJUnitRunner.class)
@TestedBehaviour("Data access")
@TestedService("ListHeroesController")
class ListHeroesControllerTest
    extends ListHeroesControllerTestBase {

	
  @Test
  @DisplayName("returns a list")
  void test() {
    final List<HeroEntity> result = listHeroesController.call();
    assertNotNull(result);
  }

  @Test
  @DisplayName("the list of heroes are from the database")
  void test1() {
    final List<HeroEntity> result = listHeroesController.call();
    assertEquals(result.get(0).id, HeroDTOTestData.HERO_ID);
  }
}
