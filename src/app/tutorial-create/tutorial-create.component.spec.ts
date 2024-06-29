import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialCreateComponent } from './tutorial-create.component';

describe('TutorialCreateComponent', () => {
  let component: TutorialCreateComponent;
  let fixture: ComponentFixture<TutorialCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialCreateComponent]
    });
    fixture = TestBed.createComponent(TutorialCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
