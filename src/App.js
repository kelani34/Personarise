import { Header } from "./components";
import {
  Brands,
  Careers,
  Contact,
  Features,
  Hero,
  Passion,
  Testimonials,
} from "./containers";
import { Footer } from "./components";

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
      <Footer />
    </>
  );
}

export default App;
