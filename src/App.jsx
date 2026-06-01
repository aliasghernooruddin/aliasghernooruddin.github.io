import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Products from "./components/Products";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useScrollProgress } from "./hooks/useScrollSpy";

export default function App() {
  const progress = useScrollProgress();

  return (
    <div className="paper-grain relative min-h-screen overflow-x-hidden bg-surface">
      {/* Reading progress */}
      <div
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      {/* Soft editorial wash */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="drift absolute -left-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent-soft/60 blur-[120px]" />
        <div className="absolute right-[-10rem] top-[30%] h-[26rem] w-[26rem] rounded-full bg-clay-soft/50 blur-[130px]" />
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Products />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
