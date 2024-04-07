import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-6xl font-bold" id="projects">
        Projects
      </h1>
      <ProjectList>
        <ProjectItem
          src="/src/assets/images/weather.png"
          name="📱 Social Media"
        ></ProjectItem>
        <ProjectItem
          src="/src/assets/images/weather.png"
          name="🛍️ Online Store"
        ></ProjectItem>
        <ProjectItem
          src="/src/assets/images/weather.png"
          name="⛅ Weather"
        ></ProjectItem>
        <ProjectItem
          src="/src/assets/images/weather.png"
          name="📝 To-Do List"
        ></ProjectItem>
        <ProjectItem
          src="/src/assets/images/tic-tac-toe.png"
          name="❌ Tic Tac Toe"
        ></ProjectItem>
      </ProjectList>
    </section>
  );
}
