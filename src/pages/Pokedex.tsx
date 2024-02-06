import { useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import { usePokemonList } from '../hooks/usePokemonList';
import { PokemonSelector } from '../components/PokemonSelector';

export default function Pokedex() {
    const [selectedPokemon, setSelectedPokemon] = useState(0);

    const { isPending, isError, data, error } = usePokemonList();

    function handlePokemonSelect(pokemonNumber: number) {
        setSelectedPokemon(pokemonNumber);
    }

    if (isPending) return <span>Loading....</span>;
    if (isError)
        return <span>There was an error getting pokemon: {error.message}</span>;

    return (
        <div>
            <PokemonSelector
                selectedPokemon={selectedPokemon}
                pokemonList={data.results}
                onPokemonSelected={handlePokemonSelect}
            />

            {selectedPokemon ? (
                <PokemonCard pokemonNumber={selectedPokemon} />
            ) : (
                <div>Select your pokemon</div>
            )}
        </div>
    );
}
