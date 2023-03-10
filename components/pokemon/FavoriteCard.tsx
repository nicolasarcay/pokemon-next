import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react';

interface Props {
  pokemonId: number;
}

export const FavoriteCard: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onClickPokemon = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isPressable isHoverable onClick={onClickPokemon}>
        <Card.Body css={{ p: 4 }}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            width="100%"
            height="140px"
            alt="pokemon"
          />
        </Card.Body>
      </Card>
    </Grid>
  );
};
