import Head from "next/head";
import React, { useRef } from "react";
import { Layout } from "@/components/Layout/Layout";
import { HeroSection } from "@/components/Home/HeroSection";
import { ProjectsSection } from "@/components/Home/ProjectsSection";
import { ContactUsSection } from "@/components/Home/ContactUsSection";
import { ShadowSection } from "@/components/Home/ShadowSection";

export default function Home() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    const element = formRef.current;
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = 1000;
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressPercentage = Math.min(progress / duration, 1);

        const ease =
          progressPercentage < 0.5
            ? 2 * progressPercentage * progressPercentage
            : 1 - Math.pow(-2 * progressPercentage + 2, 2) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };

  console.log("4d616e616e");
  return (
    <>
      <Head>
        <title>Snowchild Studio - Creative Collective</title>
        <meta
          name="description"
          content="Snowchild Studio Creative Collective builds innovative digital platforms and custom web solutions for media, technology, and enterprise clients. Transform your ideas into powerful digital experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/studiologo.png" />
      </Head>

      <Layout scrollToForm={scrollToForm}>
        <HeroSection scrollToForm={scrollToForm} />
        <ProjectsSection />
        <div ref={formRef}>
          <ContactUsSection />
        </div>
        <ShadowSection />
      </Layout>
    </>
  );
}
