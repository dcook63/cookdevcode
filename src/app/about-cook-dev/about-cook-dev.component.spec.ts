import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCookDevComponent } from './about-cook-dev.component';

describe('AboutCookDevComponent', () => {
  let component: AboutCookDevComponent;
  let fixture: ComponentFixture<AboutCookDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCookDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCookDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
