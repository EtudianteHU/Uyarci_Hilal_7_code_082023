import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const WrapperTag = styled.div`
  display: flex;
  gap:1
`

const Tag = () => {
  return (
    <WrapperTag>
      <SpanTag></SpanTag>
    </WrapperTag>
  )
}