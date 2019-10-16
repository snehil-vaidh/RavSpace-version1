import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './landing/register/register.component';
import { BlogsComponent } from './landing/blogs/blogs.component';
import { ContactComponent } from './landing/contact/contact.component';
import { AboutusComponent } from './landing/aboutus/aboutus.component';
import { HowitworkComponent } from './landing/howitwork/howitwork.component';
import { CareerComponent } from './landing/career/career.component';
import { ProfileInfoComponent } from './profile/profile-info/profile-info.component';
import { ProfileEducationChoiceComponent } from './profile/profile-education-choice/profile-education-choice.component';
import { ProfileSetupComponent } from './profile/profile-setup/profile-setup.component';
import { Phase1InfoComponent } from './phase1/phase1-info/phase1-info.component';
import { PathChooseComponent } from './profile/path-choose/path-choose.component';
import { ComingSoonComponent } from "./phase2/coming-soon/coming-soon.component";

import { FormsModule } from "@angular/forms";



const routes: Routes = [
  // {path:"**", redirectTo:"landing"},
  {
    path:'landing',
    component:LandingComponent,
    children: [
      // {path:'**', redirectTo:"register"},
      {path:'register', component:RegisterComponent},
      {path:'aboutus',component:AboutusComponent},
      {path:'blogs',component:BlogsComponent},
      {path:'contact',component:ContactComponent},
      {path:'aboutus',component:AboutusComponent},
      {path:'howitwork',component:HowitworkComponent},
      {path:'career', component:CareerComponent}
    ]
  },
  {path:'profile-info', component:ProfileInfoComponent},
  {path:'profile-education-choice', component:ProfileEducationChoiceComponent},
  {path:'profile-setup',component:ProfileSetupComponent},
  {path:'path-choose', component: PathChooseComponent},
  {path:'phase1-info', component:Phase1InfoComponent},
  {path:'coming-soon', component:ComingSoonComponent}
];

@NgModule({
  declarations:[
    LandingComponent,
    RegisterComponent,
    AboutusComponent,
    BlogsComponent,
    HowitworkComponent,
    CareerComponent,
    ContactComponent,
    ProfileInfoComponent,
    ProfileEducationChoiceComponent,
    ProfileSetupComponent,
    PathChooseComponent,
    Phase1InfoComponent,
    ComingSoonComponent
  ],
  imports: [RouterModule.forRoot(routes), FormsModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LandingComponent,
  RegisterComponent,
  AboutusComponent,
  BlogsComponent,
  HowitworkComponent,
  CareerComponent,
  ContactComponent,
  ProfileInfoComponent,
  ProfileEducationChoiceComponent,
  ProfileSetupComponent,
  PathChooseComponent,
  Phase1InfoComponent,
  ComingSoonComponent
]


 