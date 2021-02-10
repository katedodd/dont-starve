import { Component, OnInit } from '@angular/core';
import { zoomIn } from '../../_animations/zoomIn'

@Component({
  selector: 'app-environment-page',
  templateUrl: './environment-page.component.html',
  styleUrls: ['./environment-page.component.css'],
  animations: [zoomIn],
  host: { '[@zoomIn]': '' }
})
export class EnvironmentPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
