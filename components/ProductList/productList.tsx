'use client'
import { useSuspenseQuery } from '@apollo/client'

import { GET_PRODUCTS } from '@/graphql/queries/getProducts'
import ProductItem from './ProductItem'

const ProductList = ({ inputs, id }: any) => {
  const { data } = useSuspenseQuery<any>(GET_PRODUCTS, {
    variables: {
      search: '',
      filters: {
        category_id: {
          eq: id
        }
      },
      pageSize: 12,
      currentPage: 1
    }
  })
  const productList: any[] = data?.products?.items ?? []
  const total: number = data?.products?.total_count ?? 0

  return (
    <div className="lg:flex-grow">
      <div className="flex flex-wrap justify-center pb-2 lg:flex-nowrap lg:items-center lg:justify-between lg:pb-6 lg:w-full">
        <div className="basis-full leading-tight max-w-[75vw] mx-0 my-xs text-center lg:m-0 lg:text-left">
          <span>{`${total} ${total > 1 ? 'Results' : 'Result'}`}</span>
        </div>
        <div className="flex justify-center pb-sm basis-full lg:justify-end lg:pb-0">
          <span>Sort by</span>
        </div>
      </div>
      <section>
        {productList.length > 0 ? (
          <div className="grid grid-cols-1 leading-none" aria-busy="false">
            <div className="grid grid-cols-3 gap-4 mb-3">
              {productList.map((product: any) => {
                return <ProductItem key={product.id} product={product} />
              })}
            </div>
          </div>
        ) : (
          <p>There is no any products.</p>
        )}
      </section>
    </div>
  )
}

export default ProductList
