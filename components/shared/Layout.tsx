import styled from '@emotion/styled'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

const StyledMain = styled.main`
  background-color: #e3e0cf;
  margin-left: 290px;
  transition: all 0.3s;
`

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      <StyledMain>{children}</StyledMain>
    </>
  )
}

export default Layout
