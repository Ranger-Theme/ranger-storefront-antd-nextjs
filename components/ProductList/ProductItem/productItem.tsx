import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const ProductItem = ({ product }: any) => {
  const { url_key, name, small_image } = product
  const storeConfig = useSelector((state: any) => state.app.storeConfig)
  const suffix: string = storeConfig?.product_url_suffix ?? ''

  return (
    <div className="content-start grid gap-y-2xs">
      <Link className="grid" href={`/${url_key}${suffix}`} title={name}>
        <Image src={small_image.url} alt={small_image.url} width={350} height={350} />
      </Link>
      <Link className="font-semibold text-colorDefault" href={`/${url_key}${suffix}`} title={name}>
        <span dangerouslySetInnerHTML={{ __html: name }} />
      </Link>
    </div>
  )
}

export default ProductItem
