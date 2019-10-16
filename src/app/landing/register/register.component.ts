declare function require(path: string):any;

import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from "@angular/core";
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { DataService } from 'src/app/shared/data.service';
import { customersUser } from 'src/app/shared/user.model';

@NgModule({
  declarations:[],
  imports:[],
  providers:[]
})


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  
  transferData : string;
  
  constructor(
    private router: Router,
    private service : UserService,
    private firestore: AngularFirestore,
    private toastr : ToastrModule,
    private transferDataService : DataService
    ){
    
  }

  logo = require("./logo.png");

  userList : customersUser[];

  
  ngOnInit(){
    this.resetForm()
    // this.transferDataService.currentData.subscribe(data => this.transferData = data);  
}



  resetForm(form?: NgForm){
    if(form != null)
      form.resetForm();
    this.service.userData = {
      id : "",
      fullName : "",
      Email : "",
      password: "",
      profession : "",
      username: "",
      userBio: "",
      profileImageURL : "",
      schoolStudent : "",
      collegeStudent : "",
      schoolName : "",
      collegeName : "",
      schoolStandard : 0,
      collegeMajor : ""
    }
  }

  sendData(){
    this.transferDataService.changeData(this.transferData)
  }

  userRegister(form:NgForm, pageName:string){
    let data = form.value;
    console.log(data);
    this.firestore.collection('customers').add(data);

    this.transferData = data.Email;

    this.sendData();

    this.resetForm();
    this.router.navigate([`${pageName}`]);
  }

}
   

