import React from 'react'
import { getPosts } from '../../store/post'
import { Post } from '../../types/Post'
import BlogItem from '../BlogItem'
import './index.css'

function BlogSummary(): React.ReactElement<{}> {
  const posts: Post[] = getPosts()

  return (
    <>
      <h1>Latest Posts</h1>
      <div className="summary-container">
        {posts.slice(0, 4).map(post => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default BlogSummary
