import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewRef
} from '@angular/core';
import {TabLabelComponent} from '../tab-label/tab-label.component';
import {LazyContentDirective} from '../lazy-content.directive';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabItemComponent implements OnInit, OnDestroy, AfterContentInit {
  @Input()
  label: string;

  @Input()
  isActive: boolean;

  @ContentChild(TabLabelComponent)
  labelComponent: TabLabelComponent;

  @ContentChild(LazyContentDirective, {read: TemplateRef})
  _lazyBodyContent: TemplateRef<LazyContentDirective>;

  bodyView: ViewRef;

  constructor() {
  }

  ngOnInit(): void {
    console.log('Init TabItemComponent');
  }

  ngAfterContentInit(): void {
    this.bodyView = this._lazyBodyContent.createEmbeddedView(null);
  }

  ngOnDestroy(): void {
    console.log('Destroy TabItemComponent');
  }
}
