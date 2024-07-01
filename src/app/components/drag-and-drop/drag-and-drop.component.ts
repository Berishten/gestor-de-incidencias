import { Component } from '@angular/core';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { BacklogColumnComponent } from "../backlog-column/backlog-column.component";

@Component({
    selector: 'app-drag-and-drop',
    standalone: true,
    templateUrl: './drag-and-drop.component.html',
    styleUrl: './drag-and-drop.component.scss',
    imports: [CdkDropListGroup, BacklogColumnComponent]
})
export class DragAndDropComponent {
  backlog = ["Levantarse", "Cepillarse los dientes", "Desayunar", "Ir a trabajar", "Almorzar", "Volver a trabajar", "Cenar", "Dormir"];
  inProgress = [];
  qa = [];
  done = [];
  ready = [];
}
