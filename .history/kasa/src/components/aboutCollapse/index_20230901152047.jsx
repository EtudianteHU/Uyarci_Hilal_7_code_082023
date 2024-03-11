import React from 'react'
import colors from '../../utils/style/colors'

const CollapseWrapper = styled.div`
background-color:{color.primary}
color:${colors.colorTertiary}
`

const CollapseHeader = styled.div`
background-color:{color.primary}
color:${colors.colorTertiary}
padding-block:1rem
`
const CollapseHeader = styled.div`
background-color:{color.primary}
color:${colors.colorTertiary}
padding-block:1rem
`
const AboutCollapse = () => {
  return (
    <CollapseWrapper>
      <CollapseHeader>
        <CollapseContent></CollapseContent>
      </CollapseHeader>
    </CollapseWrapper>
  )
}

export default AboutCollapse