import React from 'react'
import { getPostsSummary } from '../../store/post'
import { Post } from '../../types/Post'
import BlogItem from '../BlogItem'

import './index.css'

function BlogSummary(): React.ReactElement<{}> {
  const posts: Post[] = getPostsSummary(4)

  return (
    <>
      <h1>Latest Posts</h1>
      <div className="summary-container">
        {posts.map(post => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default BlogSummary
