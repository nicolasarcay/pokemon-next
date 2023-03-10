import NextLink from 'next/link';
import { Navbar, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

export const NavbarMenu = () => {
  const { isDark } = useTheme();

  return (
    <Navbar isBordered={isDark} variant="sticky">
      <NextLink href="/">
        <a style={{ color: 'inherit' }}>
          <Navbar.Brand>
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="poke icon"
              width={70}
              height={70}
            />
            <Text color="inherit" hideIn="xs" h2>
              P
            </Text>
            <Text color="inherit" hideIn="xs" h3>
              okémon
            </Text>
          </Navbar.Brand>
        </a>
      </NextLink>
      <Navbar.Content>
        <NextLink href="/favorites">
          <a style={{ color: 'inherit' }}>Favoritos</a>
        </NextLink>
      </Navbar.Content>
    </Navbar>
  );
};
