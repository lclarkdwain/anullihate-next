/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'
import { simple } from '../../lib/particles-params'
import Section from '../shared/Section'

const SectionHomeContainer = styled.div``

const StyledSectionHome = styled(Section)`
  display: flex;
  align-items: center;
  /* background-color: #e3e0cf; */
  padding: 0;
  height: 100vh;
  min-height: 100vh;
`

const StyledParticlesContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  /* margin-left: 290px; */

  & #tsparticles {
    width: 100%;
    height: 100%;

    & canvas {
      position: absolute;
    }
  }
`

const Introduction = ({ ...rest }: { className?: string }) => (
  <div
    {...rest}
    css={css`
      margin: auto;
      max-width: 540px;
      text-align: center;
      position: relative;
      z-index: 1;

      & > img {
        height: 150px;
        width: 150px;

        cursor: pointer;
        position: relative;
        padding: 10px 20px;
        background: rgba(0, 0, 0, 0.2);
        border-top-right-radius: 20;
        border-bottom-left-radius: 10px;
        transition: all 1s;
        :hover {
          border-top-right-radius: 0px;
          border-bottom-left-radius: 0px;
          background: rgba(0, 0, 0, 0.8);
        }
      }

      & ul > li > a {
        font-size: 21px;
        color: black;
      }
    `}
  >
    <img
      src='https://pbs.twimg.com/profile_images/1060194417888288774/cN_EsyEX_400x400.jpg'
      // src='https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.6435-9/87463578_2761562183920294_8295622993128718336_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_eui2=AeGPN4lw5N2gQC9ywYxN6oyLKjGbgco1tW8qMZuByjW1b2-m8N8CWvV9EQMV4PFv-ApGaH8RGb8_PrIGwTIOg7ga&_nc_ohc=ic03T0NiUk4AX8xTIAj&tn=S08jm6VVhSc9aymx&_nc_ht=scontent.fcrk1-1.fna&oh=06d81f37d8add4234836f3d50a3db1f9&oe=60E29133'
      alt='me'
      className={'rounded-full border-black mb-4 object-cover object-center'}
    />
    <h1 className={'font-bold mb-2'}>Clark Dwain Luna | Software Developer</h1>
    <div className={'flex'}>
      <Typewriter
        options={{ autoStart: true, loop: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString("I'm a <strong>Developer</strong>")
            .pauseFor(2500)
            .deleteChars(9)
            .typeString('<strong>Designer</strong>')
            .pauseFor(1000)
            .deleteAll()
            .typeString('and a <strong>Technology Enthusiast</strong>')
            .pauseFor(2500)
            .start()
        }}
      />
    </div>
    <p>
      Hi Everyone, welcome to my interactive resume, I'm a
      <strong> Software Developer</strong> and I mostly developed
      <strong> Web </strong>
      applications but also worked with <strong>Desktop</strong> and
      <strong> Mobile</strong> platforms, I hope you'll enjoy learning more
      about me.
    </p>
    <ul className='p-0 list-none mt-2'>
      <li className='inline-block mr-6'>
        <a href='https://www.linkedin.com/in/anullihate/' target='_blank'>
          <i className='fab fa-linkedin'></i>
        </a>
      </li>
      <li className='inline-block mr-6'>
        <a href='https://github.com/anullihate' target='_blank'>
          <i className='fab fa-github'></i>
        </a>
      </li>
      <li className='inline-block mr-6'>
        <a
          href='https://stackoverflow.com/users/9620985/anullihate'
          target='_blank'
        >
          <i className='fab fa-stack-overflow'></i>
        </a>
      </li>
      <li className='inline-block mr-6'>
        <a href='https://www.instagram.com/iamluark/' target='_blank'>
          <i className='fab fa-instagram'></i>
        </a>
      </li>
      <li className='inline-block'>
        <a href='https://twitter.com/lclarkdwain' target='_blank'>
          <i className='fab fa-twitter'></i>
        </a>
      </li>
    </ul>
    <div className='mt-4'>
      <a
        href='https://drive.google.com/uc?id=1pAylXPeVRnX-_ZUKqjIo9Rs7R7HiIFKP&export=download'
        className='transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-opacity-0 hover:bg-gray-900 text-black hover:text-white font-bold py-2 px-4 mr-1 rounded'
      >
        Download CV
      </a>
    </div>
  </div>
)

const ScrollDown = () => <div className='icon-scroll'></div>

const SectionHome = () => {
  if (process.browser) {
    require('pathseg')
  }
  return (
    <SectionHomeContainer>
      <StyledSectionHome id='home'>
        <Introduction className='flex flex-col items-center' />
        <ScrollDown />
        <StyledParticlesContainer>
          <Particles params={simple} />
        </StyledParticlesContainer>
      </StyledSectionHome>
    </SectionHomeContainer>
  )
}

export default SectionHome
