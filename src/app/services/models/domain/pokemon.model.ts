export namespace Pokemon {
  export type SearchBy = 'number' | 'name'
  export interface FetchPokemon {
    search: SearchBy extends 'number' ? number : string
  }
}
