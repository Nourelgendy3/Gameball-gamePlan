import { Component, OnInit } from '@angular/core';

import { GamePlanService } from 'src/app/shared/game-plan.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tabSelected: string = 'Game Plan';
  constructor(private gamePlanService: GamePlanService) {}

  ngOnInit(): void {
    this.gamePlanService.tabSelected$.subscribe((res) => {
      this.tabSelected = res;
    });
  }
}
