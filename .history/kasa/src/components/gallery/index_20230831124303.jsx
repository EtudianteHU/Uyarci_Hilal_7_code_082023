import React from 'react'
import { styled } from 'styled-components'
import { useParams } from 'react-router-dom'
import Carousel from '../carousel'
import GalleryInformation from '../galleryInformation'
import Collapse from '../collapse'
import logements from '../data/logements.json'
import Error from '../../pages/error'
import colors from '../../utils/style/colors'

const Section = styled.div``

const Gallery = () => {
  const { galleryId } = useParams()
  useState(0)
  //trouver le logement avec l'identifiant donné
  const logement = logements.find((logement) => logement.id === galleryId)

  // Si le logement n'existe pas, rediriger vers la page d'erreur
  if (!logement) {
    return <Error />
  }

  return (
    <Section>
      <Carousel />
      <GalleryInformation />
      <Collapse />
    </Section>
  )
}

export default Gallery
