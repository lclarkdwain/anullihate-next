import Head from 'next/head'
import SectionAbout from '../components/home/SectionAbout'
import SectionBlog from '../components/home/SectionBlog'
import SectionContact from '../components/home/SectionContact'
import SectionExperiences from '../components/home/SectionExperiences'
import SectionHome from '../components/home/SectionHome'
import SectionServices from '../components/home/SectionServices'
import SectionWorks from '../components/home/SectionWorks'
// import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clark Dwain Luna</title>
      </Head>
      <SectionHome />
      <SectionAbout />
      <SectionServices />
      <SectionExperiences />
      <SectionWorks />
      <SectionBlog />
      <SectionContact />
    </>
  )
}
