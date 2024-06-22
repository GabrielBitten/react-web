import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from "../Header/header-component";
import CardSection from "../CardSection/card-section-component";
import style from "../PaginaSquirtle/pagina-squirtle.module.css";
import Image from 'next/image';

export default function Evolucoes() {
    const router = useRouter();
    const [evolucao, setEvolucao] = useState<any>(null); // Tipagem pode ser ajustada conforme a estrutura dos dados retornados pela API

    useEffect(() => {
        if (router.query.pokemon) {
            const pokemonName = router.query.pokemon as string;
            // Exemplo de chamada à PokeAPI (ajuste conforme a estrutura de retorno da API)
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(response => response.json())
                .then(data => setEvolucao(data))
                .catch(error => console.error('Erro ao buscar dados da PokeAPI:', error));
        }
    }, [router.query.pokemon]);

    return (
        <>
            <header>
                <Header title={`Evolução de ${router.query.pokemon}`} />
            </header>
            <main className={style.main}>
                {evolucao && (
                    <CardSection title={`Detalhes de ${router.query.pokemon}`}>
                        <Image
                            src={evolucao.sprites.front_default}
                            alt={router.query.pokemon as string}
                            width={150}
                            height={150}
                        />
                    </CardSection>
                )}
            </main>
        </>
    );
}
