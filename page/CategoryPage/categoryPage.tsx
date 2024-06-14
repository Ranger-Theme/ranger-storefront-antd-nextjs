import Link from 'next/link'

const CategoryPage = () => {
  return (
    <div>
      <p>Category Page</p>
      <Link href="/olivia-1-4-zip-light-jacket.html">
        <span>Olivia 1/4 Zip Light Jacket</span>
      </Link>
      <p>
        <Link href="/olivia-1-4">
          <span>Olivia</span>
        </Link>
      </p>
    </div>
  )
}

export default CategoryPage
