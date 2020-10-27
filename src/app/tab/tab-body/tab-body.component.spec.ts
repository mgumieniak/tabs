import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBodyComponent } from './tab-body.component';

describe('TabBodyComponentComponent', () => {
  let component: TabBodyComponent;
  let fixture: ComponentFixture<TabBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});