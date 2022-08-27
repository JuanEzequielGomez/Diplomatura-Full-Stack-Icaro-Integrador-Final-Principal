import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


export interface PeriodicElement {
  Remitente: string;
  Destinatario: string;
  Fecha: number;
  Mensaje: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Remitente: "Ezequiel Gómez", Destinatario: 'Mariel Chocobar', Fecha:14_05_20017, Mensaje: ''},
  {Remitente: "Ezequiel Gómez", Destinatario: 'Agustín Cristófoli', Fecha: 4.0026, Mensaje: ''},
  {Remitente: "Ezequiel Gómez ", Destinatario: 'Martín Fernandez', Fecha: 6.941, Mensaje: ''},
  {Remitente: "Ezequiel Gómez", Destinatario: 'Germán Gaite', Fecha: 9.0122, Mensaje: ''},
];

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})


export class PrincipalComponent implements OnInit {
  receiverId!: string
  text!: string



  displayedColumns: string[] = ['Remitente', 'Destinatario', 'Fecha', 'Mensaje'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;
  router: any;

  nuevoMensaje(){
    window.open('http://localhost:4200/messages')
  }

  getSentMessages() { }

  getReceivedMessages() {}

  salir(){
    window.open('http://localhost:4200/')
    }


  constructor( private fb:FormBuilder) {}


  ngOnInit(): void {
  }
}
