import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_URI_GRAPHCMS, // minha
  cache: new InMemoryCache(),
}) 