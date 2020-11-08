import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrls: ['./tab-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabLabelComponent implements OnInit, OnDestroy {
  @ViewChild(TemplateRef)
  labelContent: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {
    console.log('Init TabLabelComponent');
  }

  ngOnDestroy(): void {
    console.log('Destroy TabLabelComponent');
  }

}
