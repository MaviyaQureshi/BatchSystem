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
      <div className="flex flex-col">
        <div className="h-[15%] z-10">
          <NavBar />
        </div>
        <div className="h-full z-1">
          <Hero />
        </div>
        <div>
          <Features />
          <Testimonial />
          <FAQ />
          <GetStarted />
          <Footer />
        </div>
      </div>
    </>
  );
}
