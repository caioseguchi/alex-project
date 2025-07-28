import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritteBulletsComponent } from './writte-bullets.component';

describe('WritteBulletsComponent', () => {
  let component: WritteBulletsComponent;
  let fixture: ComponentFixture<WritteBulletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritteBulletsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritteBulletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
