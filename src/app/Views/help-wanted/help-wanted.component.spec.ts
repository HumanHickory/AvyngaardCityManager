import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpWantedComponent } from './help-wanted.component';

describe('HelpWantedComponent', () => {
  let component: HelpWantedComponent;
  let fixture: ComponentFixture<HelpWantedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpWantedComponent]
    });
    fixture = TestBed.createComponent(HelpWantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
