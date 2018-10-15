import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  @Input() view: string;
  constructor() { }

  ngOnInit() {
  }

}
