import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { registerModuleFactory } from '@angular/core/src/linker/ng_module_factory_loader';

export class Dados{
	public id: Number;
	public nome: String;
	public data: any;
}

@Injectable()
export class MaquiagemService {

  constructor(private http: HttpClient) { }
  

  listaTodos(){
  	return this.http.get('http://localhost:3000/maquiagem');
  }

}
