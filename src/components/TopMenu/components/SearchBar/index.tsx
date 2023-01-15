import React from 'react'
import Modal from '../../../Modal'
import { RiSearchLine } from 'react-icons/ri'
import './index.css'

function SearchBar(): React.ReactElement<{}> {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  return (
    <>
      <div className="search-action" onClick={() => setIsModalOpen(true)}>
        <RiSearchLine />
        <div>Search</div>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div style={{ color: 'black', fontWeight: 600 }}>{'Search Here'}</div>
      </Modal>
    </>
  )
}

export default SearchBar
