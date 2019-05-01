import { Component, OnInit, HostListener } from '@angular/core';
import { zip } from '../../node_modules/rxjs';

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
  danielOpen = false;
  alainaOpen = false;

  menuItems: IMenuItem[] = [
    {
      iconText: 'fa fa-home',
      label: ' Home',
      route: ''
    },
    {
      iconText: 'fas fa-laptop-code',
      label: ' About Cook Development',
      route: 'about-cook-dev'
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
  onResize() {
    this.setIsMobile();
  }

  @HostListener('document:click', ['$event.target'])
  onclick(event) {
    switch(event.id) {
      case "daniel-menu":
        this.closeMenu("alaina-menu");
        this.toggleMenu(event.id);
        break;
      case "alaina-menu":
        this.closeMenu("daniel-menu");
        this.toggleMenu(event.id);
        break;
      default:
        this.closeMenu("alaina-menu");
        this.closeMenu("daniel-menu");
        break;
    }
  }

  setIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  navigatePage(routerLink: string) {
    this.showSlideDownNav();
  }

  showSlideDownNav() {
    this.slideDownNav = !this.slideDownNav;
  }

  toggleMenu(menuName: string) {
    switch(menuName) {
      case 'daniel-menu':
        this.danielOpen = !this.danielOpen;
        this.alainaOpen = false;
        break;
      case 'alaina-menu':
        this.alainaOpen = !this.alainaOpen;
        this.danielOpen = false;
        break;
    }
  }

  closeMenu(menuName: string) {
    switch(menuName) {
      case 'daniel-menu':
        this.danielOpen = false;
        break;
      case 'alaina-menu':
        this.alainaOpen = false;
        break;
    }
  }
}
