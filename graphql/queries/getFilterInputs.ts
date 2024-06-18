import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

export const GET_FILTER_INPUTS: DocumentNode = gql`
  query getFilterInputs {
    __type(name: "ProductAttributeFilterInput") {
      inputFields {
        name
        type {
          name
        }
      }
    }
  }
`
