import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import NavLayout from './pages/NavLayout'
import HomePage from './pages/HomePage'
import GameDetail from './pages/GameDetail'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/:id" element={<GameDetail/>}/>
      </Route>
    )
  )

export default router