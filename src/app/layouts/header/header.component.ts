import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/app/shared/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tabSelected: string = 'Game Plan';
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.tabSelected$.subscribe((res) => {
      this.tabSelected = res;
    });
  }
}
