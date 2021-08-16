import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.css']
})
export class SharedTableComponent implements OnInit {

  @Input() tableJsonArray?:any;
  @Input() users?:any;
  @Output() newItemEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  find(){
    this.newItemEvent.emit();
  }

}
