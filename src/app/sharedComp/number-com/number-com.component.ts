import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-number-com',
  templateUrl: './number-com.component.html',
  styleUrls: ['./number-com.component.css']
})
export class NumberComComponent implements OnInit {

  @Input() element:any;

  filterOptions:any[]=[
    {value: 'equals', viewValue: 'Equals'},
    {value: 'not_equals', viewValue: 'Not Equals'},
    {value: 'less_than', viewValue: 'Less than'},
    {value: 'less_than_or_equal', viewValue: 'Less than or equal'},
    {value: 'greater_than', viewValue: 'Greater than'},
    {value: 'greater_than_or_equal', viewValue: 'Greater than or equal'},
    {value: 'between', viewValue: 'Between'}
  ];

  selectedLevel = this.filterOptions[0].value;
  searchText='';

  constructor() { }

  ngOnInit(): void {
    this.element.filterOptions=this.filterOptions[0].value;
  }

  changeOptions(event: any){
    this.element.filterOptions=event.target.value;

  }

}
