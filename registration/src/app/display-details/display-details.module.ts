import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DisplayDetailsPageRoutingModule } from "./display-details-routing.module";

import { DisplayDetailsPage } from "./display-details.page";
// import { HomePageRoutingModule } from "./../home/home.module";
// import { HomePage } from "./../home/home.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayDetailsPageRoutingModule
  ],
  declarations: [DisplayDetailsPage]
})
export class DisplayDetailsPageModule {}
