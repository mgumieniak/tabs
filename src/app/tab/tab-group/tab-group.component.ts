import {Component, ContentChildren, Directive, ElementRef, OnInit, QueryList, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent {
  @ContentChildren(MatTab, {descendants: true}) _allTabs: QueryList<MatTab>;
  @ViewChild('tabBodyWrapper') _tabBodyWrapper: ElementRef;
  @ViewChild('tabHeader') _tabHeader: MatTabGroupBaseHeader;

}


export abstract class _MatTabGroupBase{

  abstract _allTabs: QueryList<MatTab>;
  abstract _tabBodyWrapper: ElementRef;
  abstract _tabHeader: MatTabGroupBaseHeader;

}
