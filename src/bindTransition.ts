import { type Action } from '@ngrx/store';
import { type AppState } from './com.kodekonveyor.angulartest/types/AppState';

export function bindTransition(
  ServiceClass: new (...args: Array<any>) => any,
  ...parameters: Array<any>
): (state: AppState, action: Action) => AppState {
  const instance = new ServiceClass(...parameters);
  const className = ServiceClass.name;
  const classNameLowercased = className[0].toLowerCase() + className.slice(1);
  const methodName = classNameLowercased.substring(
    0,
    classNameLowercased.length - 'Service'.length
  );
  const method = instance[methodName];

  return method.bind(instance);
}
