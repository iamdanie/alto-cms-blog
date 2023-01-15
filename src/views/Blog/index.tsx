import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getPostsSummary } from '../../store/post'
import type { Post } from '../../types/Post'
import BlogItem from '../../components/BlogItem'
import './index.css'

function Blog(): React.ReactElement<{}> {
  const posts: Post[] = getPostsSummary()
  const navigate = useNavigate()

  return (
    <>
      <div className="title-wrapper">
        <h1>All Blog Posts</h1>
        <button type="button" onClick={() => navigate('/new')}>
          Create Post
        </button>
      </div>
      <div className="blog-container">
        {posts.map(post => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default Blog
