import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBreakComponent } from './page-break.component';

describe('PageBreakComponent', () => {
  let component: PageBreakComponent;
  let fixture: ComponentFixture<PageBreakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageBreakComponent]
    });
    fixture = TestBed.createComponent(PageBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
