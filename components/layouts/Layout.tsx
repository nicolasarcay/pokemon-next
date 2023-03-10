import Head from 'next/head';
import { FC } from 'react';
import { PropsLayout } from '../../interfaces';
import { NavbarMenu } from '../ui';

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<PropsLayout> = ({
  children,
  title,
  metadescription,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Nicolas Arcay" />
        <meta
          name="description"
          content={metadescription || 'esta es un app de pokemons'}
        />
        <meta name="keywords" content={keywords || 'pokemon, pokedex'} />
        <meta property="og:title" content={`${title} - pokeApi`} />
        <meta property="og:description" content={`${metadescription}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <NavbarMenu />
      <main
        style={{
          margin: '15px',
        }}
      >
        {children}
      </main>
    </>
  );
};
