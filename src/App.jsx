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
    <div className="min-h-screen overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-accent-dim/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
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
