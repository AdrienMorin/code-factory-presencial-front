import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://codefact.udea.edu.co/modulo-12/",
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
};

export default createApolloClient;