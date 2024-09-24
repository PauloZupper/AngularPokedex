import { Injectable } from '@angular/core';
import { makeUrl } from '../../../data/protocol/http/config';
import endpoints from './endpoints';
import {
  injectMutation,
  injectQuery,
  injectQueryClient,
} from '@tanstack/angular-query-experimental';
import { PokeApi } from '../../../data/protocol/http';
import { RemoteFetchAllPokemon } from '../models/data/pokemon.model';


@Injectable({
  providedIn: 'root',
})


export class PokemonService {
  constructor() {}

  getAllPokemonList(limit: number, offset: number) {

    const path = makeUrl(endpoints.fetchPkmByName)
      .addQueryParam('offset',offset)
      .addQueryParam('limit', limit)
      .build();

      return PokeApi.get<never,RemoteFetchAllPokemon>(path)
  }
}
