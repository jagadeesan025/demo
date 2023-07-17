import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmerComponent } from './custmer.component';

describe('CustmerComponent', () => {
  let component: CustmerComponent;
  let fixture: ComponentFixture<CustmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
