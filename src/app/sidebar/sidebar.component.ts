import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import * as $ from 'jquery';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'dashboard', title: 'Reports',  icon: 'pe-7s-mail', class: '' },
  { path: 'logout', title: 'Esteban Ramirez',  icon:'pe-7s-smile', class: 'active-pro' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  logout() {
    localStorage.setItem('actual', "");
    this.router.navigate(['login']);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
  };

}
