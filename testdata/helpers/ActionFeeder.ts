import { type Actions } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { Mutex } from 'cdd-ts';
import { type EnvironmentManipulatorType } from 'cdd-ts/dist/src/types/EnvironmentManipulatorType';
import { Observable } from 'rxjs';
import { ActionSequenceTestData } from '../ActionSequenceTestData';

export class ActionFeeder implements EnvironmentManipulatorType {
  constructor(readonly caseName: string) {
    this.setUp = this.setUp.bind(this);
    this.tearDown = this.tearDown.bind(this);
  }

  static environmentState = {
    scenario: 'default',
  };

  static mutex = new Mutex();

  static actions: Actions<Action> = new Observable((subscriber) => {
    (ActionSequenceTestData as Record<string, () => Array<Action>>)
      [ActionFeeder.environmentState.scenario]()
      .forEach((element) => {
        subscriber.next(element);
      });
    subscriber.complete();
  });

  async setUp(): Promise<void> {
    await ActionFeeder.mutex.lock();
    ActionFeeder.environmentState.scenario = this.caseName;
  }

  tearDown(): void {
    ActionFeeder.mutex.unlock();
  }
}
