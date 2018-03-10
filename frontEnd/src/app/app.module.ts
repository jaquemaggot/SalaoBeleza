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

// import component
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { AgMaquiagemComponent } from './ag-maquiagem/ag-maquiagem.component';
import { NovaMaquiagemComponent } from './nova-maquiagem/nova-maquiagem.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';


//Rotas
const appRoutes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: TesteComponent },
  { path: 'agendamaquiagem', component: AgMaquiagemComponent },
  { path: 'novamaquiagem', component: NovaMaquiagemComponent },
  { path: 'novocliente', component: NovoClienteComponent },
  {path: 'consultacliente', component: ConsultaClienteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    AgMaquiagemComponent,
    NovaMaquiagemComponent,
    NovoClienteComponent,
    ConsultaClienteComponent
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
    MatNativeDateModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

export class PizzaPartyAppModule { }
