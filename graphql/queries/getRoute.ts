import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

import { categoryTree } from '../fragment/categoryTree'
import { configurableProduct } from '../fragment/configurableProduct'

export const GET_ROUTE: DocumentNode = gql`
  query getRoute($url: String!) {
    route(url: $url) {
      redirect_code
      type
      ...categoryTree
      ...configurableProduct
      __typename
    }
  }
  ${categoryTree}
  ${configurableProduct}
`
