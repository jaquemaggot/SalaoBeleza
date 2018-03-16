import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
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
				alert("Expressao invalida");
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
