import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApigetpostComponent } from './apigetpost.component';

describe('ApigetpostComponent', () => {
  let component: ApigetpostComponent;
  let fixture: ComponentFixture<ApigetpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApigetpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApigetpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
