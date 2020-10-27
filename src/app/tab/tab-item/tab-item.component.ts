import {ChangeDetectionStrategy, Component, ContentChild, Input, OnInit} from '@angular/core';
import {TabLabelComponent} from '../tab-label/tab-label.component';
import {TabBodyComponent} from '../tab-body/tab-body.component';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabItemComponent implements OnInit {
  @Input()
  label: string;

  @Input()
  isActive: boolean;

  @ContentChild(TabBodyComponent)
  bodyComponent: TabBodyComponent;

  @ContentChild(TabLabelComponent)
  labelComponent: TabLabelComponent;

  constructor() {}

  ngOnInit(): void {}
}
