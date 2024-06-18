'use client'
import { useSuspenseQuery } from '@apollo/client'

import { GET_FILTER_INPUTS } from '@/graphql/queries/getFilterInputs'
import ProductList from '@/components/ProductList'

const CategoryGrid = ({ id }: any) => {
  const { data } = useSuspenseQuery<any>(GET_FILTER_INPUTS)
  const inputs: any[] = data?.__type?.inputFields ?? []

  return (
    <div>
      <p>CategoryGrid</p>
      {inputs.length > 0 && (
        <div className="w-full lg:flex">
          <div className="hidden lg:flex lg:self-start lg:pt-16 lg:w-[325px]">
            <aside
              className="bg-white bottom-0 hidden max-w-screen-3xs w-full z-40 lg:grid"
              aria-busy="false"
            >
              <div className="flex justify-between pb-0 pt-5 px-5">
                <h2 className="flex items-center leading-none text-lg">Filters</h2>
              </div>
            </aside>
          </div>
          <ProductList inputs={inputs} id={id} />
        </div>
      )}
    </div>
  )
}

export default CategoryGrid
