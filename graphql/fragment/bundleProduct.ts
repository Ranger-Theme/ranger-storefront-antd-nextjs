import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

export const bundleProduct: DocumentNode = gql`
  fragment bundleProduct on BundleProduct {
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
