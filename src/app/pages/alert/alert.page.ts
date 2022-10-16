import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})

export class AlertPage implements OnInit {

  constructor(private route:Router) { }
  nextpage() {
    this.route.navigate(['/location']);
  }

  ngOnInit() {}

}
