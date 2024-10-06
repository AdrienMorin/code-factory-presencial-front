import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://backend-api/graphql",
  cache: new InMemoryCache(),
});

export default client;
