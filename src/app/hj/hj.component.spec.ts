import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HjComponent } from './hj.component';

describe('HjComponent', () => {
  let component: HjComponent;
  let fixture: ComponentFixture<HjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
