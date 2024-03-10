import Head from "next/head";
import Hero from "./_homepage/hero";
import Service from "./_homepage/service";
import WhychooseUs from "./_homepage/whychooseUs";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Value Home Remodeling</title>
      </Head>
      <Hero />
      <Service />
      <WhychooseUs />
    </main>
  );
}
