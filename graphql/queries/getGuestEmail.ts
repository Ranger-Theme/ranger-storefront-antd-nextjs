import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

export const GET_GUEST_EMAIL: DocumentNode = gql`
  query getGuestEmail($email: String!) {
    isEmailAvailable(email: $email) {
      is_email_available
    }
  }
`
