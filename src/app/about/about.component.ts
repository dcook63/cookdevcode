import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() name: string;
  @Input() imageSrc: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
