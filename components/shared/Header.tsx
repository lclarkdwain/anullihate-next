import styled from '@emotion/styled'
import Navbar from './Navbar'

const StyledHeader = styled.header`
  border-right: 1px solid hsla(0, 0%, 100%, 0.1);
  background: #9fa8a3ce;
  padding: 50px 40px 40px;
  position: fixed;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  min-height: 100vh;
  top: 0;
  width: 290px;
  z-index: 1;
  transform: translateX(0);
  transition: all 0.3s;

  & > h1 {
    margin: 20px 0;
  }

  /* &::before,
  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::after {
    border-right: 10px solid hsla(0, 0%, 100%, 0.2);
    border-top: 10px solid hsla(0, 0%, 0%, 0.2);
    transition: height 0.5s ease-out, width 0.5s ease-out 0.5s;
  } */
`

const Header = () => {
  return (
    <StyledHeader className='flex flex-col items-start'>
      <h1 className='font-bold'>
        <span className='text-gray-50'>Clark Dwain</span> Luna
      </h1>
      <Navbar></Navbar>
      <div className='mt-auto'>
        <span style={{ fontSize: '14px' }}>© 2021 Clark Dwain Luna</span>
      </div>
    </StyledHeader>
  )
}

export default Header
