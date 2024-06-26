export default function Skills() {
  return (
    <section className="w-full p-4 flex flex-col justify-center items-center gap-4 border-b border-text border-opacity-10">
      <h1 className="p-4 text-6xl font-bold" id="skills">
        Skills
      </h1>
      <div className="grid grid-cols-2">
        <div className="">
          <h2 className="flex justify-center items-center font-bold">
            Frontend
          </h2>
          <ul className="">
            <li className="">HTML5</li>
            <li className="">CSS3</li>
            <li className="">JavaScript</li>
            <li className="">TypeScript</li>
            <li className="">React</li>
            <li className="">Bootstrap</li>
            <li className="">Tailwind CSS</li>
            <li className="">SASS</li>
            <li className="">jQuery</li>
            <li className="">Vite</li>
          </ul>
        </div>
        <div className="">
          <h2 className="flex justify-center items-center font-bold">
            Backend
          </h2>
          <ul className="">
            <li className="">Node.js</li>
            <li className="">SQLite</li>
            <li className="">MySQL</li>
            <li className="">PostgreSQL</li>
            <li className="">MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
