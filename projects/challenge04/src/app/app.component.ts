import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { DisplayComponent } from '../display/display.component';
import { KeyComponent } from '../key/key.component';
import { KeyboardComponent } from '../keyboard/keyboard.component';
import { ActionComponent } from '../action/action.component';
import { ActionsComponent } from '../actions/actions.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InfoComponent,
    DisplayComponent,
    KeyComponent,
    KeyboardComponent,
    ActionComponent,
    ActionsComponent,
  ],
  template: `<isdi-info />
    <isdi-display />
    <isdi-keyboard />
    <isdi-actions />`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Challenge04';
}
