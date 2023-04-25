import { Component } from '@angular/core';

@Component({
  selector: 'app-pedal-board',
  templateUrl: './pedal-board.component.html',
  styleUrls: ['./pedal-board.component.css']
})
export class PedalBoardComponent {
  pedals: string[] = [];
  pedalBoardLayout: string[] = [];

  addPedal(pedal: string) {
    this.pedals.push(pedal);
  }

  clearPedals() {
    this.pedals = [];
    this.pedalBoardLayout = [];
  }

  generateLayout() {
    // Logic to generate the pedal board layout
    // based on the pedals array would go here
    this.pedalBoardLayout = ['Pedal 1', 'Pedal 2', 'Pedal 3', 'Pedal 4'];
  }
}