import { BehaviorSubject, of } from 'rxjs';
import { forEach } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

export function mockServices(provide: any, methods?: string[], subject?: string): any {
  class MockService {}
  forEach(methods, method => { MockService.prototype[method] = () => of({}); });
  if (subject) {
    MockService.prototype[subject] = new BehaviorSubject<any>(undefined);
  }
  return {provide: provide, useClass: MockService};
}

@Pipe({name: 'translate'})
export class FakeTranslatePipe implements PipeTransform {
  transform(value: any): any {
    return value;
  }
}
