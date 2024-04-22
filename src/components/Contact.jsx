import LinkItem from "./LinkItem";
import LinkList from "./LinkList";

export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-6xl font-bold" id="contact">
        Contact
      </h1>
      <LinkList>
        <LinkItem
          link="https://www.youtube.com/@conceptbtw"
          icon="fa-brands fa-youtube"
        ></LinkItem>
      </LinkList>
    </section>
  );
}
