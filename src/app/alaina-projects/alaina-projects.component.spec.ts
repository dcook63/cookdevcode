import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlainaProjectsComponent } from './alaina-projects.component';

describe('AlainaProjectsComponent', () => {
  let component: AlainaProjectsComponent;
  let fixture: ComponentFixture<AlainaProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlainaProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlainaProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
