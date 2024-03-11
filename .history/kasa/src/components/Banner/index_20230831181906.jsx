import React from 'react'
import styled from 'styled-components'

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justifyc-content: center;
`

const BannerImage = styled.img`
  background-position: center;
  background-size: cover;
  padding-inline: 0.2rem;
  height: 220px;
  margin: auto;
  border-radius: 2rem;
  display: grid;
  place-items: center;
  color: white;
  margin-bottom: 2rem;
  width: 100%;
  &:before {
    position: absolute;
    content: '';
    opacity: 0.5;
    border-radius: 2rem;
  }
`

const BannerText = styled.h1`
font-weight:
font-size:

`

function Banner() {
  return (
    <BannerWrapper>
      <BannerImage alt="Image de la bannière">
        <BannerText>Chez vous, partout et ailleurs</BannerText>
      </BannerImage>
    </BannerWrapper>
  )
}

export default Banner
