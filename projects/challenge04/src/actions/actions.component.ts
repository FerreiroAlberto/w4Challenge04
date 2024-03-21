import { Component } from '@angular/core';
import { ActionComponent } from '../action/action.component';

@Component({
  selector: 'isdi-actions',
  standalone: true,
  imports: [ActionComponent],
  template: ` <div class="actions">
    <isdi-action />
  </div>`,
  styles: ``,
})
export class ActionsComponent {}
