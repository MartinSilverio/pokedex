import { usePokemon } from '../hooks/usePokemon';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

function PokemonCard({ pokemonNumber }: { pokemonNumber: number }) {
    const { isPending, isError, data, error } = usePokemon(pokemonNumber);

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        // <Card>
        //     <div className="h-50 flex flex-col rounded-md bg-orange-500 shadow-lg">
        //         <span>{data.name}</span>
        //         <div>Pokemon Image</div>
        //     </div>
        // </Card>
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle>{data.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Pokemon Image</p>
            </CardContent>
        </Card>
    );
}

export default PokemonCard;
