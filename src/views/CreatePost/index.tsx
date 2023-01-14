import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../store/post'
import type { CreatePost as CreatePostType, Post } from '../../types/Post'
import './index.css'

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
    <div className="form-container">
      <h1>Create Blog Entry</h1>
      <div className="form-entry">
        <label className="label" htmlFor="title">
          Title
        </label>
        <input
          className="text-input"
          id="title"
          name="title"
          type="text"
          placeholder="Add a title for your new blog entry"
          value={title ?? ''}
          onChange={({ target: { value } }) => setTitle(value)}
          maxLength={100}
        />
      </div>
      <div className="form-entry">
        <label className="label" htmlFor="author">
          Author
        </label>
        <input
          className="text-input"
          id="author"
          name="author"
          type="text"
          placeholder="Who is writing this post?"
          value={author ?? ''}
          onChange={({ target: { value } }) => setAuthor(value)}
        />
      </div>
      <div className="content-entry">
        <label className="label" htmlFor="content">
          Content
        </label>
        <textarea
          className="text-area"
          placeholder="Add your HTML markup here"
          rows={30}
          cols={30}
          id="content"
          name="content"
          value={content ?? ''}
          onChange={({ target: { value } }) => setContent(value)}
        />
      </div>
      <button
        id="create-post-btn"
        name="create-post-btn"
        type="button"
        onClick={handleCreate}
        disabled={!title || !author || !content}
      >
        Create
      </button>
    </div>
  )
}

export default CreatePost
