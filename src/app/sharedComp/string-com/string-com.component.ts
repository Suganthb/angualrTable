import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-string-com',
  templateUrl: './string-com.component.html',
  styleUrls: ['./string-com.component.css']
})
export class StringComComponent implements OnInit {

  @Input() element?:any;

  filterOptions:any[]=[
    {value: 'equals', viewValue: 'Equals'},
    {value: 'not_equals', viewValue:'Not Equals'},
    {value: 'contains', viewValue: 'Contains'},
    {value: 'not_contains', viewValue:'Not Contains'},
    {value: 'starts_with', viewValue: 'Starts With'},
    {value: 'ends_with', viewValue: 'Ends With'},
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
