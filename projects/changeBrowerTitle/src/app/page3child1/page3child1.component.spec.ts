import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3child1Component } from './page3child1.component';

describe('Page3child1Component', () => {
  let component: Page3child1Component;
  let fixture: ComponentFixture<Page3child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
