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
import { MensagemComponent } from './mensagem/mensagem.component';

// Listagem
import { AgMaquiagemComponent } from './ag-maquiagem/ag-maquiagem.component';
import { AgDepilacaoComponent } from './ag-depilacao/ag-depilacao.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { CorteDiaComponent } from './corte-dia/corte-dia.component';
import { AgMaoComponent } from './ag-mao/ag-mao.component';

// Agendamento
import { NovoAgCabeloComponent } from './novo-ag-cabelo/novo-ag-cabelo.component';
import { NovaAgManicureComponent } from './nova-ag-manicure/nova-ag-manicure.component';
import { NovaAgDepilacaoComponent } from './nova-ag-depilacao/nova-ag-depilacao.component';
import { NovaMaquiagemComponent } from './nova-maquiagem/nova-maquiagem.component';

// Cadastro Servicos
import { NovoServicoComponent } from './novo-servico/novo-servico.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { NovaManicureComponent } from './nova-manicure/nova-manicure.component';
import { NovoCorteComponent } from './novo-corte/novo-corte.component';
import { NovaDepilacaoComponent } from './nova-depilacao/nova-depilacao.component';

// Servicos
import { MaquiagemService } from './services/maquiagem.service';
import { CortesService } from './services/cortes.service';
import { DepilacaoService } from './services/depilacao.service';
import { ManicureService } from './services/manicure.service';
import { LoginComponent } from './login/login.component';

//Rotas
const appRoutes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: TesteComponent },
  { path: 'teste/:id', component: MensagemComponent },
  { path: 'login', component: LoginComponent },
  // Listagem
  { path: 'agendamaquiagem', component: AgMaquiagemComponent },
  { path: 'agendadepilacao', component: AgDepilacaoComponent },
  { path: 'consultacliente', component: ConsultaClienteComponent },
  { path: 'cotedia', component: CorteDiaComponent },
  { path: 'agendamaoepe', component: AgMaoComponent },
  // Agendamento
  { path: 'novoagcabelo', component: NovoAgCabeloComponent },
  { path: 'novamanicure', component: NovaAgManicureComponent },
  { path: 'novadepilacao', component: NovaAgDepilacaoComponent },
  { path: 'novamaquiagem', component: NovaMaquiagemComponent },
  // Cadastro de Servicos
  { path: 'novocliente', component: NovoClienteComponent },
  { path: 'novoservicom', component: NovoServicoComponent },
  { path: 'novocorte', component: NovoCorteComponent },
  { path: 'novapedicure', component: NovaManicureComponent },
  { path: 'novotipodepilacao', component: NovaDepilacaoComponent }
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
    MensagemComponent,
    LoginComponent
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
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    MaquiagemService,
    CortesService,
    DepilacaoService,
    ManicureService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

export class PizzaPartyAppModule { }

