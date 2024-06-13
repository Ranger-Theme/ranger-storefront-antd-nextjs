import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

export const POST_SUBSCRIBE_NEWSLETTER: DocumentNode = gql`
  mutation subscribeNewsletter($email: String!) {
    subscribeNewsletter: subscribeEmailToNewsletter(email: $email) {
      status
    }
  }
`
