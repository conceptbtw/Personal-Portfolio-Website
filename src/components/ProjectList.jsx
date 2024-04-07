export default function ProjectList({ children }) {
  return (
    <ul className="flex flex-wrap justify-center items center gap-4">
      {children}
    </ul>
  );
}
