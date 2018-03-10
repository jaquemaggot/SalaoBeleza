import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nova-maquiagem',
  templateUrl: './nova-maquiagem.component.html',
  styleUrls: ['./nova-maquiagem.component.css']
})
export class NovaMaquiagemComponent implements OnInit {

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
