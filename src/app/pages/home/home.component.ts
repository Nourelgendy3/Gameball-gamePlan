import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/app/shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tabSelected: string = 'Game Plan';
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.tabSelected$.subscribe((res) => {
      this.tabSelected = res;
      console.log(this.tabSelected);
    });
  }
}
