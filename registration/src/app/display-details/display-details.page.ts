import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { NavParams } from "@ionic/angular";
import { FormBuilder } from "@angular/forms";
import { HomePage } from "./../home/home.page";

@Component({
  selector: "app-display-details",
  templateUrl: "./display-details.page.html",
  styleUrls: ["./display-details.page.scss"]
})
export class DisplayDetailsPage implements OnInit {
  slideOneForm: any;
  constructor() {}

  ngOnInit() {
    console.log(this.slideOneForm.value);
  }
}
