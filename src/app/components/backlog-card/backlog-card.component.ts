import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backlog-card',
  standalone: true,
  imports: [],
  templateUrl: './backlog-card.component.html',
  styleUrl: './backlog-card.component.scss'
})
export class BacklogCardComponent {
  @Input() item?: string;
}
