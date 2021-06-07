import Link from 'next/link'
import styled from '@emotion/styled'

const NavUl = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 130px;
  margin-top: 80px;

  & > li {
    display: flex;
    padding: 8px 0;
    position: relative;
    list-style: none;
    transition: all 0.2s;
  }

  & > li > a {
    background: transparent;
    border: 0;
    outline: 0;
    font-family: 'Baloo Tammudu 2', cursive;
    font-size: 18px;
    font-weight: 700;
    width: 100%;
    text-decoration: none;
    position: relative;
    padding: 0;

    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform, color;
    transition-property: transform, color;

    :before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 3px;
      background: #c5d5cb;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transform-origin: -20% 50%;
      transform-origin: -20% 50%;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
  }

  & > li > a:hover,
  a:focus,
  a:active {
    color: #c5d5cb;
    /* color: #f9fafb; */
    cursor: pointer;
    /* rotate grow */
    /* -webkit-transform: scale(1.1) rotate(4deg);
    transform: scale(1.1) rotate(4deg); */
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    :before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      background-color: black;
    }
  }
`

const Navbar = () => {
  return (
    <nav>
      <NavUl>
        <li>
          <i className='fas fa-home mr-5'></i>
          <Link href='#home'>Home</Link>
        </li>
        <li>
          <i className='fas fa-user mr-5'></i>
          <Link href='#about'>About</Link>
        </li>
        <li>
          <i className='fas fa-briefcase mr-5'></i>
          <Link href='#services'>Services</Link>
        </li>
        <li>
          <i className='fas fa-graduation-cap mr-5'></i>
          <Link href='#experiences'>Experience</Link>
        </li>
        <li>
          <i className='fas fa-layer-group mr-5'></i>
          <Link href='#works'>Works</Link>
        </li>
        <li>
          <i className='fas fa-edit mr-5'></i>
          <Link href='#blog'>Blog</Link>
        </li>
        <li>
          <i className='fas fa-comments mr-5'></i>
          <Link href='#contact'>Contact</Link>
        </li>
      </NavUl>
    </nav>
  )
}

export default Navbar
