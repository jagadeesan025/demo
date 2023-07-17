import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApijComponent } from './apij.component';

describe('ApijComponent', () => {
  let component: ApijComponent;
  let fixture: ComponentFixture<ApijComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApijComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
