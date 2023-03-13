import { useState } from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import {
  Button,
  Card,
  Container,
  Grid,
  Image,
  Row,
  Text,
} from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { localFavorites } from '../../utils';
import { Layout } from '../../components/layouts';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { pokeApi } from '../../api';
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorite, setisInFavorite] = useState(
    localFavorites.existInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setisInFavorite(!isInFavorite);

    if (isInFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout
      title={`Pokemon ${pokemon.name}`}
      metadescription={`Esta es la pagina de ${pokemon.name}`}
    >
      <Grid.Container gap={2} css={{ marginTop: '25px' }}>
        <Grid xs={12} md={4}>
          <Card css={{ alignItems: 'center' }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  './no-image.png'
                }
                width="100%"
                height={200}
                alt={pokemon.name}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} md={8} direction="column">
          <Card>
            <Card.Header
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '25px',
                paddingRight: '25px',
              }}
            >
              <Text h1>{pokemon.name}</Text>
              <Button
                color="gradient"
                ghost={!isInFavorite}
                onPress={onToggleFavorite}
              >
                {isInFavorite ? 'En favoritos' : 'Agregar a Favoritos'}
              </Button>
            </Card.Header>
            <Card.Body
              css={{
                paddingLeft: '25px',
                paddingRight: '25px',
              }}
            >
              <Text h3>Sprites:</Text>
              <Container>
                <Row>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async ctx => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemonNames: string[] = data.results.map(pokemon => pokemon.name);

  return {
    paths: pokemonNames.map(name => ({
      params: { name },
    })),
    // fallback: false, Aca da 404 cuando la pagina no esta generado en el build
    fallback: 'blocking',
  };
};

// Desestructuro el contexto para tener el param id
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // de esta manera le digo que los params traen un id que es de tipo string
  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    // esto hace que se regenere la pagina estatica cada una cantidad X de segundos
    revalidate: 86400, //son 24hs 60*60*24
  };
};

export default PokemonByNamePage;
