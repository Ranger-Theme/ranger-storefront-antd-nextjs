import CategoryGrid from '@/components/CategoryGrid'

const CategoryPage = ({ data }: any) => {
  const showProducts: boolean = ['PRODUCTS', 'PRODUCTS_AND_PAGE'].includes(data.display_mode)

  return (
    <article className="category p-4">
      <h1 className="font-normal px-2xs py-0 text-xl">
        <div
          className="font-light leading-snug pb-xs text-colorDefault text-center text-xl"
          dangerouslySetInnerHTML={{ __html: data.name }}
        />
      </h1>
      {showProducts && <CategoryGrid />}
    </article>
  )
}

export default CategoryPage
