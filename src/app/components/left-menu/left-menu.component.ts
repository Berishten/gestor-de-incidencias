import { Component, inject, Input } from '@angular/core';
import { GlobalConfigService } from '../../services/global-config.service';
import { NgClass } from '@angular/common';
import { BoxService } from '../../services/box.service';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [NgClass],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent {
  globalConfigService = inject(GlobalConfigService);
  boxService = inject(BoxService);

  get proyectos() {
    return this.boxService.getProjects();
  }

  get isLeftMenuIsOpen() {
    return this.globalConfigService.isLeftMenuIsOpen;
  }

  addProject() {
    this.boxService.addProject({ id: this.proyectos.length + 1, nombre: 'Nuevo Proyecto', boxes: [] });
  }

  openLeftMenu() {
    this.globalConfigService.openLeftMenu();
  }

  nuevoBox(projectId: number) {
    const proyecto = this.proyectos.find(p => p.id === projectId);
    proyecto?.boxes.push({ id: proyecto.boxes.length + 1, title: 'Nuevo Box', cards: [] });
  }

  openProject(projectId: number) {
    const project = this.proyectos.find(p => p.id === projectId);
    this.boxService.projectOpened = project || null;
  }

}
