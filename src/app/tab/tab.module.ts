import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabLabelComponent } from './tab-label/tab-label.component';
import { TabBodyComponent } from './tab-body/tab-body.component';


@NgModule({
  declarations: [
    TabsComponent,
    TabItemComponent,
    TabLabelComponent,
    TabBodyComponent],
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
