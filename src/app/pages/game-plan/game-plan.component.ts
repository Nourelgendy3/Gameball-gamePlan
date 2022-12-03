import { Component, OnInit } from '@angular/core';

import { GamePlanService } from 'src/app/shared/game-plan.service';

@Component({
  selector: 'app-game-plan',
  templateUrl: './game-plan.component.html',
  styleUrls: ['./game-plan.component.scss'],
})
export class GamePlanComponent implements OnInit {
  tabSelected: string = 'Game Plan';
  constructor(private gamePlanService: GamePlanService) {}

  ngOnInit(): void {
    this.gamePlanService.tabSelected$.subscribe((res) => {
      this.tabSelected = res;
      console.log(this.tabSelected);
    });
  }
}
