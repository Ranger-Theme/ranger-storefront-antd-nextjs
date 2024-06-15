'use client'
import { useSelector } from 'react-redux'

import Newsletter from '@/components/Newsletter'
import { StyledFooter } from './styled'

const Footer = () => {
  const storeConfig = useSelector((state: any) => state.app.storeConfig)

  return (
    <footer className="w-full max-w-screen-2xl mx-auto footer-root-xZ1 border-t-2 border-solid border-light gap-y-16 grid leading-normal max-w-site min-h-[15rem] pt-16 text-sm text-subtle">
      <Newsletter />
      <StyledFooter>
        <p dangerouslySetInnerHTML={{ __html: storeConfig?.copyright }} />
      </StyledFooter>
    </footer>
  )
}

export default Footer
