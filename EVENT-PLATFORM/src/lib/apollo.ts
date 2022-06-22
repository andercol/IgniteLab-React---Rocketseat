import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  //uri: 'https://api-sa-east-1.graphcms.com/v2/cl4n4k5w68h3x01yra00r5rzf/master', // rocket
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8rbv616cx01z744dzg2jj/master', // minha
  cache: new InMemoryCache(),
})