import AboutText from "../../components/AboutText/AboutText";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";

function About() {
  return (
    <>
      <Header />
      <Banner title="About" image='about.svg' />
      <div className="container">
        <AboutText />
      </div>
      <Footer />
    </>
  )
}

export default About;