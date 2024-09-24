import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RemoteFetchAllPokemon } from './services/models/data/pokemon.model';
import { PokemonService } from './services/pokemon/pokemon.service';
import { HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs'; // Import necessário para tratar erros com `of`

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
    // Realiza a requisição e trata a resposta
    this.pokemonService.getAllPokemonList(20, 20)
      .pipe(
        map((response: HttpResponse<RemoteFetchAllPokemon>) => response.body), // Extrai o corpo da resposta
        catchError(error => {
          this.error = error; // Armazena o erro
          this.isLoading = false; // Atualiza o estado de carregamento
          return of(null); // Retorna um observable vazio para seguir o fluxo
        })
      )
      .subscribe((data: RemoteFetchAllPokemon | null) => {
        this.pokemons = data; // Armazena os dados
        this.isLoading = false; // Atualiza o estado de carregamento
        console.log(data)
      });
  }


}
