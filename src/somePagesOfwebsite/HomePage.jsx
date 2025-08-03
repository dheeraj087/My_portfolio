import About from "../camponent/About";
import Footer from "../camponent/Footer";
import Main from "../camponent/main";
import My_work from "../camponent/Mywork";
import Serves from "../camponent/Serves";
import ContactForm from "../camponent/contant";
function HomePage() {
  return (
    <>
      <Main />
      <About />
      <Serves />
      <ContactForm />
      <My_work />
      {/* <Footer /> */}
    </>
  );
}
export default HomePage;
