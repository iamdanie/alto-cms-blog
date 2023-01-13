import { getItem, setItem } from '.'
import { Post } from '../types/Post'

function createPost(post: Post) {
  const posts = getItem('posts')

  setItem('posts', [...posts, post])
}

export { createPost }
