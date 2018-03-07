import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';

// import component
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { AgMaquiagemComponent } from './ag-maquiagem/ag-maquiagem.component';

//Rotas
const appRoutes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: TesteComponent },
  { path: 'agendamaquiagem', component: AgMaquiagemComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    AgMaquiagemComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }

export class PizzaPartyAppModule { }
