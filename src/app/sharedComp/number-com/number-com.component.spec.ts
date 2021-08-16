import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberComComponent } from './number-com.component';

describe('NumberComComponent', () => {
  let component: NumberComComponent;
  let fixture: ComponentFixture<NumberComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
