// src/shared/api/graphql/WithApollo.tsx
import { ApolloProvider } from '@apollo/client/react';
import { apolloClient } from './graphqlClient';
import type { ReactNode } from 'react';

export const WithGraphql = ({ children }: { children: ReactNode | any }) => (
  <ApolloProvider children={children} client={apolloClient} />
);
