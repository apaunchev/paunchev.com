import { ExternalLink } from "../components/external-link";

export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl">
        Hello, I’m Angel—a software engineer from Bulgaria who turns ambitious
        ideas into reality.
      </h1>
      <p>
        I’ve been deeply invested in computers and technology since I was in
        school. What used to be just a hobby turned into my field of study, then
        into my career.
      </p>
      <p>
        At present, I work as a front-end engineer and try to build easy-to-use
        and resilient interfaces for the web. My tools of the trade include
        modern JavaScript and CSS. I like to actively participate in the full
        product lifecycle—from early concept, through technical design, to
        delivering and maintaining the finished product. I’m also responsible
        for growing and mentoring a team of engineers. See{" "}
        <a href="https://www.linkedin.com/in/apaunchev/">LinkedIn</a> for more.
      </p>
      <h2>Projects</h2>
      <div className="flex flex-col gap-4">
        <ExternalLink
          href="https://github.com/apaunchev/playground"
          title="Playground"
          description="A browser playground for HTML, CSS and JavaScript. Designed for quick
          prototyping and experimenting with React components."
        />
        <ExternalLink
          href="https://github.com/apaunchev/salaree"
          title="Salaree"
          description="A salary analysis tool for software engineers working in Bulgaria."
        />
      </div>
    </>
  );
}
