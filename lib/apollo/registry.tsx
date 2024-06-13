"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: "http://82.157.172.168/graphql",
    credentials: "same-origin",
    useGETForQueries: true,
    fetchOptions: { cache: "no-store" },
  });

  // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
  return new ApolloClient({
    // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
    cache: new InMemoryCache(),
    link: httpLink,
  });
};

const ApolloRegistry = ({ children }: React.PropsWithChildren) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};

export default ApolloRegistry;
