// apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client: ApolloClient<any> = new ApolloClient({
  uri: 'http://localhost:8080/graphql', // URL de tu API de Spring Boot
  cache: new InMemoryCache(),
});

export default client;
