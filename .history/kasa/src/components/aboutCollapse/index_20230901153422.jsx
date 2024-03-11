import React from 'react'
import colors from '../../utils/style/colors'
import { styled } from 'styled-components'
import aproposData from '../data/aproposData'
const CollapseWrapper = styled.div`
  margin-block: 0;
`

const CollapseHeader = styled.div`
background-color:{color.primary}
color:${colors.colorTertiary}
padding-block:0.7rem;
border-radius:0.7rem;

`
const CollapseContent = styled.div`
background-color:{color.backgroundDark}
color:${colors.primary}

`
const AboutCollapse = () => {
  return (
    <CollapseWrapper>
      {logements.map((logement) => (
        <CardContainer key={logement.id}>
          <CardLogement logement={logement} />
        </CardContainer>
      ))}
      <CollapseHeader>
        <CollapseContent></CollapseContent>
      </CollapseHeader>
    </CollapseWrapper>
  )
}

export default AboutCollapse