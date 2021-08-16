import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-com',
  templateUrl: './date-com.component.html',
  styleUrls: ['./date-com.component.css']
})
export class DateComComponent implements OnInit {

  @Input() element:any;
  constructor() { }

  ngOnInit(): void {
  }

}
