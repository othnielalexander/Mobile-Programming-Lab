import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.page.html',
  styleUrls: ['./display-details.page.scss'],
})
export class DisplayDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  data: any;

  ngOnInit() {

    this.route.queryParams.subscribe(params =>{
      if (this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state as{
          username: string;
          password: string;
          datetime: string;
        };
      }
    });

  }
}