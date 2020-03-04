import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  pageName = 'login';
  isLoading = false;
  constructor() { }
  updatePageName(pageName: string){
    this.pageName = pageName;
  }
  getPagename(){
    return localStorage.getItem('pageName');
  }
  getMenuData() {
    return {
      master:[
        { lbl: "Overview", 'routerLink':'', icon:"account_box"},
        { lbl: "Driver profile", 'routerLink':'driver-profile', icon:"airline_seat_recline_normal"},
        { lbl: "Vehicle profile", 'routerLink':'vehicle-profile', icon:"directions_bus"},
      ],
      transaction:[
        { lbl: "Overview", 'routerLink':'', icon:"group"},
        { lbl: "Manual entry", 'routerLink':'manual', icon:"keyboard"},
      ],
      report: [
        { lbl: "Overview", 'routerLink':'', icon:"date_range"},
        { lbl: "vehicle wise", 'routerLink':'vehicle', icon:"description" },
        { lbl: "Time wise", 'routerLink':'time', icon:"access_time" },
        { lbl: "Day wise", 'routerLink':'day', icon:"date_range" },
        { lbl: "Week wise", 'routerLink':'week', icon:"view_week" },
        { lbl: "Month wise", 'routerLink':'month', icon:"calendar_today" },
        { lbl: "Today", 'routerLink':'today', icon:"today" },
      ]
    };
  }
}
