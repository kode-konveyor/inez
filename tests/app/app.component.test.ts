import { mock, mockFn } from 'jest-mock-extended'
import { InitializeAppDataService } from 'src/services/InitializeAppDataService'
import { AppComponent, appData } from '../../src/app/app.component'

const APP_DATA = {
  title: "Test Title",
  heroes: []
}

describe('AppComponent', () => {
  const initializeAppDataService: InitializeAppDataService = mock<InitializeAppDataService>();
  const initializeAppDataServiceCall = mockFn<InitializeAppDataService["call"]>();
  initializeAppDataServiceCall.mockReturnValue(APP_DATA)
  initializeAppDataService.call = initializeAppDataServiceCall;
  const sut = new AppComponent(initializeAppDataService);
  test('initializeAppDataService is filled in', () => {
    expect(sut.initializeAppDataService).toBe(initializeAppDataService);
  })
  test('global appData is filled in', () => {
    expect(appData).toBe(APP_DATA)
  })
  test('local appData is filled in', () => {
    expect(sut.appData).toBe(APP_DATA)
  })
})
