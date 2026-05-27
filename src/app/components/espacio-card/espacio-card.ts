import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EspacioModel } from '../../models/espacio.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-espacio-card',
  imports: [FormsModule],
  templateUrl: './espacio-card.html',
  styleUrl: './espacio-card.css',
})
export class EspacioCard {
  @Input() espacio!: EspacioModel;

  @Output() espacioSeleccionado = new EventEmitter<EspacioModel>();

  seleccionar(): void {
    if(this.espacio.disponible){
      this.espacioSeleccionado.emit(this.espacio);
    }
  }
}
