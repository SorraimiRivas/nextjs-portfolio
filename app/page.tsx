import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Divider from "@/components/common/Divider";

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
    </main>
  );
};

export default Home;
