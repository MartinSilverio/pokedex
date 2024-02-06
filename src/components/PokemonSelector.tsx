import { PokemonList, PokemonListItem } from '../types/types';

export function PokemonSelector({
    selectedPokemon,
    onPokemonSelected,
    pokemonList,
}: {
    selectedPokemon: number;
    onPokemonSelected: (n: number) => void;
    pokemonList: PokemonList;
}) {
    return (
        <>
            <label>Pokemon List</label>

            <select
                value={selectedPokemon}
                onChange={(e) => onPokemonSelected(Number(e.target.value))}
            >
                <option hidden value="0">
                    -- Select your Pokemon --
                </option>
                {pokemonList.map((pokemon: PokemonListItem, ndx: number) => {
                    return (
                        <option key={ndx + 1} value={ndx + 1}>
                            {pokemon.name}
                        </option>
                    );
                })}
            </select>
        </>
    );
}
