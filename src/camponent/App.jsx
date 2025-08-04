import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./About.jsx";
import Header from "./Header.jsx";
import HomePage from "../somePagesOfwebsite/HomePage.jsx";
import Serves from "./Serves.jsx";
import ContactForm from "./contant.jsx";
import My_work from "./Mywork.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter basename="/My_portfolio">
        <Header />
        <Routes>
          <Route path="/My_portfolio/" element={<HomePage />} />
          <Route
            path="/My_portfolio/about"
            element={<About Extra={true} textCss={"text-[230px]"} />}
          />
          <Route
            path="/My_portfolio/serves"
            element={<Serves active={{ textCss: "text-[162px] leading-35" }} />}
          />
          <Route path="/My_portfolio/contant" element={<ContactForm />} />
          <Route path="/My_portfolio/mywark" element={<My_work />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
