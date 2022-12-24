import { registerPerson } from "../../src/app/registerPerson";
import { mock, mockFn } from 'jest-mock-extended';

describe('mutationexample', () => {
  const setState = mockFn();
  const dispatch = mockFn();

  registerPerson(dispatch,setState);
  it('calls dispatch', function () {
    expect(dispatch).toHaveBeenCalled()
  });

/*  it('calls setState', function () {
    expect(setState).toHaveBeenCalled()
  });
*/
})
