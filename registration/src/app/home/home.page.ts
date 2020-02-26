import { DisplayDetailsPage } from "./../display-details/display-details.page";
import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { ActionSheetController } from "@ionic/angular";
import { Router, NavigationExtras } from "@angular/router";
import { NgModel, FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  slideOneForm: any;
  constructor(
    private router: Router,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    public formBuilder: FormBuilder
  ) {
    this.slideOneForm = formBuilder.group({
      email: [""],
      pass: [""]
    });
  }

  // username = "";
  // password = "";

  async showAlert() {
    const navigationExtras: NavigationExtras = {
      state: {
        // username: "people.username",
        // password: "people.password"
      }
    };

    const alert = await this.alertController.create({
      header: "Details Correctness",
      subHeader: "",
      message: "Please make sure you have entered correct details.",
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.router.navigate(["/display-details"], this.slideOneForm.value);
          }
        }
      ]
    });
    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "How to reset your password?",
      buttons: [
        {
          text: "Email",
          handler: () => {
            console.log("Email clicked");
          }
        },
        {
          text: "Text Message",
          handler: () => {
            console.log("Text Message clicked");
          }
        },
        {
          text: "Call",
          handler: () => {
            console.log("Call clicked");
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }

  // see(str:any){
  //   this.navCtrl.push(str);
  // }
}
