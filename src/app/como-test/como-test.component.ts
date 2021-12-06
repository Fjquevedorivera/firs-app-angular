import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-test',
  templateUrl: './como-test.component.html',
  styleUrls: ['./como-test.component.css']
})
export class ComoTestComponent implements OnInit {
  /*Agregar variables*/
  valor: number = 1;
  constructor() { }

  //Activa componente
  ngOnInit(): void {
    this.valor = Math.trunc(Math.random()* 15)+ 1;
  }

}
