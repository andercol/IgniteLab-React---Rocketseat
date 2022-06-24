import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_URI_URL_GRAPHCMS, // minha
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_URI_API_ACCES_TOKEN}`
  },
  cache: new InMemoryCache(),
}) 