import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/hero/Hero";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
      </div>
      <Footer />
    </>
  )
}

export default Home;