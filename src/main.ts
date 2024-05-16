import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  styles: '',
  template: `
    <div class="container">
      <ng-container *ngFor="let cordinate of cordinates">
        <div class="seat" [ngStyle]="{ left: cordinate[0] + 'px', top: cordinate[1] + 'px', width: (cordinate[2] - cordinate[0]) + 'px', height: (cordinate[3] - cordinate[1]) + 'px' }"></div>
      </ng-container>
      <img src="https://i.pinimg.com/736x/59/c9/34/59c934e388d5ee5da5c69beb2b312425.jpg">
    </div>
  `,
})
export class App {
  public cordinates: Array<Array<number>> = [
    [19, 51, 100, 129],
    [19, 216, 100, 295],
    [19, 374, 98, 445],
    [19, 516, 102, 587],
    [170, 509, 250, 592],
    [166, 642, 255, 710],
    [334, 511, 433, 589],
    [499, 508, 581, 585],
    [641, 510, 717, 585],
    [335, 634, 429, 709],
    [489, 638, 584, 707],
    [648, 636, 720, 713],
    [20, 642, 99, 714],
    [245, 395, 323, 489],
    [328, 396, 408, 493],
    [422, 401, 496, 488],
    [508, 398, 582, 486],
    [414, 309, 497, 397],
    [510, 302, 578, 394],
    [603, 287, 717, 493],
    [480, 187, 684, 258],
    [378, 189, 448, 255],
    [227, 182, 374, 331],
  ];
}

bootstrapApplication(App);
