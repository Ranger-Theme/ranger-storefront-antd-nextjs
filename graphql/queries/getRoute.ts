import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

import { categoryTree } from '../fragment/categoryTree'
import { cmsPage } from '../fragment/cmsPage'
import { bundleProduct } from '../fragment/bundleProduct'
import { configurableProduct } from '../fragment/configurableProduct'
import { downloadableProduct } from '../fragment/downloadableProduct'
import { groupedProduct } from '../fragment/groupedProduct'
import { simpleProduct } from '../fragment/simpleProduct'
import { virtualProduct } from '../fragment/virtualProduct'

export const GET_ROUTE: DocumentNode = gql`
  query getRoute($url: String!) {
    route(url: $url) {
      redirect_code
      type
      ...categoryTree
      ...cmsPage
      ...bundleProduct
      ...configurableProduct
      ...downloadableProduct
      ...groupedProduct
      ...simpleProduct
      ...virtualProduct
      __typename
    }
  }
  ${categoryTree}
  ${cmsPage}
  ${bundleProduct}
  ${configurableProduct}
  ${downloadableProduct}
  ${groupedProduct}
  ${simpleProduct}
  ${virtualProduct}
`
