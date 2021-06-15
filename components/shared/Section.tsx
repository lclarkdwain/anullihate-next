import styled from '@emotion/styled'

type Props = {
  id: string
  children: React.ReactNode
  [x: string]: any
}

const StyledSection = styled.section`
  padding-top: 110px;
  position: relative;
`

const Section = ({ id, children, ...rest }: Props) => {
  return (
    <StyledSection id={id} {...rest}>
      {children}
    </StyledSection>
  )
}

export default Section
