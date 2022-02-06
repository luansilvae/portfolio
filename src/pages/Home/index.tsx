import React, { useEffect } from "react";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";
import Projects from "../../components/Projects";
import Aos from "aos";

import "aos/dist/aos.css";

import {
  Container
} from "./styles";

const Home: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <Intro />
      <About />
      <Projects />
      <Footer />
    </Container>
  );
};

export default Home;
