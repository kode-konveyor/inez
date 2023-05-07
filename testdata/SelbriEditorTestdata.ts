import { SelbriTestData } from './SelbriTestData';

export const SelbriEditorTestdata = {
  changed: {
    createMode: true,
    show: true,
    selectedSelbriId: 'foo',
    selectedSelbriName: 'bar',
    references: [],
    idToAdd: '',
  },

  selbriSelected: {
    createMode: false,
    show: true,
    selectedSelbriId: SelbriTestData.withId().id,
    selectedSelbriName: SelbriTestData.withId().representation,
    references: [],
    idToAdd: '',
  },
  nonInitialState: {
    createMode: true,
    show: true,
    selectedSelbriId: '1',
    selectedSelbriName: 'negynegynegy',
    references: ['foo'],
    idToAdd: 'bar',
  },
  initialState: {
    createMode: false,
    show: false,
    selectedSelbriId: '',
    selectedSelbriName: '',
    references: [],
    idToAdd: '',
  },
  shown: {
    createMode: true,
    show: true,
    selectedSelbriId: '',
    selectedSelbriName: '',
    references: [],
    idToAdd: '',
  },
};
