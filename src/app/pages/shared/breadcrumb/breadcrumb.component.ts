import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/services/commonservice.service';


@Component({
  selector: 'sbm-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs = [];
  constructor(
    private router: Router,public commonser: CommonserviceService) { }

  ngOnInit() {
    
    console.log(this.breadcrumbs)
  }

  getBreadCrumbs() {
    let href = this.router.url;
    this.breadcrumbs = href.split('/');
    this.breadcrumbs.shift();
    this.breadcrumbs.shift();
    return this.breadcrumbs;
  }

  routeTo(path: string) {
    let menuData = this.commonser.getMenuData();
    let pathRoot = {};
    switch(this.breadcrumbs[0]) {
      case 'master':
        pathRoot = menuData.master.find( page => page.lbl.toLowerCase() === path);
        break;
      case 'transaction':
        pathRoot = menuData.transaction.find( page => page.lbl.toLowerCase() === path);
        break;
      case 'report':
        pathRoot = menuData.report.find( page => page.lbl.toLowerCase() === path);
        break;
      default:
        break;
    }
    switch(path) {
      case 'master':
        pathRoot = menuData.master[0];
        break;
      case 'transaction':
        pathRoot = menuData.transaction[0];
        break;
      case 'report':
        pathRoot = menuData.report[0];
        break;
      default:
        break;
    }
    this.router.navigate( ['/pages/' + this.breadcrumbs[0] + '/' + pathRoot['routerLink']]);
  }
}
