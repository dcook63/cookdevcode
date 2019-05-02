import { Component, OnInit, HostListener } from '@angular/core';
import { zip } from '../../node_modules/rxjs';

export interface IMenuSection<T> extends IMenuItem {
  sectionName?: string;
  iconText: string;
  items?: T[]
}

export interface IMenuItem {
  name?: string;
  route?: string;
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

  menuItems: Array<IMenuSection<IMenuItem>> = [
    {
      sectionName: ' Home',
      route: 'home',
      iconText: 'fa fa-home',
    },
    {
      sectionName: ' Daniel',
      iconText: 'fa fa-male',
      items: [
        {
          name: "About Daniel",
          route: "daniel/about-daniel"
        },
        {
          name: "Daniel's Projects",
          route: 'daniel/projects'
        }
      ]
    },
    {
      sectionName: ' Alaina',
      iconText: 'fa fa-female',
      items: [
        {
          name: "About Alaina",
          route: "alaina/about-alaina",
        },
        {
          name: "Alaina's Projects",
          route: "alaina/projects",
        }
      ]
    },
    {
      sectionName: ' About Cook Development',
      route: 'about-cookdev',
      iconText: 'fas fa-laptop-code'
    }
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
