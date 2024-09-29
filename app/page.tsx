import Image from "next/image";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Testimonials />

      <Brands />
      <Footer />
      
    </main>
  );
}
