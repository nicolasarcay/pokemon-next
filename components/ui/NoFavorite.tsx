import { Container, Image, Text } from '@nextui-org/react';

export const NoFavorite = () => {
  return (
    <Container
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 100px)',
        flexDirection: 'column',
      }}
    >
      <Text h1>No hay Favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
        width={250}
        height={250}
        alt="marowak"
      />
    </Container>
  );
};
