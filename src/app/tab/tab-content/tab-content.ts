import {Directive, InjectionToken, TemplateRef} from '@angular/core';

export const MAT_TAB_CONTENT = new InjectionToken<MatTabContent>('MatTabContent');

/** Decorates the `ng-template` tags and reads out the template from it. */
@Directive({
  selector: '[matTabContent]',
  providers: [{provide: MAT_TAB_CONTENT, useExisting: MatTabContent}],
})
export class MatTabContent {
  constructor(
    /** Content for the tab. */ public template: TemplateRef<any>) {}
}
