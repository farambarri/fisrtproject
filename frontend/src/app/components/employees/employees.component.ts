import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/moldels/employee';
import { Router, ActivatedRoute } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  selectedEmployee: Employee;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.selectedEmployee = new Employee();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.setEmployeeForEdition(params['id']);
    });
  }

  setEmployeeForEdition(id: String) {
    console.log(id);
    if (id) {
      this.employeeService.getEmployee(id).subscribe((res: Employee) => {
        console.log(res);
        this.selectedEmployee = res;
      });
    }
  }

  OnDestroy() {
    this.sub.unsubscribe();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.selectedEmployee = new Employee();
    }
  }

  back() {
    console.log('back');
    this.router.navigateByUrl('/emplyeeBrowse');
  }

  addEmployee(form?: NgForm) {
    if (form) {
      if (form.value._id) {
        this.employeeService.updateEmployee(form.value).subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Successfully Updated' });
          this.router.navigateByUrl('/emplyeeBrowse');
        });
      } else {
        this.employeeService.addEmployee(form.value).subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Successfully saved' });
          this.router.navigateByUrl('/emplyeeBrowse');
        });
      }
    }
  }
}
