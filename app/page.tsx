import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Manifest from "./components/Manifest";
import Philosophy from "./components/Philosophy";
import SignatureLooks from "./components/SignatureLooks";
import Services from "./components/Services";
import Ritual from "./components/Ritual";
import Studio from "./components/Studio";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Manifest />
      <Philosophy />
      <SignatureLooks />
      <Services />
      <Ritual />
      <Studio />
      <Footer />
    </main>
  );
}
