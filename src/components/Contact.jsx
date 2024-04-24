import LinkItem from "./LinkItem";
import LinkList from "./LinkList";

export default function Contact() {
  return (
    <section className="w-full p-4 flex flex-col justify-center items-center gap-4 border-b border-text border-opacity-10">
      <h1 className="p-4 text-6xl font-bold" id="contact">
        Contact
      </h1>
      <LinkList>
        <LinkItem
          link="https://www.youtube.com/@conceptbtw"
          icon="fa-brands fa-youtube"
        ></LinkItem>
        <LinkItem
          link="https://www.twitch.tv/conceptbytheway"
          icon="fa-brands fa-twitch"
        ></LinkItem>
        <LinkItem
          link="https://www.tiktok.com/@conceptbtw"
          icon="fa-brands fa-tiktok"
        ></LinkItem>
        <LinkItem
          link="https://www.facebook.com/conceptbtw"
          icon="fa-brands fa-facebook"
        ></LinkItem>
        <LinkItem
          link="https://www.instagram.com/conceptbytheway/"
          icon="fa-brands fa-instagram"
        ></LinkItem>
        <LinkItem
          link="https://www.threads.net/@conceptbytheway"
          icon="fa-brands fa-threads"
        ></LinkItem>
        <LinkItem
          link="https://twitter.com/conceptbtw"
          icon="fa-brands fa-x-twitter"
        ></LinkItem>
        <LinkItem
          link="https://www.linkedin.com/in/illiamovchko/"
          icon="fa-brands fa-linkedin"
        ></LinkItem>
        <LinkItem
          link="https://github.com/conceptbtw"
          icon="fa-brands fa-github"
        ></LinkItem>
      </LinkList>
    </section>
  );
}
