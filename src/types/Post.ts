export type Post = {
  id: number
  title: string
  author: string
  content: string
  createdAt: string
  active: boolean
}

export type CreatePost = {
  title: string
  author: string
  content: string
}
