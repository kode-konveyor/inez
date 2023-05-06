import { MakeTestDataService } from 'cdd-ts';
import { type TestDataDescriptor } from 'cdd-ts/dist/src/types/TestDataDescriptor';
import { type Selbri } from 'src/inez/types/Selbri';

const SelbriTestDataDescriptor = {
  default: { representation: 'Test Selbri' },
  withEmtpyId: { __from: 'default', id: '' },
  withId: { __from: 'default', id: '1' },
  modified: { __from: 'withId', representation: 'Test Selbri modified' },
  another: { id: '2', representation: 'Another Test Selbri' },
} satisfies TestDataDescriptor<Selbri>;

export const SelbriTestData = new MakeTestDataService<
  Selbri,
  typeof SelbriTestDataDescriptor
>().makeTestData(SelbriTestDataDescriptor);
