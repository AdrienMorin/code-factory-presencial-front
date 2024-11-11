import { NavBar } from "@/components/ui/reservasa/layout/navBar";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </ApolloProvider>
  );
}
