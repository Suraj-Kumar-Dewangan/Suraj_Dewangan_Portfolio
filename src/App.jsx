import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";
import HireMe from "./components/HireMe";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
        </div>
        <About />
        <Experience />
        <ErrorBoundary>
          <Tech />
        </ErrorBoundary>
        <Works />
        <div className="relative z-0">
          <ErrorBoundary>
            <Contact />
          </ErrorBoundary>
          {/* <StarsCanvas /> */}
        </div>
        <HireMe />
      </div>
    </BrowserRouter>
  );
};

export default App;
