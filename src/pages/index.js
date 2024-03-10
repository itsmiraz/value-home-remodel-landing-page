import Head from "next/head";
import Hero from "./_homepage/hero";
import Service from "./_homepage/service";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Value Home Remodeling</title>
      </Head>
      <Hero />
      <Service />
    </main>
  );
}
