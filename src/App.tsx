import React from 'react'
import { Route, RouteObject, Routes } from 'react-router-dom'
import './App.css'
import TopMenu from './components/TopMenu'
import router from './routes'

function App(): React.ReactElement<{}> {
  return (
    <div className="App">
      <TopMenu />
      <Routes>
        {router.map(({ path, element }: RouteObject) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  )
}

export default App
