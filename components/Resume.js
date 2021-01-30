function Header({ children }) {
  return <h2 className="my-4 font-semibold text-lg md:text-xl">{children}</h2>;
}

function Separator() {
  return (
    <hr className="my-6 md:my-8 lg:my-10 border-b-2 border-gray-200 dark:border-gray-800 w-8" />
  );
}

function ResumeList({ children }) {
  return <ol className="list-none space-y-4">{children}</ol>;
}

function ResumeItem({ title, place, url, period }) {
  return (
    <li>
      <div className="lg:text-lg">
        {title}
        <span className="mx-1 text-gray-400 dark:text-gray-600">@</span>
        <a href={url}>{place}</a>
      </div>
      <div className="mt-1 text-sm lg:text-base text-gray-500 dark:text-gray-400">
        {period}
      </div>
    </li>
  );
}

export default function Resume() {
  return (
    <div>
      <p>
        I specialize in front-end development and strive to deliver meaningful
        user experiences on the web and mobile.
      </p>
      <p>
        I navigate complex business domains, helping teams to meet targets and
        bring value to customers. I approach everything with a growth mindset
        and try to inspire and mentor others along the way.
      </p>
      <Separator />
      <Header>Specialties</Header>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:text-lg">
        <ul>
          <li>JavaScript</li>
          <li>React/Next.js</li>
          <li>Build tools</li>
          <li>Unit testing</li>
        </ul>
        <ul>
          <li>HTML</li>
          <li>Sass/CSS-in-JS</li>
          <li>CSS architecture</li>
          <li>Accessibility</li>
        </ul>
        <ul>
          <li>Node.js/Express</li>
          <li>Web services</li>
          <li>Security</li>
          <li>Performance</li>
        </ul>
      </div>
      <Separator />
      <Header>Employment</Header>
      <ResumeList>
        <ResumeItem
          title="Lead Front-end Engineer"
          place="eBag.bg"
          url="https://www.ebag.bg/"
          period="2020–"
        />
        <ResumeItem
          title="Software Developer; Team Lead"
          place="SpotMe"
          url="https://spotme.com/"
          period="2015–2020"
        />
      </ResumeList>
      <Separator />
      <Header>Education</Header>
      <ResumeList>
        <ResumeItem
          title="BSc Computing"
          place="Glasgow Caledonian University"
          url="https://www.gcu.ac.uk/"
          period="2011–2015"
        />
      </ResumeList>
      <Separator />
      <div className="space-y-4">
        <div className="lg:text-lg">
          <span className="mr-2">💻</span>
          <a href="https://github.com/apaunchev">See code on GitHub</a>
        </div>
        <div className="lg:text-lg">
          <span className="mr-2">👋</span>
          <a href="https://www.linkedin.com/in/apaunchev/">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
