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
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  img= require("./img.png")

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
