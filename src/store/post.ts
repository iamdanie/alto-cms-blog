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

function getPostById(id: string) {
  const posts: Post[] = getItem('posts') || []
  const found = posts.find(post => post.id === Number(id))

  return found
}

function getPosts() {
  return getItem('posts') || []
}

function getPostsSummary(amount: number = 0) {
  const posts: Post[] = getItem('posts') || []

  posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  if (amount === 0) {
    return posts
  }

  return posts.slice(0, amount)
}

export { createPost, getPosts, getPostsSummary, getPostById }
