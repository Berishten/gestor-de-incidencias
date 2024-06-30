import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BacklogColumnComponent } from "./components/backlog-column/backlog-column.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BacklogColumnComponent]
})
export class AppComponent {
  title = 'gestor-de-incidencias';
}
