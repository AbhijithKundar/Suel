import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/services/commonservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private menuJson: any;  

  get currentPage(): any {
    let pageArr = ['login', 'forgot', 'changepwd'];
    const href = this.router.url;
    const pages = href.split('/');
    const pageName = pages[pages.length-1];
    const chkFlg = pageArr.find( page => page === pageName);
    if(chkFlg!=undefined){ 
      return false;
    } 
    return true;
   
  }

  get checkLandingPage(): any { 
    const landingPageArr = ['master', 'mapping', 'schedule', 'home', 'overview'];
    const href = this.router.url;
    const pages = href.split('/');
    const pageName = pages[pages.length-1];
    const landingPage = landingPageArr.find( page => page === pageName);
    if(landingPage!=undefined) {
      return false;
    }
    return true;
  }


  constructor(private router: Router, public commonser: CommonserviceService) { }

  ngOnInit() {
    this.menuJson = this.commonser.getMenuData();
  }


  pageName(checkPage: string): boolean {
    let chkFlg: any;
    const href = this.router.url;
    const pages = href.split('/');
    const pageName = pages[pages.length-1];

    if (checkPage === 'master') {
      chkFlg = this.menuJson.master.find( page => {
        return page.routerLink === pageName
      });
    } else if (checkPage === 'mapping') {
      chkFlg = this.menuJson.mapping.find( page => {
        return page.routerLink === pageName
      });
    } else if (checkPage === 'schedule') {
      chkFlg = this.menuJson.schedule.find( page => {
        return page.routerLink === pageName
      });
    } else {
      chkFlg = checkPage === pageName
    }
    if (chkFlg === undefined) {
      return false;
    } else {
      return chkFlg;
    }
  }

}
