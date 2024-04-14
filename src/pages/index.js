import Head from "next/head";
import { Inter } from "next/font/google";
import HomeHero from "@/component/HomeHero";
import Services from "@/component/Services";
import Testimonial from "@/component/Testimonial";
import Contact from "@/component/Contact";
import Faq from "@/component/Faq";
import About from "@/component/About";
import Stats from "@/component/Stats";
import WhatsApp from "@/component/WhatsApp";
import Resource from "@/component/Resource";
import Videos from "@/component/Videos";
import Feature from "@/component/Feature";
import Achivement from "@/component/Achivement";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>RootCom Academy</title>
        <meta
          name="description"
          content="Best Coaching  class for Accountancy, Economics and Business Studies for class 11 and 12th student"
        />
        <meta
          name="keyword"
          content="Noida-based coaching, Economics coaching, Accountancy coaching, Business studies coaching, Experienced teachers, Expertise in economics, accountancy, and business studies, Comprehensive curriculum, Personalized teaching approach, Exam preparation, Practical application of concepts, Interactive learning sessions, Result-oriented coaching, Individual attention, Skill development, Career guidance, Online/offline classes, Flexible timings, Mock tests and assessments,
Student success stories, Affordable fees"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <WhatsApp />
      <main>
        {/* <Personalige /> */}
        <HomeHero />
        <Feature />
        <About />
        <Achivement />
        <Services />
        <Stats />
        <Resource />
        <Faq />
        <Testimonial />
        <Videos />
        <Contact />
      </main>
    </>
  );
}
