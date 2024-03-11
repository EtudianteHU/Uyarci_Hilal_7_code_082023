import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/banner'
import colors from '../../utils/style/colors'
import Gallery from '../../components/gallery'
import GalleryInformation from '../../components/galleryInformation'

const Body = styled.div`
  background-color: ${colors.colorTertiary};
  padding: 0 6rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

function Home() {
  return (
    <Body>
      <Banner />
      <Gallery />
      <GalleryInformation />
    </Body>
  )
}

export default Home
