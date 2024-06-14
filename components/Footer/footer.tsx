'use client'
import { useSelector } from 'react-redux'

import Newsletter from '@/components/Newsletter'
import { StyledFooter } from './styled'

const Footer = () => {
  const storeConfig = useSelector((state: any) => state.app.storeConfig)

  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <Newsletter />
      <StyledFooter>
        <p dangerouslySetInnerHTML={{ __html: storeConfig?.copyright }} />
      </StyledFooter>
    </div>
  )
}

export default Footer
