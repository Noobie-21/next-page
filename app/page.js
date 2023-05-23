import About from "@/components/AboutSection/About";
import Banner from "@/components/BannerSection/Banner";
import Navbar from "@/components/Navbar/Navbar";
import SocialSection from "@/components/Social_page/SocialSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      {/* <h1 className="text-3xl">Hello There</h1> */}
      <Banner />
      <About />
      <SocialSection />
    </main>
  );
}
