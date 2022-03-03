import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employeeName = "";
  @Output() ujTelepulesEsemeny = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  adTelepules(telepules: string){
    this.ujTelepulesEsemeny.emit(telepules);
  }

}
