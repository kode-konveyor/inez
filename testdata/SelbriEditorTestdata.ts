import { SelbriTestData } from './SelbriTestData';

export const SelbriEditorTestdata = {
  changed: {
    createMode: true,
    show: true,
    selectedSelbriId: 'foo',
    selectedSelbriName: 'bar',
  },

  selbriSelected: {
    createMode: false,
    show: true,
    selectedSelbriId: SelbriTestData.withId().id,
    selectedSelbriName: SelbriTestData.withId().representation,
  },
  nonInitialState: {
    createMode: true,
    show: true,
    selectedSelbriId: '1',
    selectedSelbriName: 'negynegynegy',
  },
  initialState: {
    createMode: false,
    show: false,
    selectedSelbriId: '',
    selectedSelbriName: '',
  },
  shown: {
    createMode: true,
    show: true,
    selectedSelbriId: '',
    selectedSelbriName: '',
  },
};
