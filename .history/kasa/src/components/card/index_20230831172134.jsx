import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logements from '../data/logements.json'
import colors from '../../utils/style/colors'


const ImageCardWrapper =styled.div `
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 50px;
padding-top: 25px;
background: ${colors.backgroundLight};
border-radius:

`

const CardLogement = ({ logement }) => {
    return (
        <Link to={`/gallery/${logement.id}` style={{ textDecoration: 'none' }}}>
        
    )
}