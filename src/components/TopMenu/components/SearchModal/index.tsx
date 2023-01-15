import React from 'react'
import Modal from '../../../Modal'
import { getPosts } from '../../../../store/post'
import type { Post } from '../../../../types/Post'

import './index.css'
import ResultItem from '../ResultItem'
import { useNavigate } from 'react-router-dom'

type SearchModalProps = {
  isOpen: boolean
  onClose: () => void
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [foundPosts, setFoundPosts] = React.useState<Post[]>([])
  const posts: Post[] = getPosts()

  React.useEffect(() => {
    return () => {
      setSearchTerm('')
      setFoundPosts([])
    }
  }, [isOpen])

  const handlePostsSearch = (value: string) => {
    const searchValue = value.toLowerCase()

    setSearchTerm(searchValue)

    if (searchValue === '') {
      setFoundPosts([])
    }

    const found = posts.filter(({ title }) =>
      title.toLowerCase().includes(value)
    )

    setFoundPosts(found)
  }

  const handlePostClick = ({ id }: Post) => {
    onClose()
    navigate(`post/${id}`)
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <>
        <input
          className="search-input"
          id="title"
          name="title"
          type="text"
          placeholder="Search by blog post title..."
          value={searchTerm}
          onChange={({ target: { value } }) => handlePostsSearch(value)}
          maxLength={100}
        />
        <div>
          {foundPosts.map(post => (
            <ResultItem
              key={post.id}
              post={post}
              onClick={() => handlePostClick(post)}
            />
          ))}
        </div>
      </>
    </Modal>
  )
}

export default SearchModal
