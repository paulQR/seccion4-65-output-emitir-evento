import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//rutas
import { APP_ROUTING } from './app.routes';

// servicios
import { HeroesService } from './servicios/heroes.service';


//componentes
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';

import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,APP_ROUTING ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeComponent, HeroesComponent, AboutComponent, HeroeComponent, BuscadorComponent, HeroeTarjetaComponent],
  providers:[HeroesService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
