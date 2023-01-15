import React from 'react'
import Modal from '../../Modal'

function SearchBar(): React.ReactElement<{}> {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  return (
    <>
      <div onClick={() => setIsModalOpen(true)}>SearchBar</div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div style={{ color: 'black', fontWeight: 600 }}>{'Search Here'}</div>
      </Modal>
    </>
  )
}

export default SearchBar
