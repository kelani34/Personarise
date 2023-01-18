import { Header } from "./components";
import Brands from "./containers/Brands";
import Careers from "./containers/Careers";
import Contact from "./containers/Contact";
import Features from "./containers/Features";
import Hero from "./containers/Hero";
import Passion from "./containers/Passion";
import Testimonials from "./containers/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Passion />
      <Features />
      <Careers />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
