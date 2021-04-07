import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { MessageComponent } from './message/message.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule}from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule}from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    MessageComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,MatDividerModule,MatCardModule,MatTableModule,MatInputModule,MatFormFieldModule, StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
