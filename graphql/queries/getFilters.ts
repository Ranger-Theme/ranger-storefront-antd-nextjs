import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

export const GET_FILTERS: DocumentNode = gql`
  query getFilters($search: String, $filters: ProductAttributeFilterInput) {
    products(search: $search, filter: $filters) {
      filters: aggregations {
        label
        count
        attribute_code
        options {
          count
          label
          value
        }
      }
    }
  }
`
