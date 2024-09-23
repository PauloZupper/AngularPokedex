export interface RemoteFetchAllPokemon {
  count: number;
  next: string;
  previous: any;
  results: RemotePokemon[];
}

export interface RemotePokemon {
  name: string;
  url: string;
}
