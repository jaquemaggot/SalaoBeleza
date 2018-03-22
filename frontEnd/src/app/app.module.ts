import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//import Material Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { defaultFormat } from 'moment';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

// import component
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { AgMaquiagemComponent } from './ag-maquiagem/ag-maquiagem.component';
import { NovaMaquiagemComponent } from './nova-maquiagem/nova-maquiagem.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { NovoServicoComponent } from './novo-servico/novo-servico.component';
import { CorteDiaComponent } from './corte-dia/corte-dia.component';
import { NovoAgCabeloComponent } from './novo-ag-cabelo/novo-ag-cabelo.component';
import { NovoCorteComponent } from './novo-corte/novo-corte.component';
import { AgMaoComponent } from './ag-mao/ag-mao.component';
import { NovaAgManicureComponent } from './nova-ag-manicure/nova-ag-manicure.component';
import { NovaManicureComponent } from './nova-manicure/nova-manicure.component';
import { AgDepilacaoComponent } from './ag-depilacao/ag-depilacao.component';
import { NovaAgDepilacaoComponent } from './nova-ag-depilacao/nova-ag-depilacao.component';
import { NovaDepilacaoComponent } from './nova-depilacao/nova-depilacao.component';
import { MensagemComponent } from './mensagem/mensagem.component';


//Rotas
const appRoutes: Routes = [
{ path: '', redirectTo: "/home", pathMatch: "full" },
{ path: 'home', component: TesteComponent },
{ path: 'agendamaquiagem', component: AgMaquiagemComponent },
{ path: 'novamaquiagem', component: NovaMaquiagemComponent },
{ path: 'novocliente', component: NovoClienteComponent },
{ path: 'consultacliente', component: ConsultaClienteComponent },
{ path: 'novoservicom', component:NovoServicoComponent },
{ path: 'cotedia', component: CorteDiaComponent },
{ path: 'novoagcabelo', component: NovoAgCabeloComponent },
{ path: 'novocorte', component: NovoCorteComponent },
{ path: 'agendamaoepe', component: AgMaoComponent },
{ path: 'novamanicure', component: NovaAgManicureComponent },
{ path: 'novapedicure', component: NovaManicureComponent },
{ path: 'agendadepilacao', component: AgDepilacaoComponent },
{ path: 'novadepilacao', component: NovaAgDepilacaoComponent },
{path: 'novotipodepilacao', component: NovaDepilacaoComponent}
];

@NgModule({
  declarations: [
  AppComponent,
  TesteComponent,
  AgMaquiagemComponent,
  NovaMaquiagemComponent,
  NovoClienteComponent,
  ConsultaClienteComponent,
  NovoServicoComponent,
  CorteDiaComponent,
  NovoAgCabeloComponent,
  NovoCorteComponent,
  AgMaoComponent,
  NovaAgManicureComponent,
  NovaManicureComponent,
  AgDepilacaoComponent,
  NovaAgDepilacaoComponent,
  NovaDepilacaoComponent,
  MensagemComponent
  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot(
    appRoutes
    ),
  HttpClientModule,
  FormsModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatTableModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatDialogModule
  ],
  providers: [
  {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

export class PizzaPartyAppModule { }
