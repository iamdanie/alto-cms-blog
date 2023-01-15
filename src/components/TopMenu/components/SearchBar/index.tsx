import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
import './index.css'
import SearchModal from '../SearchModal'

function SearchBar(): React.ReactElement<{}> {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  return (
    <>
      <div className="search-action" onClick={() => setIsModalOpen(true)}>
        <RiSearchLine />
        <div>Search</div>
      </div>
      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default SearchBar
