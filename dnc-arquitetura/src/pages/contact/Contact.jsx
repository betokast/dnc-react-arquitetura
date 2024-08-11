import Banner from "../../components/banner/Banner";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";

function Contact() {
  return (
    <>
      <Header />
      <Banner title="Contact" image='contact.svg' />
      <div className="container">
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}

export default Contact;