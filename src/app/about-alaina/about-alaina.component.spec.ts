import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAlainaComponent } from './about-alaina.component';

describe('AboutAlainaComponent', () => {
  let component: AboutAlainaComponent;
  let fixture: ComponentFixture<AboutAlainaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAlainaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAlainaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
