import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringComComponent } from './string-com.component';

describe('StringComComponent', () => {
  let component: StringComComponent;
  let fixture: ComponentFixture<StringComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
