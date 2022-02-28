import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa'

import { Container, Img, AboutSection, ButtonCV } from './styles';

const About: React.FC = () => {
  return (
    <Container id="about">
      <Img data-aos="fade-up"  src="https://avatars.githubusercontent.com/u/86011816?v=4" alt="Luan Silva" />
      <AboutSection data-aos="fade-up">
        <h2>Sobre mim</h2>
        <p>Meu nome é Luan, sou Técnico em Informática e estudo Análise e Desenvolvimento de Sistemas pela FATEC de Praia Grande. Sou apaixonado por desenvolvimento web, com enfoque em JavaScript e todas as stacks e tecnologias em torno do ecossistema dessa linguagem.</p>

        <ButtonCV href="https://1drv.ms/w/s!Am0QuB1H_SAth7giAyYTmL8vxw94Sw?e=SMaT1U" target="_blank"> <FaCloudDownloadAlt /> Download CV</ButtonCV>
      </AboutSection>
    </Container>
  )
}

export default About;