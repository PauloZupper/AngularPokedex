import { Component, OnInit, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RemoteFetchAllPokemon } from './services/models/data/pokemon.model';
import { PokemonService } from './services/pokemon/pokemon.service';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pokemons: RemoteFetchAllPokemon | null = null; // Armazena os dados da API
  isLoading = true; // Indica o estado de carregamento
  error: any = null; // Armazena erros

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const {data} = this.pokemonService.getAllPokemonList(20, 0);
    console.log(data)


  }
}
