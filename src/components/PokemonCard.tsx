import { usePokemon } from '../hooks/usePokemon';

function PokemonCard({ pokemonNumber }: { pokemonNumber: number }) {
    const { isPending, isError, data, error } = usePokemon(pokemonNumber);

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return <div>{data.name}</div>;
}

export default PokemonCard;
