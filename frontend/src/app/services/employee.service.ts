import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../moldels/employee';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly URL_API = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(this.URL_API);
  }
  getEmployee(id: String) {
    return this.http.get(`${this.URL_API}/${id}`);
  }

  addEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.put(`${this.URL_API}/${employee._id}`, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
