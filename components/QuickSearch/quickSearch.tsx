import { IoSearch } from 'react-icons/io5'

const QuickSearch = () => {
  return (
    <div className="cursor-pointer inline-flex items-center justify-center leading-none pointer-events-auto text-center h-lg w-lg sm:w-auto">
      <IoSearch size={24} />
      <span>Search</span>
    </div>
  )
}

export default QuickSearch
