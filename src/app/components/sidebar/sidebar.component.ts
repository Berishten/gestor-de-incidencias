import { Component, inject } from '@angular/core';
import { Field, IssueFieldsComponent } from "../create-issue/issue-fields/issue-fields.component";
import { InputMarkdownComponent } from "../input-markdown/input-markdown.component";
import { RightSidebarService } from '../../services/right-sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [IssueFieldsComponent, InputMarkdownComponent]
})
export class SidebarComponent {
  sidebarService = inject(RightSidebarService);

  get titulo() {
    return this.sidebarService.getTitulo;
  };

  get descripcion() {
    return this.sidebarService.getDescripcion;
  }

  get fields(): Field[] {
    return this.sidebarService.getFields;
  }
}
