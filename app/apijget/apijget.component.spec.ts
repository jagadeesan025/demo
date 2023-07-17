import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApijgetComponent } from './apijget.component';

describe('ApijgetComponent', () => {
  let component: ApijgetComponent;
  let fixture: ComponentFixture<ApijgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApijgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApijgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
