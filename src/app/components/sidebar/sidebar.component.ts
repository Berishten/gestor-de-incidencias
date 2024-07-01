import { Component } from '@angular/core';
import { Field, IssueFieldsComponent } from "../create-issue/issue-fields/issue-fields.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [IssueFieldsComponent]
})
export class SidebarComponent {
  fields: Field[] = [
    { name: 'Asignado', value: 'Berishten' },
    { name: 'Estado', value: 'Abierto' },
    { name: 'Prioridad', value: 'Media' },
    { name: 'Fecha de inicio', value: '2021-08-01' },
    { name: 'Fecha de finalización', value: '2021-07-15' }
  ]
  constructor() {
    console.log(false)
    let a = 1
   }
}
