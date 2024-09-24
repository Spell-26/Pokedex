import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABButtonsComponent } from './a-b-buttons.component';

describe('ABButtonsComponent', () => {
  let component: ABButtonsComponent;
  let fixture: ComponentFixture<ABButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ABButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
