import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AutoresModule } from './autores/autores.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AutoresModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
