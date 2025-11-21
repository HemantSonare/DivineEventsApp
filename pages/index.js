import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Divine Events — Luxury Weddings & Celebrations</title>
        <meta
          name="description"
          content="Divine Events — ultra-luxury event design & planning for weddings, socials, and destination experiences."
        />
      </Head>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
