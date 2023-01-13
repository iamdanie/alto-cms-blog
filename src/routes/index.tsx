import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Home, Contact, About, Blog, Post, CreatePost } from '../views'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/post/:id',
    element: <Post />
  },
  {
    path: '/new',
    element: <CreatePost />
  }
]

export default routes
