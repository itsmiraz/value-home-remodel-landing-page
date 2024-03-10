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
        <title>Value Home Remodeling</title>
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
