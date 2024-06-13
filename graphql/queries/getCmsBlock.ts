import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

export const GET_CMS_BLOCK: DocumentNode = gql`
  query getCmsBlock($identifiers: [String]!) {
    cmsBlocks(identifiers: $identifiers) {
      items {
        content
        identifier
        title
      }
    }
  }
`
