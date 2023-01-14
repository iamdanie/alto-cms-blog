import React from 'react'
import type { Post } from '../../types/Post'
import { formatDate } from '../../helpers/date'
import './index.css'
import { useNavigate } from 'react-router-dom'

type BlogItemProps = {
  post: Post
}

const BlogItem: React.FC<BlogItemProps> = ({ post }) => {
  const navigate = useNavigate()

  return (
    <div key={post.id} className="blog-item">
      <div className="blog-item-container">
        <h2 className="blog-item-title">{post.title}</h2>
        <h3 className="blog-item-author">{`By ${post.author} on ${formatDate(
          post.createdAt
        )}`}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <button
        className="see-more-btn"
        onClick={() => navigate(`/post/${post.id}`)}
      >
        See More
      </button>
    </div>
  )
}

export default BlogItem
