import Logo from '@/components/Logo'
import MegaMenu from '@/components/MegaMenu'

const Header = () => {
  return (
    <header className="auto-cols-fr bg-white border-b border-gray-300 grid h-auto justify-center px-4 top-0 sticky w-full z-40">
      <Logo />
      <MegaMenu />
    </header>
  )
}

export default Header
