import Logo from '@/components/Logo'
import MegaMenu from '@/components/MegaMenu'
import QuickSearch from '@/components/QuickSearch'
import SignIn from '@/components/SignIn'
import MiniCart from '@/components/MiniCart'

const Header = () => {
  return (
    <header className="auto-cols-fr bg-white border-b border-gray-300 grid h-auto justify-center px-4 top-0  w-full z-40">
      <Logo />
      <MegaMenu />
      <div className="col-start-3 grid grid-flow-col items-center justify-items-end justify-self-end w-max lg:col-end-13 lg:col-start-10 lg:gap-x-4">
        <QuickSearch />
        <SignIn />
        <MiniCart />
      </div>
    </header>
  )
}

export default Header
