import { getItem, setItem } from '.'
import { CreatePost, Post } from '../types/Post'

function createPost(post: CreatePost) {
  const posts: Post[] = getItem('posts') || []
  const lastItem = posts[posts.length - 1]
  let id: number = 1

  if (lastItem) {
    id = lastItem.id + 1
  }

  const newPost = {
    ...post,
    id,
    active: true,
    createdAt: new Date().toISOString()
  }

  const created = setItem('posts', [...posts, newPost])

  if (!created) {
    return null
  }

  return newPost
}

export { createPost }
