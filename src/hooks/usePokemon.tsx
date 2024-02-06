import { useQuery } from '@tanstack/react-query';

export function usePokemon(pokemonNumber: number) {
    const queryData = useQuery({
        queryKey: ['pokemon', pokemonNumber],
        queryFn: async () => {
            const resp = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`
            );

            if (!resp.ok) throw new Error('unable to get Pokemon');

            const data = await resp.json();
            return data;
        },
    });

    return queryData;
}
