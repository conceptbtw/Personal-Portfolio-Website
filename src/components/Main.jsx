import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Main() {
  return (
    <main className="w-full p-4 flex flex-1 flex-col justify-center items-center">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
