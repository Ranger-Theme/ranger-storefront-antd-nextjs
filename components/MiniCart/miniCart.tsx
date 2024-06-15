import { FiShoppingBag } from 'react-icons/fi'

const MiniCart = () => {
  return (
    <div className="cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center content-center h-[3rem] min-w-[3rem] relative z-foreground">
      <FiShoppingBag size={24} />
    </div>
  )
}

export default MiniCart
