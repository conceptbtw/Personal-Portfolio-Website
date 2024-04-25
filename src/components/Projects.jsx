import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <section className="w-full p-4 flex flex-col justify-center items-center gap-4 border-b border-text border-opacity-10">
      <h1 className="p-4 text-6xl font-bold" id="projects">
        Projects
      </h1>
      <ProjectList>
        <ProjectItem src="./weather.png" name="📱 Social Media">
          <ul className="flex flex-wrap justify-center items-center gap-4">
            <li className="px-4 py-2 border rounded-full">HTML5</li>
            <li className="px-4 py-2 border rounded-full">CSS3</li>
            <li className="px-4 py-2 border rounded-full">JavaScript</li>
            <li className="px-4 py-2 border rounded-full">React</li>
            <li className="px-4 py-2 border rounded-full">Tailwind CSS</li>
            <li className="px-4 py-2 border rounded-full">Vite</li>
          </ul>
        </ProjectItem>
        <ProjectItem src="./weather.png" name="🛍️ Online Store">
          <ul className="flex flex-wrap justify-center items-center gap-4">
            <li className="px-4 py-2 border rounded-full">HTML5</li>
            <li className="px-4 py-2 border rounded-full">CSS3</li>
            <li className="px-4 py-2 border rounded-full">JavaScript</li>
            <li className="px-4 py-2 border rounded-full">React</li>
            <li className="px-4 py-2 border rounded-full">Tailwind CSS</li>
            <li className="px-4 py-2 border rounded-full">Vite</li>
          </ul>
        </ProjectItem>
        <ProjectItem src="./weather.png" name="⛅ Weather">
          <ul className="flex flex-wrap justify-center items-center gap-4">
            <li className="px-4 py-2 border rounded-full">HTML5</li>
            <li className="px-4 py-2 border rounded-full">CSS3</li>
            <li className="px-4 py-2 border rounded-full">JavaScript</li>
            <li className="px-4 py-2 border rounded-full">React</li>
            <li className="px-4 py-2 border rounded-full">Tailwind CSS</li>
            <li className="px-4 py-2 border rounded-full">Vite</li>
          </ul>
        </ProjectItem>
        <ProjectItem src="./weather.png" name="📝 To-Do List">
          <ul className="flex flex-wrap justify-center items-center gap-4">
            <li className="px-4 py-2 border rounded-full">HTML5</li>
            <li className="px-4 py-2 border rounded-full">CSS3</li>
            <li className="px-4 py-2 border rounded-full">JavaScript</li>
            <li className="px-4 py-2 border rounded-full">React</li>
            <li className="px-4 py-2 border rounded-full">Tailwind CSS</li>
            <li className="px-4 py-2 border rounded-full">Vite</li>
          </ul>
        </ProjectItem>
        <ProjectItem src="./tic-tac-toe.png" name="❌ Tic Tac Toe">
          <ul className="flex flex-wrap justify-center items-center gap-4">
            <li className="px-4 py-2 border rounded-full">HTML5</li>
            <li className="px-4 py-2 border rounded-full">CSS3</li>
            <li className="px-4 py-2 border rounded-full">JavaScript</li>
            <li className="px-4 py-2 border rounded-full">TypeScript</li>
            <li className="px-4 py-2 border rounded-full">React</li>
            <li className="px-4 py-2 border rounded-full">Tailwind CSS</li>
            <li className="px-4 py-2 border rounded-full">Vite</li>
          </ul>
        </ProjectItem>
      </ProjectList>
    </section>
  );
}
