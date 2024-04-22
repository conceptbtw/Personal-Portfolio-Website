export default function LinkItem({ link, icon }) {
  return (
    <li className="">
      <a className="" href={link} target="_blank">
        <i className={icon}></i>
      </a>
    </li>
  );
}
