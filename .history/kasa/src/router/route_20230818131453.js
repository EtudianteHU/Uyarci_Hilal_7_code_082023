import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from ''
function route() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'>
        <Route index element={<Home/>}/>
        </Route>
    </Routes>
     </BrowserRouter>
  )
}

export default route