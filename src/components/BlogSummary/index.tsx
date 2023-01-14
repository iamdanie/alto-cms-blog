import React from 'react'
import { getPosts } from '../../store/post'
import { Post } from '../../types/Post'
import BlogItem from '../BlogItem'
import './index.css'

function BlogSummary(): React.ReactElement<{}> {
  const posts: Post[] = getPosts()

  return (
    <div className="summary-container">
      {posts.map(post => (
        <BlogItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default BlogSummary
