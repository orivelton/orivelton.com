import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSkillComponent } from './all-skill.component';

describe('AllSkillComponent', () => {
  let component: AllSkillComponent;
  let fixture: ComponentFixture<AllSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
