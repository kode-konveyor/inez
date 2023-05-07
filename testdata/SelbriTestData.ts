import { MakeTestDataService } from '@kodekonveyor/cdd-ts';
import { type TestDataDescriptor } from '@kodekonveyor/cdd-ts/dist/src/types/TestDataDescriptor';
import { type SelbriDTO } from '@kodekonveyor/inez-server/src/DTO/SelbriDTO';

const SelbriTestDataDescriptor = {
  default: { representation: 'Test Selbri', references: [] },
  withEmtpyId: { __from: 'default', id: '', references: [] },
  withId: { __from: 'default', id: '1', references: [] },
  modified: {
    __from: 'withId',
    representation: 'Test Selbri modified',
    references: [],
  },
  another: { id: '2', representation: 'Another Test Selbri', references: [] },
  fromCommand: {
    id: '3',
    representation: 'created From Command',
    references: [],
  },
} satisfies TestDataDescriptor<SelbriDTO>;

export const SelbriTestData = new MakeTestDataService<
  SelbriDTO,
  typeof SelbriTestDataDescriptor
>().makeTestData(SelbriTestDataDescriptor);
