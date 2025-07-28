import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyProComponent } from './apply-pro.component';

describe('ApplyProComponent', () => {
  let component: ApplyProComponent;
  let fixture: ComponentFixture<ApplyProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
