'use client'
import { HttpLink } from '@apollo/client'
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache
} from '@apollo/experimental-nextjs-app-support'

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_HOST_URL}/api/graphql`,
    credentials: 'same-origin',
    useGETForQueries: true,
    fetchOptions: { cache: 'no-store' }
  })

  return new ApolloClient({
    cache: new InMemoryCache({
      addTypename: false
    }),
    link: httpLink
  })
}

const ApolloRegistry = ({ children }: React.PropsWithChildren) => {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}

export default ApolloRegistry
