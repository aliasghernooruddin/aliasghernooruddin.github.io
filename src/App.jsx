import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Products from "./components/Products";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -left-20 top-0 h-[32rem] w-[32rem] rounded-full bg-sky-soft/70 blur-3xl" />
        <div className="absolute -right-16 top-1/4 h-72 w-72 rounded-full bg-accent-soft/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-violet-soft/40 blur-3xl" />
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
