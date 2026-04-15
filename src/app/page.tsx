import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Gallery } from "@/components/Gallery";
import { Video } from "@/components/Video";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Certifications />
        <Gallery />
        <Video />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}