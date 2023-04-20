import { MakeTestDataService } from 'cdd-ts';
import { type TestDataDescriptor } from 'cdd-ts/dist/src/types/TestDataDescriptor';
import { type Hero } from 'src/com.kodekonveyor.angulartest/types/Hero';

const HeroTestDataDescriptor = {
  default: { name: 'Test Hero' },
  withEmtpyId: { __from: 'default', id: '' },
  withId: { __from: 'default', id: '1' },
  modified: { __from: 'withId', name: 'Test Hero modified' },
  another: { id: '2', name: 'Another Test Hero' },
} satisfies TestDataDescriptor<Hero>;

export const HeroTestData = new MakeTestDataService<
  Hero,
  typeof HeroTestDataDescriptor
>().makeTestData(HeroTestDataDescriptor);
