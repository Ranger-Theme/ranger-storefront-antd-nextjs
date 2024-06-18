import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

export const GET_SORTS: DocumentNode = gql`
  query getSorts($search: String, $filters: ProductAttributeFilterInput) {
    products(search: $search, filter: $filters) {
      sorts: sort_fields {
        default
        options {
          label
          value
        }
      }
    }
  }
`
