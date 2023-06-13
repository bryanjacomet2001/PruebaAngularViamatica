import { Component } from '@angular/core';
import { AutoresServices } from '../../services/autores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {
  dataAutores!: string[];

  ngOnInit(): void {
    this.autoresServices.getAutores()
    .subscribe(({authors}) => this.dataAutores = authors);
  }

  irFavoritos(){
    this.router.navigate(['autores/favoritos']);
  }

  cerrarSesion(){
    this.router.navigate(['/login']);
  }

  constructor(private autoresServices: AutoresServices, private router: Router ) { }
}
