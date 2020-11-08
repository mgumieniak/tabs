import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabLabelComponent } from './tab-label/tab-label.component';
import { TabIndicatorDirective } from './tab-indicator.directive';
import { LazyContentDirective } from './lazy-content.directive';


@NgModule({
  declarations: [
    TabsComponent,
    TabItemComponent,
    TabLabelComponent,
    TabIndicatorDirective,
    LazyContentDirective],
  exports: [
    TabItemComponent,
    TabLabelComponent,
    TabsComponent,
    LazyContentDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class TabModule {
}
