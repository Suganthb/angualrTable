import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablematComponent } from './tablemat.component';

describe('TablematComponent', () => {
  let component: TablematComponent;
  let fixture: ComponentFixture<TablematComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablematComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablematComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
