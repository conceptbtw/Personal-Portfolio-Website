export default function ProjectItem({ src, name, children }) {
  return (
    <li className="max-w-xl flex flex-col justify-center items-center border rounded-xl overflow-hidden">
      <div className="">
        <img className="" src={src} alt="Project Image"></img>
      </div>
      <div className="p-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <div className="">{children}</div>
      </div>
    </li>
  );
}
