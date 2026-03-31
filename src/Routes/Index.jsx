import { BrowserRouter, Route, Routes } from "react-router-dom";

//import pages here
import HomePage from "../components/pages/home/HomePage";
import About from "../components/pages/About/index.jsx";
import Contact from "../components/pages/Contact/index.jsx";
import Error from "../components/pages/Error/index.jsx";

//import layouts here
import Nav from "../layouts/Nav/Nav";
import Footer from "../layouts/Footer/Footer.jsx";

export default function Index() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
