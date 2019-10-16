import { Component, OnInit } from '@angular/core';
declare function require(path: string):any;

import { NgModule } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { PopupComponent } from "./popup/popup.component";

@NgModule({
  declarations:[],
  imports:[],
  providers:[]
})


@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit{

  constructor(
    private dialog : MatDialog
  ){}

  ngOnInit() {}

  imagesrc1=require('./shapes1.png');
  imagesrc2=require('./developer.jpg');
  imagesrc3=require('./designer.png');
  imagesrc4=require('./ux_ui.png');
  imagesrc5=require('./merketing.png');
  logo = require("./logo.png");

  popUp(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(PopupComponent, dialogConfig)
  }

}
