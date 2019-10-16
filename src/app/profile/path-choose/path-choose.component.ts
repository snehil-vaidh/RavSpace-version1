declare function require(path: string):any;

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from "@angular/core";
import { DataService } from 'src/app/shared/data.service';
import { UserService } from 'src/app/shared/user.service';
import { AngularFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations:[],
  imports:[],
  providers:[]
})


@Component({
  selector: 'app-path-choose',
  templateUrl: './path-choose.component.html',
  styleUrls: ['./path-choose.component.css']
})
export class PathChooseComponent implements OnInit {

  constructor(
    private router: Router,
    private service : UserService,
    private firestore : AngularFirestore
  ) { }

  userId : string;
  phase : number;

  ngOnInit() {
    this.userId = localStorage.getItem("userId")
  }

  background_1 = require("./phase-1.png");
  background_2 = require("./phase-2.png");
  process_list = require("./process-list.png");

  
  goToPhase1(pageName:string){
    this.router.navigate([`${pageName}`]);
    this.phase = 1;
    this.firestore.collection('customers').doc(this.userId).update(this.phase);
  }

    
  goToPhase2(pageName:string){
    this.router.navigate([`${pageName}`]);
    this.phase = 2;
    this.firestore.collection('customers').doc(this.userId).update(this.phase);
  }
  

}
