import React from 'react';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import client from './ApolloClient';

const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 5) {
      id
      name
      image
    }
  }
`;

function PokemonList() {
  const { loading, error, data } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro :(</p>;

  return data.pokemons.map(({ id, name, image }) => (
    <div key={id}>
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
  ));
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Minha Primeira Aplicação GraphQL </h2>
        <PokemonList />
      </div>
    </ApolloProvider>
  );
}

export default App;
