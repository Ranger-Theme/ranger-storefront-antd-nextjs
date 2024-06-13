'use client'
import { Button } from 'antd'

import Logo from '@/components/Logo'
import { StyledHeader } from './styled'

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Button>Mini Cart</Button>
    </StyledHeader>
  )
}

export default Header
