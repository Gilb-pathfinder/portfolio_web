import { HomeHero } from "@/components/home/HomeHero";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeExpertise } from "@/components/home/HomeExpertise";
import { HomeProjects } from "@/components/home/HomeProjects";
import { HomeExperience } from "@/components/home/HomeExperience";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeCTA } from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeExpertise />
      <HomeProjects />
      <HomeExperience />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
}
