import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Counter from './components/Counter'
import Stopwatch from './components/Stopwatch'
import Home from './pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
        {/* <Route path='' element={<Counter/>}/> */}
        <Route path='' element={<Stopwatch/>}/>
      </Route>
        <Route path='*' element={<Home/>}/>

    </Routes>
  )
}

export default AppRoutes