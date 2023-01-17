import { Header } from "./components";
import Brands from "./containers/Brands";
import Features from "./containers/Features";
import Hero from "./containers/Hero";
import Passion from "./containers/Passion";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Passion />
      <Features />
    </>
  );
}

export default App;
