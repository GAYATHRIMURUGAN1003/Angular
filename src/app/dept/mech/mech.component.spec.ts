import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechComponent } from './mech.component';

describe('MechComponent', () => {
  let component: MechComponent;
  let fixture: ComponentFixture<MechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MechComponent]
    });
    fixture = TestBed.createComponent(MechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
