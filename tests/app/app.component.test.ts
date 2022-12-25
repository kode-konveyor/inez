import { AppComponent } from '../../src/app/app.component'

describe('AppComponent', () => {
  test('Title is Angular Test', () => {
    expect(new AppComponent().appData.title).toBe('Hello World')
  })
})
