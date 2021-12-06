import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  name = "";
  nombre1 = "Elvis";
  primerNombre = "Francisco";
  primerApellido = "Quevedo";
  name_p = "Francisco Quevedo";
  edad = 43;
  email = "fj.quevedo@gmail.com";
  activo = true;
  valorProyectos = [300.000, 400.000, 350.000];
  contador = 1; 

  incrementar () {
    this.contador++;
  };

  esActivo() {
    if(this.activo){
      return "Trabajador activo";
    } else {
      return "Trabajador inactivo";
    }
  };

}
