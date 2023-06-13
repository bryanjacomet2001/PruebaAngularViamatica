import { Injectable } from '@angular/core';
import { Autor } from '../interface/autores.interface';
import { Obras } from '../interface/obras.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AutoresServices {

  private _obrasFavoritas: Obras[] = [];

  getAutores(): Observable<Autor>{
    return this.http.get<Autor>('https://poetrydb.org/author');
  }

  getAutoresObras(autor: string){
    return this.http.get<Obras[]>(`https://poetrydb.org/author/${autor}/title`);
  }
  
  getObrasRandom(){
    let limit: number = 6; 
    return this.http.get<Obras[]>(`https://poetrydb.org/random/${limit}/author,title.json`);
  }

  agregarObrasFavoritas(obras: Obras): void{
    if(!this._obrasFavoritas.includes(obras))
      this._obrasFavoritas.push(obras);
  }

  get obrasFavoritas(): Obras[]{
    return this._obrasFavoritas;
  }

  eliminarObrasFavoritas(title: string): void{
    this._obrasFavoritas = [...this._obrasFavoritas.filter(el => el.title != title)];
  }

  constructor( private http: HttpClient ) { }
 
}
