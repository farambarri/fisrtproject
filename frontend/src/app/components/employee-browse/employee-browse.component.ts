import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/moldels/employee';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-employee-browse',
  templateUrl: './employee-browse.component.html',
  styleUrls: ['./employee-browse.component.css']
})
export class EmployeeBrowseComponent implements OnInit {
  employees: Employee[];
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res as Employee[];
    });
  }
  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(res => {
      console.log(res);
      M.toast({ html: 'Successfully deleted' });
      this.getEmployee();
    });
  }
  editEmployee(employee: Employee) {
    this.router.navigate(['editEmplyee', employee._id]);
  }
}
