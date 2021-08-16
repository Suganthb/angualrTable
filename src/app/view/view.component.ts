import { Component, OnInit } from '@angular/core';
import {CustomerserviceService} from "../customerservice.service";
import {Users} from "../customer";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  users: Users[]=[];
  loading: boolean = true;

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

  constructor(private customerService: CustomerserviceService) { }

  ngOnInit(): void {
    this.customerService.getUsers().then(users => {
      this.users = users;
      this.loading = false;

      this.users.forEach(users => users.dob = new Date(users.dob));
    });
  }

  filter(){
    if (this.tableJsonArray[0].filterValue!=''){
      if(this.tableJsonArray[1].filterValue!=''){
        this.users = this.users.filter(
          user => user.name == this.tableJsonArray[0].filterValue && user.age==this.tableJsonArray[1].filterValue
        );
      }
      else{
        this.users = this.users.filter(
          user => user.name == this.tableJsonArray[0].filterValue
        );
      }
    }

    else if(this.tableJsonArray[1].filterValue!=''){
      this.users = this.users.filter(
        user => user.age==this.tableJsonArray[1].filterValue
      );
    }
    console.log(this.users);
  }

}
