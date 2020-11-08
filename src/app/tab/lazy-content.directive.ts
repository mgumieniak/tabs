import {Directive, InjectionToken, TemplateRef} from '@angular/core';

export const LAZY_CONTENT = new InjectionToken<LazyContentDirective>('LazyContentDirective');

@Directive({
  selector: '[appLazyContent]'
})
export class LazyContentDirective {

  constructor(public readonly template: TemplateRef<any>) {
  }

}
