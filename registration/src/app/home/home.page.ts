import {Component} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, public actionSheetController: ActionSheetController) { }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'How to reset your password?',
      buttons: [{
        text: 'Email',
        handler: () => {
          console.log('Email clicked');
        }
      }, {
        text: 'Text Message',
        handler: () => {
          console.log('Text Message clicked');
        }
      }, {
        text: 'Call',
        handler: () => {
          console.log('Call clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
