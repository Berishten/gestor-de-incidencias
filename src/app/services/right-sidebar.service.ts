import { Injectable } from '@angular/core';
import { Field } from '../components/create-issue/issue-fields/issue-fields.component';

@Injectable({
  providedIn: 'root'
})
export class RightSidebarService {
  private titulo: string = "Holis";
  private descripcion: string = "# Soy un markup";
  private fields: Field[] = [
    { name: 'Asignado', value: 'Berishten' },
    { name: 'Estado', value: 'Abierto' },
    { name: 'Prioridad', value: 'Media' },
    { name: 'Fecha de inicio', value: '2021-08-01' },
    { name: 'Fecha de finalización', value: '2021-07-15' }
  ]

  get getTitulo() {
    return this.titulo;
  }

  set setTitulo(titulo: string) {
    this.titulo = titulo;
  }

  get getDescripcion() {
    return this.descripcion;
  }

  set setDescripcion(descripcion: string) {
    this.descripcion = descripcion;
  }

  get getFields() {
    return this.fields;
  }

  set setFields(fields: Field[]) {
    this.fields = fields;
  }

}
