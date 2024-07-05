import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BacklogColumnComponent } from "./components/backlog-column/backlog-column.component";
import { DragAndDropComponent } from "./components/drag-and-drop/drag-and-drop.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { LeftMenuComponent } from "./components/left-menu/left-menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BacklogColumnComponent, DragAndDropComponent, SidebarComponent, HeaderComponent, LeftMenuComponent]
})
export class AppComponent {
  title = 'gestor-de-incidencias';
}
