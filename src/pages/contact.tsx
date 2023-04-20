import ContactPage from "@/components/ContactPage.tsx";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout className=" py-[4.5rem] w-full  ">
        <ContactPage />
      </Layout>
    </>
  );
}
