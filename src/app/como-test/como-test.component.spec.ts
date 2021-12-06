import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoTestComponent } from './como-test.component';

describe('ComoTestComponent', () => {
  let component: ComoTestComponent;
  let fixture: ComponentFixture<ComoTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
