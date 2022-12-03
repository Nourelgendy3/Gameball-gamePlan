export interface ChallengeCardModel {
  id: number;
  status: boolean;
  img: string;
  title: string;
  date: string;
  time: string;
  description: string;
  features: {
    frubies: {
      img: string;
      value: string;
    };
    points: {
      img: string;
      value: string;
    };
    milestones: {
      img: string;
      value: string;
    };
    tag: {
      img: string;
      value: string;
    };
  };
}
