import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";

function About() {
  return (
    <>
      <Header />
      <Banner title="About" image='about.svg' />
      <p>Subtitle about</p>
      <Footer />
    </>
  )
}

export default About;