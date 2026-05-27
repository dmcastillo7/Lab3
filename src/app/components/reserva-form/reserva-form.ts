import { Component, Input, input } from '@angular/core';
import { EspacioModel } from '../../models/espacio.model';
import { ReservaService } from '../../services/reserva-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reserva-form',
  imports: [FormsModule],
  templateUrl: './reserva-form.html',
  styleUrl: './reserva-form.css',
})
export class ReservaForm {
  @Input() espacio!: EspacioModel;

  responsable = "";
  fecha = "";
  hora = "";
  carrera = "";

  constructor(private reservaService: ReservaService){}

  limpiarFormulario(): void {
    this.responsable = "";
    this.fecha = "";
    this.hora = "";
    this.carrera = "";
  }

  guardarReserva(): void{
    if(!this.fecha || !this.hora || this.responsable.length < 3){
      alert("Complete todos los campos correctamente: responsable (mín. 3 caracteres), fecha y hora");
      return;
    }

    this.reservaService.registrarReserva({
      espacio: this.espacio.nombre,
      responsable: this.responsable,
      fecha: this.fecha,
      hora: this.hora,
      carrera: this.carrera
    })

    this.espacio.disponible = false;
    this.reservaService.establecerEspacioReservado(this.espacio);

    this.responsable = "";
    this.fecha = "";
    this.hora = "";
    this.carrera = "";
  }
}
