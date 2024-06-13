'use client'
import { useSuspenseQuery } from '@apollo/client'

import { GET_CMS_BLOCK } from '@/graphql/queries/getCmsBlock'

const CmsBlock = () => {
  const { data } = useSuspenseQuery<any>(GET_CMS_BLOCK, {
    variables: {
      identifiers: ['footer_links_block']
    }
  })
  console.info(data)

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: data?.cmsBlocks?.items?.[0]?.content
        }}
      />
    </div>
  )
}

export default CmsBlock
