import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  tabSelected$: BehaviorSubject<string> = new BehaviorSubject('Game Plan');

  constructor() {}
}
