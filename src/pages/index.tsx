import { Collaboration } from "@/sections/collaboration";
import { Features } from "@/sections/features";
import { Hero } from "@/sections/hero";
import { MoreFeatures } from "@/sections/more-features";
import { NoLockin } from "@/sections/no-lockin";
import { SamePage } from "@/sections/same-page";
import { StreamlinedExperience } from "@/sections/streamlined-experience";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leadswift</title>
        <meta
          name="description"
          content="crm"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Hero />
        <div className="relative z-10 w-full overflow-x-clip">

          <Features />
          <MoreFeatures />
          <NoLockin />
        </div>
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-[radial-gradient(circle_farthest-side_at_calc(300px)_calc(300px),_var(--color-secondary)_0%,_transparent_100%)] md:hidden">
          {/* This is a very ugly way of adding such a message, don't build it like this :) */}
          <p className="px-10 text-center text-xl text-white">
            Werkt niet op mobiele apparaten
            <br />
            
          </p>
        </div>
      </main>
    </>
  );
}
