import { By, Key } from 'selenium-webdriver';
import { UITester } from './UITester.js';

export const userJourneyParties = [1];

const LOGIN_BUTTON_ID = 'login_button';
const baseUrl = 'http://localhost:3000/';

const AUTH0_USERNAME_FIELD_NAME = 'email';
const AUTH0_PASSWORD_FIELD_NAME = 'password';
const LOGIN = 'test@kodekonveyor.com';
const PASSWORD = '6rg8aaWVJP2uY7G';

const AUTH0_LOGIN_BUTTON_NAME = 'submit';
const PLUS_BUTTON_ID = 'selbris-plusbutton';
const EDITOR_INPUT_ID = 'selbris-selbrieditor-name-input';
const EDITOR_CREATE_BUTTON_ID = 'selbris-selbrieditor-create';
const CREATED_ITEM_XPATH =
  '//div[@class="selbriitem-name" and contains(text(),"Thing")]';
const COMMANDLINE_ITEM_XPATH =
  '//div[@class="selbriitem-name" and contains(text(),"my shiny new selbri")]';
const EMPTY_COMMANDLINE_XPATH =
  '//input[@id="commandline-input" and @ng-reflect-model=""]';

const COMMANDLINE_ID = 'commandline-input';
// eslint-disable-next-line kodekonveyor/no-literals
export const userJourney = new UITester()
  .goTo(baseUrl)
  .lookAt(By.id(LOGIN_BUTTON_ID))
  .click('push the login button')
  .lookAt(By.name(AUTH0_USERNAME_FIELD_NAME))
  .enter('fill in the username', LOGIN)
  .lookAt(By.name(AUTH0_PASSWORD_FIELD_NAME))
  .enter('fill in the password', PASSWORD)
  .lookAt(By.name(AUTH0_LOGIN_BUTTON_NAME))
  .click('click the login button')
  .lookAt(By.id(PLUS_BUTTON_ID))
  .click('add a selbry by clicking on the plus button')
  .lookAt(By.id(EDITOR_INPUT_ID))
  .enter('enter the name of the selbri', 'Thing')
  .lookAt(By.id(EDITOR_CREATE_BUTTON_ID))
  .click('click create to create the selbri')
  .lookAt(By.xpath(CREATED_ITEM_XPATH))
  .screenshot('the new item appears in the list')
  .lookAt(By.id(COMMANDLINE_ID))
  .enter('create a selbri from the command line', 'create my shiny new selbri')
  .enter('press enter', Key.RETURN)
  .lookAt(By.xpath(COMMANDLINE_ITEM_XPATH))
  .screenshot('this also appears in the list')
  .lookAt(By.xpath(EMPTY_COMMANDLINE_XPATH))
  .screenshot('the commandline is cleared')

  .check();
