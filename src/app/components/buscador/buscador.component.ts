import{Component, OnInit} from '@angular/core';

import{ActivatedRoute} from '@angular/router';

//servicio
import{ HeroesService, Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html', 
})
export class BuscadorComponent implements OnInit {
    heroes:Heroe[] = [];
    termino:string;
    constructor(private activateRoute: ActivatedRoute,
    private _heroesService:HeroesService){}

    ngOnInit(){
        this.activateRoute.params.subscribe( params => {
          this.termino = params['termino'];
          this.heroes = this._heroesService.buscarHeroes( params['termino']);
          console.log( this.heroes );
        })

    }
}