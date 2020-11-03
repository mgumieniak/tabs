import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabLabelComponent } from './tab-label/tab-label.component';
import { TabBodyComponent } from './tab-body/tab-body.component';
import { TabIndicatorDirective } from './tab-indicator.directive';


@NgModule({
  declarations: [
    TabsComponent,
    TabItemComponent,
    TabLabelComponent,
    TabBodyComponent,
    TabIndicatorDirective],
  exports: [
    TabItemComponent,
    TabLabelComponent,
    TabsComponent,
    TabBodyComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class TabModule {
}
