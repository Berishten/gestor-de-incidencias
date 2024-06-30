import { Component, Input } from '@angular/core';
import { BacklogCardComponent } from "../backlog-card/backlog-card.component";
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-backlog-column',
  standalone: true,
  templateUrl: './backlog-column.component.html',
  styleUrl: './backlog-column.component.scss',
  imports: [BacklogCardComponent, CdkDropList, CdkDrag]
})
export class BacklogColumnComponent {
  @Input() title?: string;
  @Input() items: string[] = [];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
