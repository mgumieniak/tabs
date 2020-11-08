import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TabItemComponent} from '../tab-item/tab-item.component';
import {Observable} from 'rxjs';
import {delay, map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterContentInit, AfterViewInit {
  @ContentChildren(TabItemComponent)
  tabs: QueryList<TabItemComponent>;

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  tabItems$: Observable<TabItemComponent[]>;

  activeTabItem: TabItemComponent;

  currentIndex = 0;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.tabItems$ = this.tabs.changes
      .pipe(startWith(''))
      .pipe(delay(0))
      .pipe(map(() => this.tabs.toArray()));

    this.activeTabItem = this.tabs.first;
  }

  ngAfterViewInit(): void {
    console.log(this.vc);
    this._loadDynamicContent(this.activeTabItem);
  }

  selectTab(tabItem: TabItemComponent): void {
    if (this.activeTabItem === tabItem) {
      return;
    }

    if (this.activeTabItem) {
      this.activeTabItem.isActive = false;
    }

    this.activeTabItem = tabItem;
    tabItem.isActive = true;
    this._loadDynamicContent(tabItem);
  }

  private _loadDynamicContent(tabItem: TabItemComponent): void {
    this.vc.detach();
    this.vc.insert(tabItem.bodyView);
  }
}
