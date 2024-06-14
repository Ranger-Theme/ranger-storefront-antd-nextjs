import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

export const categoryTree: DocumentNode = gql`
  fragment categoryTree on CategoryTree {
    id
    name
    url_path
    display_mode
    default_sort_by
    description
    image
    is_anchor
    meta_title
    meta_keywords
    meta_description
  }
`
