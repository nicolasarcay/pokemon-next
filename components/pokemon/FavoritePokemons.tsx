import { FC } from 'react';
import { Grid } from '@nextui-org/react';

import { FavoriteCard } from './';

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((id: number) => (
        <FavoriteCard pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
