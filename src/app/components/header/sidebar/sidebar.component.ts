import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[] = []

  constructor() { }

  ngOnInit() {
    this.items = [
        {
           label:'Word List',
           icon:'pi pi-plus-circle',
       //    command: () => this.goTo('cria-evento')
        },
        {
           label:'History',
           icon:'pi pi-globe',
        },
        {
           label:'Favorites',
           icon:'pi pi-fw pi-user',
        },
        {
          label:'Logar',
          icon: 'pi pi-upload',
          routerLink: ''
        }
    ];
}    
}
