import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedValueService {

  constructor() { }

  private sharedValueSource = new BehaviorSubject<number>(0);
  sharedValue$ = this.sharedValueSource.asObservable();

  updateSharedValue(newValue: number) {
    this.sharedValueSource.next(newValue);
  }
}
