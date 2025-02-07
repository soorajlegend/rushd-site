"use client";
import { Footer } from "@/components/ui/footer";
import { FeatureBox } from "@/components/ui/featurebox";

import "@/components/icons/boxicons.min.css";

import { Bug } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import { Customers_info_form } from "@/components/ui/customers-info-form";
import { BackgroundLines } from "@/components/ui/bg-lines";
import { HoverBorderGradient } from "@/components/ui/hover-btn";
import { SparklesCore } from "@/components/ui/spackles";
import { Quote } from "@/components/ui/quotes";
import PricingSection from "@/components/ui/price";
import Features from "@/components/ui/features";
import Marketing from "@/components/ui/marketing";
import { NavbarMenu } from "@/components/ui/navigation-menu";
export default function MainArabic() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:px-24 sm:px-6 px-6 py-4">
      <NavbarMenu />
      <section id="header">
        <BackgroundLines>
          <div className="h-full flex flex-col justify-center items-center -translate-y-12">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight max-w-2xl">
              The Best Short-Term Rental Management System
            </h2>
            <h3 className=""></h3>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
              Simplifying property and serviced apartment management through an
              integrated platform
            </p>
            <div className="mt-10">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                Get Started
              </HoverBorderGradient>
            </div>
          </div>
        </BackgroundLines>
      </section>

      <section className="flex flex-col gap-5">
        <div className="h-auto w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-5xl text-3xl lg:text-5xl font-bold text-center text-black relative z-20">
            Problems
          </h1>
          <div className="w-[40rem] h-28 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#000"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <FeatureBox
            Icon={Bug}
            title="Complexity"
            description={["Multiple disconnected systems create complexity."]}
            notList
          />
          <FeatureBox
            Icon={Bug}
            title="Tracking Issues"
            description={[
              "Difficult tracking of financial performance and occupancy.",
            ]}
            notList
          />
          <FeatureBox
            Icon={Bug}
            title="High Cost"
            description={["High operational costs due to OTA commission fees."]}
            notList
          />
        </div>
      </section>

      <section className="flex flex-col gap-5 mt-40">
        <div className="h-auto w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-5xl text-3xl lg:text-5xl font-bold text-center text-black relative z-20">
            Solutions
          </h1>
          <div className="w-[40rem] h-28 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#000"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <FeatureBox
            Icon={CircleCheckBig}
            title="Complexity"
            description={["Multiple disconnected systems create complexity."]}
            notList
          />
          <FeatureBox
            Icon={CircleCheckBig}
            title="Tracking Issues"
            description={[
              "Difficult tracking of financial performance and occupancy.",
            ]}
            notList
          />
          <FeatureBox
            Icon={CircleCheckBig}
            title="High Cost"
            description={["High operational costs due to OTA commission fees."]}
            notList
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <FeatureBox
            Icon={CircleCheckBig}
            title="Complexity"
            description={["Multiple disconnected systems create complexity."]}
            notList
          />
          <FeatureBox
            Icon={CircleCheckBig}
            title="Tracking Issues"
            description={[
              "Difficult tracking of financial performance and occupancy.",
            ]}
            notList
          />
        </div>
      </section>
      <section id="features">
        <Features />
      </section>
      <section>
        <Marketing />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="quotes" className="pt-20">
        <Quote text="You can't manage what you can't measure." />
        <Quote text="Systems give us the freedom to focus on what truly matters." />
        <Quote
          text="The intelligent approach to systems is to make them as simple as possible."
          author="Albert Einstein"
          role="Theoretical Physicist"
        />
      </section>

      <div className="flexbox w-full h-[100vh] my-auto devicemockup">
        <div className="pcMockUpCont">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[441px] md:max-w-[768px]">
            <div className="rounded-lg overflow-hidden md:h-[417px] bg-white dark:bg-gray-800">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
                className="block dark:hidden h-[166px] rounded-none md:h-[441px] lg:h-[441px] md:h-[417px] w-full rounded-lg"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
                className="hidden dark:block h-[166px] rounded-none md:h-[441px] lg:h-[441px] md:h-[417px] w-full rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[896px] pcMockup">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
        </div>
      </div>

      <section className="pt-0 pb-12 mb-6 lg:w-7/12" id="tryMvp">
        <h1 className="font-medium text-4xl text-center mb-4 tracking-tight text-gray-900 lg:leading-none dark:text-white lg:text-center lg:mb-12">
          Get <span className="text-primary text-5xl">Rushd</span> Directly as
          soon as it is available.
        </h1>
        <Customers_info_form />
      </section>

      <Footer></Footer>
    </main>
  );
}
