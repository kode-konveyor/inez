import { type Heroes } from 'src/com.kodekonveyor.angulartest/types/Heroes';

export const HEROES: Heroes = [
  { id: '12', name: 'Dr. Nice' },
  { id: '13', name: 'Bombasto' },
  { id: '14', name: 'Celeritas' },
  { id: '15', name: 'Magneta' },
  { id: '16', name: 'RubberMan' },
  { id: '17', name: 'Dynama' },
  { id: '18', name: 'Dr. IQ' },
  { id: '19', name: 'Magma' },
  { id: '20', name: 'Tornado' },
];

export const HEROES_WITH_E: Heroes = [
  { id: '12', name: 'Dr. Nice' },
  { id: '14', name: 'Celeritas' },
  { id: '15', name: 'Magneta' },
  { id: '16', name: 'RubberMan' },
];

export const HEROES_WITHOUT_E: Heroes = [
  { id: '13', name: 'Bombasto' },
  { id: '17', name: 'Dynama' },
  { id: '18', name: 'Dr. IQ' },
  { id: '19', name: 'Magma' },
  { id: '20', name: 'Tornado' },
];
