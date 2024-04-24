export default function About() {
  return (
    <section className="w-full p-4 flex flex-col justify-center items-center gap-4 border-b border-text border-opacity-10">
      <h1 className="p-4 text-6xl font-bold" id="about">
        About
      </h1>
      <div className="grid grid-cols-2 justify-center items-center">
        <div className="flex justify-center items-center">
          <h2 className="text-6xl text-center">
            Hi there 👋! I'm a Frontend Developer from Lviv, Ukraine
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-96 border rounded-full"
            src="./src/assets/images/photo.jpeg"
            alt="My Photo"
          ></img>
        </div>
      </div>
    </section>
  );
}
