import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-unrouted',
  templateUrl: './menu-unrouted.component.html',
  styleUrls: ['./menu-unrouted.component.css'],
  template: `
    <p-menubar [model]="items"></p-menubar>
  `
})
export class MenuUnroutedComponent implements OnInit {

  items: MenuItem[] | undefined;

 

  constructor() { 
    this.items = [
     {
      label: 'Home',
      routerLink: '/home'
     },
     {
      label: 'User List',
      routerLink: '/admin/user/plist'
     },
     {
      label: 'User',
      routerLink: '/admin/user/view/1'
     },
     {
      label: 'Thread List',
      routerLink: '/admin/thread/plist'
     },
     {
      label: 'Thread',
      routerLink: '/admin/thread/view/1'
     },
     {
      label: 'Reply List',
      routerLink: '/admin/reply/plist'
     },
     {
      label: 'Reply',
      routerLink: '/admin/reply/view/1'
     }
    ];
  }

  ngOnInit() {
  }

}
