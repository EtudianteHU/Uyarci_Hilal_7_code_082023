import React from 'react'
import styled from 'styled-components'
import Apartment from './../apartment/Apartment'


function ApartmentGrid() {
  return (
    <div className="grid">
      <Apartment />
      <Apartment />
      <Apartment />
      <Apartment />
    </div>
  )
}

export default ApartmentGrid
