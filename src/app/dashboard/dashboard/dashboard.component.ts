import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.user = localStorage.getItem('uid');
  }

  logout() {
  }

}