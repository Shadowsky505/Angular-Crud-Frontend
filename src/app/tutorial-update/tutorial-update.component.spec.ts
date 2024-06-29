import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialUpdateComponent } from './TutorialUpdateComponent';

describe('TutorialUpdateComponent', () => {
  let component: TutorialUpdateComponent;
  let fixture: ComponentFixture<TutorialUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialUpdateComponent]
    });
    fixture = TestBed.createComponent(TutorialUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
