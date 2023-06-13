import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';
import { ModalComponent } from './components/modal/modal.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { AutoresRoutingModule } from './autores-routing.module';

@NgModule({

  declarations: [
    MainPageComponent,
    ListadoComponent,
    CardComponent,
    ModalComponent,
    FavoritosComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
    AutoresRoutingModule
  ],

  exports: [ ]
})

export class AutoresModule { }