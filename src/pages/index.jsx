import Head from "next/head";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { HeroSection } from "@/components/Home/HeroSection";
import { ProjectsSection } from "@/components/Home/ProjectsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Snowchild Studio</title>
        <meta name="description" content="Snowchild Studios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroSection />
        <ProjectsSection />
      </Layout>
    </>
  );
}
