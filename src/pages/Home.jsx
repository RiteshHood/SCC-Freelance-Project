import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Features from "../components/Features/Features.jsx";
import Footer from "../components/Footer/Footer.jsx";
import About from "../components/About/About.jsx";
import Statistics from "../components/Statistics/Statistics.jsx";
import Courses from "../components/Courses/Courses.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About/>
      <Statistics/>
      <Footer />
    </>
  );
}