import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanielProjectsComponent } from './daniel-projects.component';

describe('DanielProjectsComponent', () => {
  let component: DanielProjectsComponent;
  let fixture: ComponentFixture<DanielProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanielProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanielProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
