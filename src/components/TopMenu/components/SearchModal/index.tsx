import React from 'react'
import Modal from '../../../Modal'
import { getPosts } from '../../../../store/post'
import type { Post } from '../../../../types/Post'
import BlogItem from '../../../BlogItem'

type SearchModalProps = {
  isOpen: boolean
  onClose: () => void
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [foundPosts, setFoundPosts] = React.useState<Post[]>([])
  const posts: Post[] = getPosts()

  const handlePostsSearch = (value: string) => {
    setSearchTerm(value)

    if (value === '') {
      setFoundPosts([])
      return
    }

    const found = posts.filter(({ title }) => title.includes(value))

    if (found.length) {
      setFoundPosts(found)
    }
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
            <BlogItem key={post.id} post={post} />
          ))}
        </div>
      </>
    </Modal>
  )
}

export default SearchModal
