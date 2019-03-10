import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

// router.events has different events, if you need to get the NavigationEnd you need to filter as follows. Try this,

  currentUrl: String;

  constructor( private router: Router ) {
      router.events.subscribe(() => this.currentUrl = router.url.toString());
  }

  ngOnInit() {
  }

}
