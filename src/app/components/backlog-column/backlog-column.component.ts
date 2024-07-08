import { Component, inject, Input } from '@angular/core';
import { BacklogCardComponent } from "../backlog-card/backlog-card.component";
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Box, BoxService, Card } from '../../services/box.service';
import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
    selector: 'app-backlog-column',
    standalone: true,
    templateUrl: './backlog-column.component.html',
    styleUrl: './backlog-column.component.scss',
    imports: [BacklogCardComponent, CdkDropList, CdkDrag, IconButtonComponent]
})
export class BacklogColumnComponent {
  @Input() box: Box = { id: 0, title: '', cards: [] };
  boxService = inject(BoxService);

  drop(event: CdkDragDrop<Card[]>) {
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

  createCard() {
    const newCard: Card = {
      id: this.box.cards.length + 1,
      title: 'New Card',
      description: 'Description',
      assignee: 'Assignee',
      status: 'Backlog'
    };

    this.box.cards.push(newCard);
  }

  showColumnOptions = () => {
    console.log('Column Options');
  }
}
