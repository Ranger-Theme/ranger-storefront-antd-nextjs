import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

export const GET_STORE_CONFIG: DocumentNode = gql`
  query getStoreConfig {
    storeConfig {
      code
      copyright
      locale
      logo_alt
      logo_height
      logo_width
      cms_home_page
      shortcut_icon: head_shortcut_icon
      logo_src: header_logo_src
      secure_base_url
      secure_base_media_url
      category_url_suffix
      product_url_suffix
    }
    currency {
      code: default_display_currency_code
      symbol: default_display_currency_symbol
    }
  }
`
