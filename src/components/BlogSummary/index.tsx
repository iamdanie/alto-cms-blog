import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getPostsSummary } from '../../store/post'
import { Post } from '../../types/Post'
import BlogItem from '../BlogItem'

import './index.css'
import { RiAddCircleFill } from 'react-icons/ri'

function BlogSummary(): React.ReactElement<{}> {
  const posts: Post[] = getPostsSummary(4)
  const navigate = useNavigate()

  if (!posts.length) {
    return (
      <>
        <h1>No posts yet! Start creating now!</h1>
        <button type="button" onClick={() => navigate('/new')}>
          Create Post
        </button>
      </>
    )
  }

  return (
    <>
      <div className="summary-title">
        <h1>Latest Posts</h1>
        <div className="create-circle-button">
          <RiAddCircleFill title="Create" onClick={() => navigate('/new')} />
        </div>
      </div>
      <div className="blog-container">
        {posts.map(post => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default BlogSummary
