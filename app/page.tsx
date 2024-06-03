import NavBar from "./Navbar/page";
import Hero from "./Hero/page";
import Features from "./Features/page";
import Testimonial from "./Testimonial/page";
import FAQ from "./FAQ/page";
import GetStarted from "./GetStarted/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Testimonial />
      <FAQ />
      <GetStarted />
      <Footer />
    </>
  );
}
