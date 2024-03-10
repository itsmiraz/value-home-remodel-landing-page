import Head from "next/head";
import Hero from "./_homepage/hero";
import Service from "./_homepage/service";
import WhychooseUs from "./_homepage/whychooseUs";
import WhoWeServe from "./_homepage/whoWeServe";
import OwnerMessage from "./_homepage/ownerMessage";
import Aboutus from "./_homepage/aboutus";
import CTA from "./_homepage/cta";
import Testimonial from "./_homepage/testimonial";

export default function Home() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Value Home Remodeling - Dream Home Renovation</title>
        <meta
          name="description"
          content="Value Home Remodeling: We transform your dream home into reality. Expert remodeling services for kitchens, bathrooms, basements, and more. Get a free quote today!"
        />
        <meta
          name="keywords"
          content="home remodeling, kitchen remodeling, bathroom remodeling, basement remodeling, interior remodeling, home renovation, contractor, free quote, Value Home Remodeling"
        />
        <meta property="og:site_name" content="Value Home Remodeling" />
        <meta
          property="og:title"
          content="Value Home Remodeling - Dream Home Renovation"
        />
        <meta
          property="og:description"
          content="Value Home Remodeling: Transform your living space. We specialize in kitchen, bathroom, basement, and interior renovations. Get a free quote today!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/djnlyzsmv/image/upload/v1710064334/resdium-assets/value%20home%20remodeling%20website%20assests/Group_184_kpddoz.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Hero />
      <Service />
      <WhychooseUs />
      <WhoWeServe />
      <OwnerMessage />
      <Aboutus />
      <CTA />
      <Testimonial />
    </main>
  );
}
