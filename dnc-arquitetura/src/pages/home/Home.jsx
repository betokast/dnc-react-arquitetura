import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/hero/Hero";
import ProjectsList from "../../components/ProjectList/ProjectsList";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <ProjectsList />
      </div>
      <Footer />
    </>
  )
}

export default Home;