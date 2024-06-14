'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from 'antd'

import Logo from '@/components/Logo'
import { StyledHeader } from './styled'

const Header = () => {
  const router = useRouter()

  const handleOnClick = () => {
    router.push('/register')
  }

  return (
    <StyledHeader className="w-full max-w-screen-2xl mx-auto">
      <Logo />
      <div>
        <Link href="/login">Login</Link>
      </div>
      <Button onClick={handleOnClick}>Register</Button>
    </StyledHeader>
  )
}

export default Header
