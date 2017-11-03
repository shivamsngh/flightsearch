import { Component, OnInit, Input } from '@angular/core';
import { BookingInformation } from '../../models/booking-info';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  @Input() queriedData: BookingInformation;

  constructor() { }

  ngOnInit() {
    
  }

}
