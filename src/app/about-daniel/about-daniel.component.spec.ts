import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDanielComponent } from './about-daniel.component';

describe('AboutDanielComponent', () => {
  let component: AboutDanielComponent;
  let fixture: ComponentFixture<AboutDanielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDanielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDanielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
