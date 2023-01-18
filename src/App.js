import { Header } from "./components";
import Brands from "./containers/Brands";
import Careers from "./containers/Careers";
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
    </>
  );
}

export default App;
