import React from 'react'
import { getPosts } from '../../store/post'
import type { Post } from '../../types/Post'
import BlogItem from '../../components/BlogItem'
import './index.css'

function Blog(): React.ReactElement<{}> {
  const posts: Post[] = getPosts()

  return (
    <>
      <h1>All Blog Posts</h1>
      <div className="blog-container">
        {posts.map(post => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default Blog
