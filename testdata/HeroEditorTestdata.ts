import { HeroTestData } from './HeroTestData';

export const HeroEditorTestdata = {
  changed: {
    createMode: true,
    show: true,
    selectedHeroId: 'foo',
    selectedHeroName: 'bar',
  },

  heroSelected: {
    createMode: false,
    show: true,
    selectedHeroId: HeroTestData.withId().id,
    selectedHeroName: HeroTestData.withId().name,
  },
  nonInitialState: {
    createMode: true,
    show: true,
    selectedHeroId: '1',
    selectedHeroName: 'negynegynegy',
  },
  initialState: {
    createMode: false,
    show: false,
    selectedHeroId: '',
    selectedHeroName: '',
  },
  shown: {
    createMode: true,
    show: true,
    selectedHeroId: '',
    selectedHeroName: '',
  },
};
