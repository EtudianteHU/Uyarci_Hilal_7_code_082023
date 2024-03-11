import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const WrapperTag = styled.div`
  display: flex;
  gap: 1rem;
`
const SpanTag = styled.div`
  background: ${colors.colorTertiary};
  padding
`
const Tag = () => {
  return (
    <WrapperTag>
      <SpanTag></SpanTag>
    </WrapperTag>
  )
}
