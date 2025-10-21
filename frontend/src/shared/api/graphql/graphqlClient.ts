import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: 'https://localhost:1337/graphql' }),
  cache: new InMemoryCache(),
});
