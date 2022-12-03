import { Component, OnInit } from '@angular/core';

import { ChallengeCardModel } from 'src/app/shared/challenge.model';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
  challenges: ChallengeCardModel[] = [
    {
      id: 1,
      status: true,
      img: 'assets/icon_ChallengeBlank-HiFi_50px.png',
      title: 'Click & Collect',
      date: '12/12/2018',
      time: '13:00',
      description:
        ' It is a long established fact that a reader will be distracted by the readable eye.',
      features: {
        frubies: {
          img: 'assets/icon_Frubies-HiFi_20px.png',
          value: '5,000 Frubies',
        },
        points: {
          img: 'assets/icon_Points_HiFi-S.png',
          value: '2,500 Points',
        },
        milestones: {
          img: 'assets/Glyph.png',
          value: '3 Milestones',
        },
        tag: {
          img: 'assets/icon_Tag_LoFi-XS.png',
          value: 'The Big Thing',
        },
      },
    },
    {
      id: 2,
      status: true,
      img: 'assets/icon_ChallengeBlank-HiFi_50px.png',
      title: 'Click & Collect',
      date: '12/12/2018',
      time: '13:00',
      description:
        ' It is a long established fact that a reader will be distracted by the readable eye.',
      features: {
        frubies: {
          img: 'assets/icon_Frubies-HiFi_20px.png',
          value: '5,000 Frubies',
        },
        points: {
          img: 'assets/icon_Points_HiFi-S.png',
          value: '2,500 Points',
        },
        milestones: {
          img: 'assets/Glyph.png',
          value: '3 Milestones',
        },
        tag: {
          img: 'assets/icon_Tag_LoFi-XS.png',
          value: 'The Big Thing',
        },
      },
    },
    {
      id: 3,
      status: true,
      img: 'assets/icon_ChallengeBlank-HiFi_50px.png',
      title: 'Click & Collect',
      date: '12/12/2018',
      time: '13:00',
      description:
        ' It is a long established fact that a reader will be distracted by the readable eye.',
      features: {
        frubies: {
          img: 'assets/icon_Frubies-HiFi_20px.png',
          value: '5,000 Frubies',
        },
        points: {
          img: 'assets/icon_Points_HiFi-S.png',
          value: '2,500 Points',
        },
        milestones: {
          img: 'assets/Glyph.png',
          value: '3 Milestones',
        },
        tag: {
          img: 'assets/icon_Tag_LoFi-XS.png',
          value: 'The Big Thing',
        },
      },
    },
    {
      id: 4,
      status: false,
      img: 'assets/icon_ChallengeBlank-HiFi_50px.png',
      title: 'Click & Collect',
      date: '12/12/2018',
      time: '13:00',
      description:
        ' It is a long established fact that a reader will be distracted by the readable eye.',
      features: {
        frubies: {
          img: 'assets/icon_Frubies-HiFi_20px.png',
          value: '5,000 Frubies',
        },
        points: {
          img: 'assets/icon_Points_HiFi-S.png',
          value: '2,500 Points',
        },
        milestones: {
          img: 'assets/Glyph.png',
          value: '3 Milestones',
        },
        tag: {
          img: 'assets/icon_Tag_LoFi-XS.png',
          value: 'The Big Thing',
        },
      },
    },
    {
      id: 5,
      status: true,
      img: 'assets/icon_ChallengeBlank-HiFi_50px.png',
      title: 'Click & Collect',
      date: '12/12/2018',
      time: '13:00',
      description:
        ' It is a long established fact that a reader will be distracted by the readable eye.',
      features: {
        frubies: {
          img: 'assets/icon_Frubies-HiFi_20px.png',
          value: '5,000 Frubies',
        },
        points: {
          img: 'assets/icon_Points_HiFi-S.png',
          value: '2,500 Points',
        },
        milestones: {
          img: 'assets/Glyph.png',
          value: '3 Milestones',
        },
        tag: {
          img: 'assets/icon_Tag_LoFi-XS.png',
          value: 'The Big Thing',
        },
      },
    },
    {
      id: 6,
      status: false,
      img: 'assets/icon_ChallengeBlank-HiFi_50px.png',
      title: 'Click & Collect',
      date: '12/12/2018',
      time: '13:00',
      description:
        ' It is a long established fact that a reader will be distracted by the readable eye.',
      features: {
        frubies: {
          img: 'assets/icon_Frubies-HiFi_20px.png',
          value: '5,000 Frubies',
        },
        points: {
          img: 'assets/icon_Points_HiFi-S.png',
          value: '2,500 Points',
        },
        milestones: {
          img: 'assets/Glyph.png',
          value: '3 Milestones',
        },
        tag: {
          img: 'assets/icon_Tag_LoFi-XS.png',
          value: 'The Big Thing',
        },
      },
    },
    {
      id: 7,
      status: false,
      img: 'assets/icon_ChallengeBlank-HiFi_50px.png',
      title: 'Click & Collect',
      date: '12/12/2018',
      time: '13:00',
      description:
        ' It is a long established fact that a reader will be distracted by the readable eye.',
      features: {
        frubies: {
          img: 'assets/icon_Frubies-HiFi_20px.png',
          value: '5,000 Frubies',
        },
        points: {
          img: 'assets/icon_Points_HiFi-S.png',
          value: '2,500 Points',
        },
        milestones: {
          img: 'assets/Glyph.png',
          value: '3 Milestones',
        },
        tag: {
          img: 'assets/icon_Tag_LoFi-XS.png',
          value: 'The Big Thing',
        },
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
