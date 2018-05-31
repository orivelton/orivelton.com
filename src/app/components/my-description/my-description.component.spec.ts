import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDescriptionComponent } from './my-description.component';

describe('MyDescriptionComponent', () => {
  let component: MyDescriptionComponent;
  let fixture: ComponentFixture<MyDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
