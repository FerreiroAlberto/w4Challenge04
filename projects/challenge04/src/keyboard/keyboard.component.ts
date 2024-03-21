import { Component } from '@angular/core';
import { KeyComponent } from '../key/key.component';

@Component({
  selector: 'isdi-keyboard',
  standalone: true,
  imports: [KeyComponent],
  template: ` <main class="phone">
    <div class="keyboard-container">
      <ol class="keyboard">
        @for(number of numbers; track $index){
        <isdi-key [value]="number" />
        }
      </ol>
    </div>
  </main>`,
  styles: ``,
})
export class KeyboardComponent {
  numbers: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'delete',
  ];
}
