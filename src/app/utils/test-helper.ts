import { BehaviorSubject, of } from 'rxjs';
import { Pipe, PipeTransform, NgModule } from '@angular/core';

export function mockServices(provide: any, methods?: string[], subject?: string): any {
  class MockService {}
  (methods || []).forEach(method => { MockService.prototype[method] = () => of({}); });
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
// Dummy module to satisfy Angular AOT build. Never used.
// Check issue : https://github.com/angular/angular/issues/13590
@NgModule({
  declarations: [
    FakeTranslatePipe
  ]
})
export class RouterStubsModule {}
