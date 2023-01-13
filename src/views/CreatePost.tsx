import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../store/post'
import type { CreatePost as CreatePostType, Post } from '../types/Post'

function CreatePost(): React.ReactElement<{}> {
  const navigate = useNavigate()
  const [title, setTitle] = React.useState<string>('')
  const [author, setAuthor] = React.useState<string>('')
  const [content, setContent] = React.useState<string>('')

  const handleCreate = () => {
    const post: CreatePostType = {
      title,
      author,
      content
    }

    const created: Post | null = createPost(post)

    if (created) {
      const { id } = created

      navigate(`/post/${id}`)
    }
  }

  // ToDo: Styles and Escape HTML from content
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" value={title ?? ''} onChange={({ target: { value } }) => setTitle(value)} />
      <label htmlFor="author">Author</label>
      <input id="author" name="author" type="text" value={author ?? ''} onChange={({ target: { value } }) => setAuthor(value)} />
      <label htmlFor="content">Content</label>
      <input id="content" name="content" type="textarea" width={90} height={90} value={content ?? ''} onChange={({ target: { value } }) => setContent(value)} />
      <button id='create-post-btn' name='create-post-btn' type='button' onClick={handleCreate}>Create</button>
    </div>
  )
}

export default CreatePost
