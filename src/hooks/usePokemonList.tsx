import { useQuery } from '@tanstack/react-query';

export function usePokemonList() {
    const queryData = useQuery({
        queryKey: ['pokemonList'],
        queryFn: async () => {
            const resp = await fetch(
                'https://pokeapi.co/api/v2/pokemon?offset=0&limit=150'
            );
            if (!resp.ok) {
                throw new Error('Was not able to get Pokemon data');
            }
            const data = await resp.json();
            return data;
        },
    });

    return queryData;
}
