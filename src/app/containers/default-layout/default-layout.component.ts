import { Component } from '@angular/core';

import { navItems } from './_nav';
import { navItems2 } from './_nav2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  role = localStorage.getItem('role');
  public navItems:any = [];

  constructor() {
    if(this.role=='patient'){
      this.navItems=navItems
    }else{
      this.navItems=navItems2
    }
  }


}
