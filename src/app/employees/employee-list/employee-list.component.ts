import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  list:Employee[]

  constructor(private service: EmployeeService) {
    this.value123()
    // this.data()
   }

  ngOnInit(): void { 
  
  }

  value123(){
    this.service.getEmployees().subscribe(actionArray=>{
      this.list = actionArray.map(item =>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Employee
         } 
      })
    })
  }


  data(){
    this.service.getEmployees().subscribe((datafrom=>{
      console.log(datafrom);
      
    }))
  }

}
