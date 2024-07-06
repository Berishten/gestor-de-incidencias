import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  projectOpened: Project | null = null;

  projects: Project[] = [];

  getOpenProject() {
    return this.projectOpened;
  }

  getProjects() {
    return this.projects;
  }

  addProject(project: Project) {
    this.projects.push(project);
  }

  getBoxesById(projectId: number) {
    const project = this.projects.find(p => p.id === projectId);
    return project?.boxes;
  }

  addCard(boxId: number, card: Card) {
    const project = this.projects.find(p => p.boxes.find(b => b.id === boxId));
    const box = project?.boxes.find(b => b.id === boxId);
    box?.cards.push(card);
  }
}

export interface Project {
  id: number;
  nombre: string;
  boxes: Box[];
}

export interface Box {
  id: number;
  title: string;
  cards: Card[];
}

export interface Card {
  id: number;
  title: string;
  description: string;
  assignee: string;
  status: string;
}
