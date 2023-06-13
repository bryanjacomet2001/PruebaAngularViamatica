import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
  usuario: Usuario = {
    nombreUsuario: '',
    contrasenia: ''
  }

  iniciarSesion(){  
    if(this.usuario.nombreUsuario === 'admin' && this.usuario.contrasenia === 'admin'){
      this.authService.obtenerUsuario(this.usuario);
      this.router.navigate(['autores/listado']);
    }
  }
      
  constructor( private router: Router, private authService: AuthService ) { }
}
