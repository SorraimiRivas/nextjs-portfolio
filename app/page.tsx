import About from "@/components/About";
import Hero from "@/components/Hero";
import Divider from "@/components/common/Divider";

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Divider />
      <About />
    </main>
  );
};

export default Home;
