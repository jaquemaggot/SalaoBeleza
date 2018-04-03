import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarMenuEmitter = new EventEmitter<boolean>();

  fazerlogin(){
    this.mostrarMenuEmitter.emit(true);
  }

}
