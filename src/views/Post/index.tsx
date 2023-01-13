import React from 'react'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../store/post'
import type { Post } from '../../types/Post'

function PostView(): React.ReactElement<{}> {
  const { id } = useParams()
  const [post, setPost] = React.useState<Post>()

  React.useEffect(() => {
    if (id && !Number.isNaN(id)) {
      const post = getPostById(id)

      setPost(post)
    }
  }, [id])

  if (!post) {
    return <div>Post Not Found</div>
  }

  return (<><div>{post.title}</div> <div dangerouslySetInnerHTML={{ __html: post.content }} /></>)
}

export default PostView
