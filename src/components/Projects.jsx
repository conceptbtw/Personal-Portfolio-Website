import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section className="w-full p-4 flex flex-col justify-center items-center gap-4 border-b border-text border-opacity-10">
      <h1 className="p-4 text-6xl font-bold" id="projects">
        Projects
      </h1>
      <ProjectList>
        <ProjectItem
          src="./src/assets/images/weather.png"
          name="📱 Social Media"
        ></ProjectItem>
        <ProjectItem
          src="./src/assets/images/weather.png"
          name="🛍️ Online Store"
        ></ProjectItem>
        <ProjectItem
          src="./src/assets/images/weather.png"
          name="⛅ Weather"
        ></ProjectItem>
        <ProjectItem
          src="./src/assets/images/weather.png"
          name="📝 To-Do List"
        ></ProjectItem>
        <ProjectItem
          src="./src/assets/images/tic-tac-toe.png"
          name="❌ Tic Tac Toe"
        ></ProjectItem>
      </ProjectList>
    </section>
  );
}
