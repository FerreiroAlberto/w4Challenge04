import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type NumberState = {
  numbers: string;
};

@Injectable({
  providedIn: 'root',
})
export class OperatorService {
  private state$: BehaviorSubject<NumberState>;
  constructor() {
    this.state$ = new BehaviorSubject({
      numbers: '',
    });
  }
  addNumber(value: string): void {
    this.state$.next({ numbers: this.state$.value.numbers + value });
  }

  sendNumber() {
    return this.state$.asObservable();
  }
}
