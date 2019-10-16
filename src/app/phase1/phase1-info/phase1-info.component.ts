declare function require(path: string):any;

import { Component, OnInit } from '@angular/core';
import { NgModule } from "@angular/core";
import { Router } from '@angular/router';

@NgModule({
  declarations:[],
  imports:[],
  providers:[]
})


@Component({
  selector: 'app-phase1-info',
  templateUrl: './phase1-info.component.html',
  styleUrls: ['./phase1-info.component.css']
})
export class Phase1InfoComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  headerlogo= require("./logo.png")
  headerprofile = require("./profile.png")
  card_2_background = require("./card-2-background.png")
  card_4_background = require("./card-4-background.png")
  card1_img1 = require("./card1-img1.jpg")
  card1_img2 = require("./card1-img2.png")
  card1_img3 = require("./card1-img3.jpg")
  card1_icon = require("./card1-icon.png")
  card2_img1 = require("./card2-img1.jpg")
  card2_img2 = require("./card2-img2.jpg")
  card2_img3 = require("./card2-img3.jpg")
  card2_icon = require("./card2-icon.png")
  card3_icon = require("./card2-icon.png")
  card3_mcmf = require("./mcmf.png")
  card4_icon = require("./card4-icon.png")

  
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
