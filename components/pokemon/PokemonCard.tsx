import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { img, name, id } = pokemon;

  //Esto hace que se me habilite la navegacion
  const router = useRouter();

  const onClickPokemon = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={onClickPokemon}>
      <Card isPressable isHoverable>
        <Card.Body css={{ p: 4 }}>
          <Card.Image src={img} width="100%" height="140px" alt={name} />
        </Card.Body>
        <Card.Footer css={{ justifyItems: 'flex-start' }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text b transform="capitalize">
              {name}
            </Text>
            <Text
              css={{
                color: '$accents7',
                fontWeight: '$semibold',
                fontSize: '$sm',
              }}
            >
              {id}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
