import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

export const GET_MEGA_MENU: DocumentNode = gql`
  query getMegaMenu {
    menus: categoryList {
      id
      name
      children {
        id
        name
        url_path
        include_in_menu
        position
        children {
          id
          name
          url_path
          include_in_menu
          position
        }
      }
    }
  }
`
