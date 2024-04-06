import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/', // Substitua pela URI da API GraphQL que deseja utilizar
  cache: new InMemoryCache()
});

export default client;
