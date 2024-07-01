import { Component, Input } from '@angular/core';

export interface Field {
  name: string;
  value: string;
}

@Component({
  selector: 'app-issue-fields',
  standalone: true,
  imports: [],
  templateUrl: './issue-fields.component.html',
  styleUrl: './issue-fields.component.scss'
})
export class IssueFieldsComponent {
  @Input() fields: Field[] = [];
}
