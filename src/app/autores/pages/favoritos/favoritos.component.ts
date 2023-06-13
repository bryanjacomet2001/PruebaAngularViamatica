import { Component } from '@angular/core';
import { AutoresServices } from '../../services/autores.service';
import { Obras } from '../../interface/obras.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})

export class FavoritosComponent {
  
  _obrasFavoritas!: Obras[];

  ngOnInit(): void { }

  get obrasFavoritas() {
    return this._obrasFavoritas = this.autoresServices.obrasFavoritas;
  }

  get totalObrasFavoritas(): number{
    return this.autoresServices.obrasFavoritas.length;
  }

  eliminarFavoritos(title: string) {
    this.autoresServices.eliminarObrasFavoritas(title);
  }

  volverAlListado(){
    this.router.navigate(['/autores/listado'])
  }

  constructor ( private autoresServices: AutoresServices, private router: Router) { }

}
