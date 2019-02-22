import { Component, OnInit, HostListener } from '@angular/core';

export interface IMenuItem {
  iconText: string;
  label: string;
  route: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'cookdevcode';
  isMobile = false;
  slideDownNav = false;

  menuItems: IMenuItem[] = [
    {
      iconText: 'fa fa-home',
      label: ' Home',
      route: ''
    },
    {
      iconText: 'fa fa-male',
      label: ' About Daniel',
      route: 'about-daniel'
    },
    {
      iconText: 'fa fa-female',
      label: ' About Alaina',
      route: 'about-alaina'
    },
  ];

  ngOnInit() {
    this.setIsMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setIsMobile();
  }

  setIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  showSlideDownNav() {
    this.slideDownNav = !this.slideDownNav;
  }
}
