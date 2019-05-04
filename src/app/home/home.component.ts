import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isMobile = false;

  constructor() { }

  ngOnInit() {
    this.setIsMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setIsMobile();
  }

  setIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }
}
