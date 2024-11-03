import { Hero } from "@/components/component/hero";
import { NavBar } from "@/components/component/nav-bar";
import { HalloweenSection } from "@/components/HalloweenSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <HalloweenSection/>
    </div>
  );
}
