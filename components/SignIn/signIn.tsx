import { FiUser } from 'react-icons/fi'

const SignIn = () => {
  return (
    <div className="cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center h-[3rem] min-w-[6rem] z-foreground">
      <FiUser size={24} />
      <span>Sign In</span>
    </div>
  )
}

export default SignIn
