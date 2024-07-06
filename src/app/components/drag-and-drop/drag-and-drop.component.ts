import { Component, inject } from '@angular/core';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { BacklogColumnComponent } from "../backlog-column/backlog-column.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { LeftMenuComponent } from "../left-menu/left-menu.component";
import { BoxService, Project } from '../../services/box.service';

@Component({
    selector: 'app-drag-and-drop',
    standalone: true,
    templateUrl: './drag-and-drop.component.html',
    styleUrl: './drag-and-drop.component.scss',
    imports: [CdkDropListGroup, BacklogColumnComponent, SidebarComponent, LeftMenuComponent]
})
export class DragAndDropComponent {
  boxesService = inject(BoxService);

  getActiveProJect(): Project | null {
    return this.boxesService.projectOpened;
  }

}
