import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeBrowseComponent } from './components/employee-browse/employee-browse.component';

const routes: Routes = [
  { path: '', redirectTo: '/emplyeeBrowse', pathMatch: 'full' },
  { path: 'emplyeeBrowse', component: EmployeeBrowseComponent },
  { path: 'employee', component: EmployeesComponent },
  { path: 'editEmplyee/:id', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
