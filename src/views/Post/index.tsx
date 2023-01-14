import React from 'react'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../store/post'
import type { Post } from '../../types/Post'
import './index.css'

function PostView(): React.ReactElement<{}> {
  const { id } = useParams()
  const [post, setPost] = React.useState<Post>()

  React.useEffect(() => {
    if (id && !Number.isNaN(id)) {
      const post = getPostById(id)

      setPost(post)
    }
  }, [id])

  const formatDate = (date: string) => {
    const postDate = new Date(date)
    const formatted = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full'
    }).format(postDate)

    return formatted
  }

  if (!post) {
    return <div>Post Not Found</div>
  }

  return (
    <div className="post-container">
      <div className="title-container">
        <h1 className="post-title">{post.title}</h1>
        <h3 className="post-author">{`By ${post.author} on ${formatDate(
          post.createdAt
        )}`}</h3>
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}

export default PostView
