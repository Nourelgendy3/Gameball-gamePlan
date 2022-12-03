import { Component, Input, OnInit } from '@angular/core';

import { ChallengeCardModel } from '../../challenge.model';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss'],
})
export class ChallengeCardComponent implements OnInit {
  @Input('cardData') cardData: ChallengeCardModel = {} as ChallengeCardModel;
  constructor() {}

  ngOnInit(): void {}
}
