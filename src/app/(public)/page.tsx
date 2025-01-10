import Contact from "@/components/contact";
import FeaturedRepos from "@/components/featured-repos";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Skills from "@/components/skills";
import Story from "@/components/story";

export default function Home() {
  return (
    <>
      <Header />
      <Skills />
      <Story />
      <FeaturedRepos />
      <Contact />
      <Footer />
    </>
  );
}
