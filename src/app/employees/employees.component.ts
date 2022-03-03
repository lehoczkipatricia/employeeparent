import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeName = "Erős István";

  constructor() { }

  ngOnInit(): void {
  }

  adTelepules(telepules: string){
    console.log("település", telepules);
  }

}
