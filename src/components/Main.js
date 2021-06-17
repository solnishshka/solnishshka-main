import Lead from './Lead'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Portfolio from './Portfolio'
import styled from 'styled-components'
import LeftColumn from './LeftColumn/LeftColumn'
import LeftColumnTitle from './LeftColumn/LeftColumnTitle'
import ContactForm from './ContactForm'
import Certificates from './Certificates';
import DownloadButton from './Button'
import avatar from '../images/avatar.jpg'
import React, { useContext } from 'react'
import { TranslationContext } from '../contexts/translationContext'

const MainElement = styled.main`
  margin-top: 85px;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: repeat(6, auto);

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(12, auto);
  }
`
const Avatar = styled.img`
  margin-top: 200px;
  border-radius: 50%;
  width: 100%;
  max-width: 300px;

  @media screen and (min-width: 1280px) {
    max-width: 250px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    max-width: 230px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 180px;
    margin-top: 150px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    margin-top: 80px;
    max-width: 180px;
  }
`

export default function Main(props) {
  const translation = useContext(TranslationContext)

  return (
    <MainElement>
      <LeftColumn isLead={true} color="light">
        <Avatar src={avatar} />
        <DownloadButton type="lead" />
      </LeftColumn>
      <Lead />
      <LeftColumn type="about" color="dark">
        <LeftColumnTitle>{translation.menu.about}</LeftColumnTitle>
      </LeftColumn>
      <About />
      <LeftColumn type="skills" color="light">
        <LeftColumnTitle>{translation.menu.skills}</LeftColumnTitle>
      </LeftColumn>
      <Skills />
      <LeftColumn type="experience" color="dark">
        <LeftColumnTitle>{translation.menu.experience}</LeftColumnTitle>
      </LeftColumn>
      <Experience />
      <LeftColumn type="education" color="light">
        <LeftColumnTitle>{translation.menu.education}</LeftColumnTitle>
      </LeftColumn>
      <Education />
      <LeftColumn type="portfolio" color="dark">
        <LeftColumnTitle>{translation.menu.portfolio}</LeftColumnTitle>
      </LeftColumn>
      <Portfolio />
      <LeftColumn type="certificates" color="light">
        <LeftColumnTitle>{translation.menu.certificates}</LeftColumnTitle>
      </LeftColumn>
      <Certificates/>
      <LeftColumn type="contact" color="dark">
        <LeftColumnTitle>{translation.menu.contacts}</LeftColumnTitle>
      </LeftColumn>
      <ContactForm />
    </MainElement>
  )
}
