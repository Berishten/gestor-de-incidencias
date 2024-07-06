import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  projectOpened: Project | null = null;

  projects: Project[] = [
    {
      id: 1, nombre: 'Proyecto 1', boxes: [
        {
          id: 1,
          title: 'Backlog',
          cards: [
            { id: 1, title: 'Card 1', description: 'Description', assignee: 'Assignee', status: 'Backlog' },
            { id: 2, title: 'Card 2', description: 'Description', assignee: 'Assignee', status: 'Done' }
          ]
        },
        {
          id: 2,
          title: 'In Progress',
          cards: [
            { id: 3, title: 'Card 3', description: 'Description', assignee: 'Assignee', status: 'In Progress' }
          ]
        },
        {
          id: 3,
          title: 'Done',
          cards: [
            { id: 4, title: 'Card 4', description: 'Description', assignee: 'Assignee', status: 'Done' }
          ]
        }
      ]
    },
    { id: 2, nombre: 'Proyecto 2', boxes: [] }
  ];

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
