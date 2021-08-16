import {Component, Input, OnInit} from '@angular/core';
import {Customer, Representative, Users} from "../customer";
import {CustomerserviceService} from "../customerservice.service";
import {Table} from "primeng/table";
import {FormControl, FormGroup,NgForm} from "@angular/forms";
import {empty} from "rxjs/internal/Observer";

@Component({
  selector: 'app-tablemat',
  templateUrl: './tablemat.component.html',
  styleUrls: ['./tablemat.component.css']
})
export class TablematComponent implements OnInit {
  users: Users[]=[];

  statuses: any[]=[];

  loading: boolean = true;

  filterTable: any[]=[];

  filterCheck: any[]=[];

  activityValues: number[] = [0, 100];
  @Input() tableJsonArray?:any;
  bioSection = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl('')
  });

  map = new Map;


  constructor(private customerService: CustomerserviceService) { }

  ngOnInit(): void {this.customerService.getUsers().then(users => {
    this.users = users;
    this.loading = false;

    this.users.forEach(users => users.dob = new Date(users.dob));
  });

    //get only filter colums in filter
    for(let table of this.tableJsonArray){
      if (table.isVisible){
        this.filterTable.push(table);
      }
    }
  }


  clear(table: Table) {
    table.clear();
  }

  callingFunction() {
    console.log(this.bioSection.value);
    console.log(this.bioSection.value.name);

    // this.users = this.users.filter(
    //   user => user.name == this.bioSection.value.name || user.age == this.bioSection.value.age || user.address == this.bioSection.value.address
    // );
    this.filterfind();
    console.log(this.filterfind());
    this.users=this.users.filter(
      user => {
        if (this.map.get("name"))
          user.name == this.bioSection.value.name
        if(this.map.get("age"))
          user.age == this.bioSection.value.age
        if(this.map.get("address"))
          user.address == this.bioSection.value.address
      }
    );
  }

  filterfind(){
    if(this.bioSection.value.name != ""){
      this.map.set("name",this.bioSection.value.name);
    }
    if(this.bioSection.value.age != ""){
      this.map.set("age",this.bioSection.value.age);
    }
    if(this.bioSection.value.address != ""){
      this.map.set("address",this.bioSection.value.address);
    }
  }


}
