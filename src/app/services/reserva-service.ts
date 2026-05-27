import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EspacioModel } from '../models/espacio.model';

export interface ReservaData{
  espacio: string,
  responsable: string,
  fecha: string,
  hora: string,
  carrera: string
}

@Injectable({
  providedIn: 'root',
})

export class ReservaService {
  private reservaSubject = new BehaviorSubject<ReservaData | null>(null);
  reservaActual$ = this.reservaSubject.asObservable();
  
  private espacioReservado: EspacioModel | null = null;

  registrarReserva(reserva: ReservaData): void {
    this.reservaSubject.next(reserva);
  }

  establecerEspacioReservado(espacio: EspacioModel): void {
    this.espacioReservado = espacio;
  }

  limpiarReserva(): void{
    if (this.espacioReservado) {
      this.espacioReservado.disponible = true;
      this.espacioReservado = null;
    }
    this.reservaSubject.next(null);
  }

}
