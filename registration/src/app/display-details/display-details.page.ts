import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.page.html',
  styleUrls: ['./display-details.page.scss'],
})
export class DisplayDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  //   const navigation = this.router.getCurrentNavigation();
  // const state = navigation.extras.state as {
  //   username: string,
  //   password: boolean,
  // };
  // this.test = "Username" + state.username + 
  // "<br /> Password:" + state.password;
    
  }

}
