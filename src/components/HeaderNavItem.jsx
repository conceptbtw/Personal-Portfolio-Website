export default function HeaderNavItem({ text, link }) {
  return (
    <li className="">
      <a className="" href={link}>
        {text}
      </a>
    </li>
  );
}
