import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/app/shared/home.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  tabSelected: string = 'Game Plan';
  elements: { title: string; img: string }[] = [
    { img: 'assets/icon_Dashboard_HiFi-M_InActive.png', title: 'Dashboard' },
    { img: 'assets/icon_GamePlan_HiFi-M_Active.png', title: 'Game Plan' },
    { img: 'assets/Subtraction 1.png', title: 'Levels' },
  ];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}

  selectTab(tab: string) {
    this.tabSelected = tab;
    this.homeService.tabSelected$.next(tab);
  }
}
