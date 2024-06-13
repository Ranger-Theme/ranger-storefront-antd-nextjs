import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      addTypename: false,
    }),
    link: new HttpLink({
      uri: "http://82.157.172.168/graphql",
      credentials: "same-origin",
      useGETForQueries: true,
      fetchOptions: { cache: "no-store" },
    }),
  });
});
