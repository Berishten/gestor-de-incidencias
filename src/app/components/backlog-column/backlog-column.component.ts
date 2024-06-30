import { Component } from '@angular/core';
import { BacklogCardComponent } from "../backlog-card/backlog-card.component";

@Component({
    selector: 'app-backlog-column',
    standalone: true,
    templateUrl: './backlog-column.component.html',
    styleUrl: './backlog-column.component.scss',
    imports: [BacklogCardComponent]
})
export class BacklogColumnComponent {

}
