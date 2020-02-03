import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayDetailsPageRoutingModule } from './display-details-routing.module';

import { DisplayDetailsPage } from './display-details.page';

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
