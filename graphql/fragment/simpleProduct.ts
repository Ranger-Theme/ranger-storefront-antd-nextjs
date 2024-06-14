import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

export const simpleProduct: DocumentNode = gql`
  fragment simpleProduct on SimpleProduct {
    id
    sku
    name
    url_key
    meta_title
    meta_keyword
    meta_description
    main_image: image {
      label
      url
    }
  }
`
