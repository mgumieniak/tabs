import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appTabIndicator]',
})
export class TabIndicatorDirective {
  @Input()
  index: number;

  indicatorWidth = 160;

  @HostBinding('style.--index_pos.px')
  get offset(): number {
    return this.indicatorWidth * this.index;
  }
}
