import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanfigurationComponent } from './canfiguration.component';

describe('CanfigurationComponent', () => {
  let component: CanfigurationComponent;
  let fixture: ComponentFixture<CanfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
