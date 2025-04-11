import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonItem, IonLabel, IonInput, IonButton, IonText
} from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true, 
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonItem, IonLabel, IonInput, IonButton, IonText
  ]
})
export class LoginPage {
  public usuario: string = '';
  public senha: string = '';
  public loginInvalido: boolean = false;
  public loginAutenticado: boolean = false;

  constructor(private router: Router) {}

  fazerLogin() {
    if (this.usuario === 'admin' && this.senha === '1234') {
      this.loginInvalido = false;
      this.loginAutenticado = true;
      console.log('Login bem-sucedido');
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1000);
    } else {
      this.loginInvalido = true;
      this.loginAutenticado = false;
      console.log('Login inválido');
    }
  }
}
