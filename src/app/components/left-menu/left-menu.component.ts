import { Component, inject, Input } from '@angular/core';
import { GlobalConfigService } from '../../services/global-config.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [NgClass],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent {
  proyectos = [
    { id: 1, nombre: 'Proyecto 1', boxes: ["Backlog", "Ready", "ToDo"] },
    { id: 2, nombre: 'Proyecto 2', boxes: ["Backlog", "Ready", "ToDo"] },
    { id: 3, nombre: 'Proyecto 3', boxes: ["Backlog", "Ready", "ToDo"] },
    { id: 4, nombre: 'Proyecto 4', boxes: ["Backlog", "Ready", "ToDo"] },
    { id: 5, nombre: 'Proyecto 5', boxes: ["Backlog", "Ready", "ToDo"] },
    { id: 6, nombre: 'Proyecto 6', boxes: ["Backlog", "Ready", "ToDo"] },
    { id: 7, nombre: 'Proyecto 7', boxes: ["Backlog", "Ready", "ToDo"] },
    { id: 8, nombre: 'Proyecto 8', boxes: ["Backlog", "Ready", "ToDo"] }
  ];
  globalConfigService = inject(GlobalConfigService);

  get isLeftMenuIsOpen() {
    return this.globalConfigService.isLeftMenuIsOpen;
  }

  openLeftMenu() {
    this.globalConfigService.openLeftMenu();
  }

}
