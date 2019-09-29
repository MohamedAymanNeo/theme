import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComingComponent } from './new-coming.component';

describe('NewComingComponent', () => {
  let component: NewComingComponent;
  let fixture: ComponentFixture<NewComingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewComingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
