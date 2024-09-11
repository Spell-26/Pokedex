import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingOldSchoolTerminalComponent } from './writing-old-school-terminal.component';

describe('WritingOldSchoolTerminalComponent', () => {
  let component: WritingOldSchoolTerminalComponent;
  let fixture: ComponentFixture<WritingOldSchoolTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingOldSchoolTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritingOldSchoolTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
