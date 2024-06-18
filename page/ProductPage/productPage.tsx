import Link from 'next/link'

const ProductPage = ({ data }: any) => {
  return (
    <div>
      <p>{data.name}</p>
      <Link href="/women/bottoms-women/pants-women.html">
        <span>Pants - Bottoms - Women</span>
      </Link>
    </div>
  )
}

export default ProductPage
