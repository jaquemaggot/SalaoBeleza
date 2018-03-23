import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import { AgDepilacaoComponent } from './../ag-depilacao/ag-depilacao.component';

@Component({
	selector: 'app-teste',
	templateUrl: './teste.component.html',
	styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		
	}
	displayedColumns = ['position', 'name', 'weight'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);
}

export interface Element {
	name: string;
	position: number;
	weight: any;
}

var ELEMENT_DATA: Element[] = [
{position: 1, name: 'Gabrielly Cunha Gomes', weight: '13/03/2018'},
{position: 2, name: 'Maria Goncalves Cunha', weight: '13/03/2018'},
{position: 3, name: 'Yasmin Cunha Silva', weight: '13/03/2018'}
];


//-------------------------------------------------------------------------------------------

export class Mask {

	hora(campo, event) {
		campo = document.getElementById(campo);
		var novoValor = this.formataCampo(campo, "00:00", event);
		if (novoValor.toString().length >= 5) {
			var filtro = novoValor.toString().split(':');
			if ((parseInt(filtro[0]) < 24) && (parseInt(filtro[1]) < 60)) {
				campo.value = (filtro[0] + ":" + filtro[1]);
			} else {
				campo.value = "";
				alert("hora Invalida")
			}
		}
	}

	formataCampo(campo, Mascara, evento) {
		var boleanoMascara;

		var Digitato = evento.keyCode;
		var exp = /\-|\.|\/|\(|\)| /g
		var campoSoNumeros = campo.value.toString().replace(/\D/g, "");
		var posicaoCampo = 0;
		var NovoValorCampo = "";
		var TamanhoMascara = campoSoNumeros.length;;

		if (Digitato != 8) { // backspace 
			for (var i = 0; i <= TamanhoMascara; i++) {
				boleanoMascara = ((Mascara.charAt(i) == ":") || (Mascara.charAt(i) == ".")
					|| (Mascara.charAt(i) == "/"))
				boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == "(")
					|| (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " "))
				if (boleanoMascara) {
					NovoValorCampo += Mascara.charAt(i);
					TamanhoMascara++;
				} else {
					NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
					posicaoCampo++;
				}
			}
			return NovoValorCampo;
			//campo.value = NovoValorCampo;
			//return true;
		} else {
			return true;
		}
	}
}
