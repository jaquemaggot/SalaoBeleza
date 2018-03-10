import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  sexo = [
    {value: "Mas", viewValue:"Masculino"},
    {value: "Fem", viewValue:"Feminino"},
    {value: "Out", viewValue:"Outros"},
  ];
  est = [
    {value: "Cas", viewValue: "Casado"},
    {value: "Sol", viewValue: "Soltero"},
    {value: "esta", viewValue: "Uniao Estavel"},
    {value: "out", viewValue: "Outros"},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
