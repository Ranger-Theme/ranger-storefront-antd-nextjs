import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

import { price_range } from '../fragment/priceRange'

export const GET_PRODUCTS: DocumentNode = gql`
  query getProducts(
    $search: String
    $filters: ProductAttributeFilterInput
    $pageSize: Int
    $currentPage: Int
    $sort: ProductAttributeSortInput
  ) {
    products(
      search: $search
      pageSize: $pageSize
      currentPage: $currentPage
      filter: $filters
      sort: $sort
    ) {
      items {
        id
        name
        sku
        url_key
        small_image {
          label
          url
        }
        price_range {
          ...price_range
          __typename
        }
        stock_status
        __typename
      }
      total_count
    }
  }
  ${price_range}
`
