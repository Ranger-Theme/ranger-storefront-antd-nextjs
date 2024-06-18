import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { isEmpty } from 'lodash-es'
import type { Metadata } from 'next/types'

import type { PageType } from '@/interface/page'
import { GET_ROUTE } from '@/graphql/queries/getRoute'
import { getClient } from '@/lib/apollo/client'

const CategoryPage = dynamic(() => import('@/page/CategoryPage'))
const ProductPage = dynamic(() => import('@/page/ProductPage'))
const CmsPage = dynamic(() => import('@/page/CmsPage'))

let resolve: any = null

const getMetadata = () => {
  return new Promise((res) => {
    if (resolve && typeof resolve === 'object') {
      res(resolve)
    } else resolve = res
  })
}

export async function generateMetadata() {
  const meta = await getMetadata()
  return meta
}

const fetchData = async (url: string) => {
  try {
    const { data } = await getClient().query({ query: GET_ROUTE, variables: { url } })
    return data?.route ?? {}
  } catch (error) {
    console.info(error)
  }
}

const Resolver = async ({ searchParams }: PageType) => {
  const pathname: string[] =
    typeof searchParams.pathname === 'string'
      ? [searchParams.pathname]
      : (searchParams.pathname as string[])
  const urlKey: string = pathname.join('/')
  const data = await fetchData(urlKey)

  const meta: Metadata = {
    title: data?.meta_title ?? data.name,
    keywords: data?.meta_keywords ?? data.name,
    description: data?.meta_description ?? data.name
  }

  if (resolve && typeof resolve === 'function') {
    resolve(meta)
  } else {
    resolve = meta
  }

  if (isEmpty(data)) notFound()

  return (
    <>
      {data?.type === 'CATEGORY' && <CategoryPage data={data} />}
      {data?.type === 'PRODUCT' && <ProductPage />}
      {data?.type === 'CMS_PAGE' && <CmsPage />}
    </>
  )
}

export default Resolver
