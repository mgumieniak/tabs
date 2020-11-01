import {ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabBodyComponent implements OnInit {
  @ViewChild(TemplateRef)
  bodyContent: TemplateRef<any>;
  @Input()
  info: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
