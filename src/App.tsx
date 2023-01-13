import React from 'react'
import './App.css'
import TopMenu from './components/TopMenu'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './routes'

function App(): React.ReactElement<{}> {
  return (
    <div className="App">
      <TopMenu />
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  )
}

export default App
