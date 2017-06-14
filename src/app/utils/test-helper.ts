import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { forEach } from 'lodash';
import 'rxjs/add/observable/of';


export function mockServices(provide: any, methods?: string[], subject?: string): any {
  class MockService {}
  forEach(methods, method => { MockService.prototype[method] = () => Observable.of({}); });
  if (subject) {
    MockService.prototype[subject] = new BehaviorSubject<any>(undefined);
  }
  return {provide: provide, useClass: MockService};
}
