import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CdkDragRelease, CdkDragStart, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  styles: '',
  template: `
    <div class="container">
      <div class="content">
        <ng-container *ngFor="let table of tableData">
          <div class="seat" [ngStyle]="{ left: (table.cordinates[0]) + 'px', top: table.cordinates[1] + 'px', width: (table.cordinates[2] - table.cordinates[0]) + 'px', height: (table.cordinates[3] - table.cordinates[1]) + 'px' }"></div>
        </ng-container>
        <img src="https://i.pinimg.com/736x/59/c9/34/59c934e388d5ee5da5c69beb2b312425.jpg">
      </div> 
      <div style="display: flex; flex-direction: column;" #personContainer>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShHgU6D-y8EKjOIkC5M8bfUqvMPTZWy9vwXZ4L4gJCRg&s" cdkDrag cdkDragBoundary=".content" style="width: 50px; padding: 10px; border: 2px solid black" *ngFor="let x of [0, 1, 2, 3, 4, 5, 6, 7, 8]" name="person" (cdkDragReleased)="onDragReleased($event)" (cdkDragStarted)="onDragStarted($event)">
      </div>   
    </div>
  `,
})
export class App {
  public tableData: Array<{
    name: string;
    cordinates: Array<number>;
    isReserved: boolean;
  }> = [
    {
      name: 'Table 1',
      cordinates: [19, 51, 100, 129],
      isReserved: false,
    },
    {
      name: 'Table 2',
      cordinates: [19, 216, 100, 295],
      isReserved: false,
    },
    {
      name: 'Table 3',
      cordinates: [19, 374, 98, 445],
      isReserved: false,
    },
    {
      name: 'Table 4',
      cordinates: [19, 516, 102, 587],
      isReserved: false,
    },
    {
      name: 'Table 5',
      cordinates: [170, 509, 250, 592],
      isReserved: false,
    },
    {
      name: 'Table 6',
      cordinates: [166, 642, 255, 710],
      isReserved: false,
    },
    {
      name: 'Table 7',
      cordinates: [334, 511, 433, 589],
      isReserved: false,
    },
    {
      name: 'Table 8',
      cordinates: [499, 508, 581, 585],
      isReserved: false,
    },
    {
      name: 'Table 9',
      cordinates: [641, 510, 717, 585],
      isReserved: false,
    },
    {
      name: 'Table 10',
      cordinates: [335, 634, 429, 709],
      isReserved: false,
    },
    {
      name: 'Table 11',
      cordinates: [489, 638, 584, 707],
      isReserved: false,
    },
    {
      name: 'Table 12',
      cordinates: [648, 636, 720, 713],
      isReserved: false,
    },
    {
      name: 'Table 13',
      cordinates: [20, 642, 99, 714],
      isReserved: false,
    },
    {
      name: 'Table 14',
      cordinates: [245, 395, 323, 489],
      isReserved: false,
    },
    {
      name: 'Table 15',
      cordinates: [328, 396, 408, 493],
      isReserved: false,
    },
    {
      name: 'Table 16',
      cordinates: [422, 401, 496, 488],
      isReserved: false,
    },
    {
      name: 'Table 17',
      cordinates: [508, 398, 582, 486],
      isReserved: false,
    },
    {
      name: 'Table 18',
      cordinates: [414, 309, 497, 397],
      isReserved: false,
    },
    {
      name: 'Table 19',
      cordinates: [510, 302, 578, 394],
      isReserved: false,
    },
    {
      name: 'Table 20',
      cordinates: [603, 287, 717, 493],
      isReserved: false,
    },
    {
      name: 'Table 21',
      cordinates: [480, 187, 684, 258],
      isReserved: false,
    },
    {
      name: 'Table 22',
      cordinates: [378, 189, 448, 255],
      isReserved: false,
    },
  ];

  public onDragReleased(event: any) {
    const cdkDragRelease = event as CdkDragRelease;
    // console.log("onDragReleased: ", cdkDragRelease.event, cdkDragRelease.source)
    const rect = cdkDragRelease.source.getRootElement().getBoundingClientRect();
    // console.log("Rect: ", rect)
    const x = (rect.x + rect.right) / 2;
    const y = (rect.y + rect.bottom) / 2;
    console.log('X, Y: ', x, y);
    const table = this.tableData.find((table) => {
      return (
        table.cordinates[0] <= x &&
        table.cordinates[2] >= x &&
        table.cordinates[1] <= y &&
        table.cordinates[3] >= y
      );
    });
    console.log('Table: ', table);
    if (table) {
      cdkDragRelease.source.getRootElement().style.border =
        '2px solid mediumspringgreen';
      cdkDragRelease.source.getRootElement().style.color = 'mediumspringgreen';
      // this.showAlert(`${table.name} Assigned.`)
    } else {
      cdkDragRelease.source.getRootElement().style.border = '2px solid white';
      cdkDragRelease.source.getRootElement().style.color = 'white';
      cdkDragRelease.source.reset();
    }
  }

  public onDragStarted(event: any) {
    const cdkDragStart = event as CdkDragStart;
    // console.log("onDragStarted: ", cdkDragStart, cdkDragStart.source.getRootElement())
    cdkDragStart.source.getRootElement().style.border = '2px solid red';
    cdkDragStart.source.getRootElement().style.color = 'red';
  }
}

bootstrapApplication(App);
