import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import ProjectsList from "../../components/ProjectList/ProjectsList";

function Projects() {
  return(
    <>
      <Header />
        <Banner title="Projects" image='projects.svg' />
        <div className="container">
          <ProjectsList />
        </div>
      <Footer />
    </>
  )
}

export default Projects;