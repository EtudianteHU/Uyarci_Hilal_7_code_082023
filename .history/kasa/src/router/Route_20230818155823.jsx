import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home'


function route() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
              <Route index element={<Home />} />

              <Route path='/home' element={<Home />} />
             
        </Route>
    </Routes>
     </BrowserRouter>
  )
}