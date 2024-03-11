import styled from 'styled-components'
import aboutImg from '../../assets/aproposimg.png'
import aboutCollapse from '../../components/aboutCollapse'

const Section = styled.div `
display: flex;
flex-direction: column;
align-item
`



const AboutBanner = () => {
  return (
    <Section>
      <aboutImg />
      <aboutCollapse />
    </Section>
  )
}

export default AboutBanner
