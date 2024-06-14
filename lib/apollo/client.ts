import { HttpLink } from '@apollo/client'
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache
} from '@apollo/experimental-nextjs-app-support'

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      addTypename: false
    }),
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_HOST_URL}/api/graphql`,
      credentials: 'same-origin',
      useGETForQueries: true
    })
  })
})
