import { ProjectsFolder } from "@/components/Home/Projects/ProjectsFolder";
import { Layout } from "@/components/Layout/Layout";
import React from "react";

export default function Index() {
  return (
    <>
      <Layout>
        <ProjectsFolder />
      </Layout>
    </>
  );
}
