declare function require(path: string):any;


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularFirestoreModule, AngularFirestore } from "@angular/fire/firestore";
import { UserService } from 'src/app/shared/user.service';
import { DataService } from 'src/app/shared/data.service';
import { customersUser } from '../../shared/user.model';
import { NgForm } from '@angular/forms';


@NgModule({
  declarations:[],
  imports:[CommonModule],
  providers:[],
})


@Component({
  selector: 'app-profile-setup',
  templateUrl: './profile-setup.component.html',
  styleUrls: ['./profile-setup.component.css']
})
export class ProfileSetupComponent implements OnInit {

  userId : string = '';

  displayUser : customersUser;

  showSpinner : boolean = true;

  userList : customersUser[];


  constructor(private router: Router,
    private firestore : AngularFirestoreModule,
    private db : AngularFirestore,
    private service: UserService,
    ) { }




  ngOnInit() {
    // localStorage.setItem("userID", "Snehil Kumar Vaidh");
    this.userId = localStorage.getItem("userId");
    console.log("Transfer Data : ", this.userId);

    this.service.getDisplayData(this.userId).subscribe(user => {
      this.displayUser = user;
    });


  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }



  background_1 = require("./background-1.png")
  background_2 = require("./background-2.png")
  background_4 = require("./background-4.png")
  process_list = require("./process-list.png")
  profile_img = require("./profile.png")

}
