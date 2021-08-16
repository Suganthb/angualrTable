import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'research-dev';

  tableJsonArray:any = [
    {
      title: 'Name',
      type: 'string',
      isVisible: true,
      width:"400px",
      filterValue:"",
      filterOptions:"",
    },
    {
      title: 'Age',
      type: 'number',
      isVisible: true,
      width:"400px",
      filterValue:"",
      filterOptions:"",
    },
    {
      title: 'DOB',
      type: 'date',
      isVisible: false,
      width:"400px",
      filterValue:"",
      filterOptions:"",
    },
    {
      title: 'Address',
      type: 'string',
      isVisible: true,
      width:"400px",
      filterValue:"",
      filterOptions:"",
    },
  ];

  recievedFilter(event:any){
    console.log(event);
  }
}
