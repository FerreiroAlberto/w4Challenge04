import { Component } from '@angular/core';
import { Input, EventEmitter, Output } from '@angular/core';
import { OperatorService } from '../services/operator.service';

@Component({
  selector: 'isdi-key',
  standalone: true,
  imports: [],
  template: ` <li>
    <button class="key" (click)="onClick()">{{ value }}</button>
  </li>`,
  styles: ``,
})
export class KeyComponent {
  @Input() value!: string;
  @Output() addEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(private service: OperatorService) {}
  onClick() {
    this.service.addNumber(this.value);
    console.log(this.value);
  }
}
