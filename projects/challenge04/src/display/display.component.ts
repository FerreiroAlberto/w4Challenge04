import { Component } from '@angular/core';
import { OperatorService } from '../services/operator.service';

@Component({
  selector: 'isdi-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  dialed: string = '';
  constructor(private service: OperatorService) {
    this.addDialed();
  }

  addDialed() {
    this.service.sendNumber().subscribe({
      next: (data) => {
        this.dialed = data.numbers;
      },
    });
  }
}
