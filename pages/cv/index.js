import Head from "next/head";

export default () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CV – Angel Paunchev</title>
      <meta name="description" content="The CV of Angel Paunchev" />
    </Head>
    <main>
      <div className="Page">
        <section>
          <h1 className="mb-0">Angel Paunchev</h1>
          <div className="flex-row">
            <a href="mailto:apaunchev@gmail.com">apaunchev@gmail.com</a>
            <a href="tel:+359886966059">+359886966059</a>
            <a href="https://paunchev.space">paunchev.space</a>
          </div>
          <p>
            I have been building websites for over 10 years; I specialize in
            front-end web development. I aim for simple yet effective solutions
            that bring joy to both the user and the developer. I have also been
            in charge of development teams and, working closely with product and
            project management, have succesfully delivered web and mobile
            solutions to customers around the world.
          </p>
        </section>
        <section>
          <h2 className="mt-20">Employment</h2>
          <ol className="list-unstyled">
            <li>
              <h3 className="mb-0">
                eBag{" "}
                <small>
                  (<a href="https://ebag.bg">ebag.bg</a>)
                </small>
              </h3>
              <ol className="list-unstyled">
                <h4 className="mt-5 mb-0">Lead Front-End Developer</h4>
                <p className="my-0 text-meta">June 2020 – present</p>
              </ol>
            </li>
            <li>
              <h3 className="mb-0">
                SpotMe{" "}
                <small>
                  (<a href="https://spotme.com">spotme.com</a>)
                </small>
              </h3>
              <ol className="list-unstyled">
                <h4 className="mt-5 mb-0">Team Lead, Packages</h4>
                <p className="my-0 text-meta">Nov 2018 – Apr 2020</p>
                <ul className="mt-5">
                  <li>
                    Lead a software engineering team responsible for developing
                    and supporting 100+ software packages built on top of a
                    JavaScript/iOS/Android platform
                  </li>
                  <li>
                    Collaborate with product managers, designers and architects
                    to translate stories into effective technical solutions
                  </li>
                  <li>
                    Plan and execute software releases; manage team dependencies
                    and resolve post-release defects
                  </li>
                  <li>
                    Implement features and bug fixes; perform code reviews,
                    coach team members
                  </li>
                  <li>
                    Implement Scrum from scratch; facilitate standups,
                    plannings, demos and retrospectives; complete 12+ sprints
                    with stable velocity rates
                  </li>
                </ul>
                <h4 className="mb-0">Customization Manager</h4>
                <p className="my-0 text-meta">Jun 2016 – Oct 2018</p>
                <ul className="mt-5">
                  <li>
                    Lead a software development team within the professional
                    services department
                  </li>
                  <li>
                    Collaborate with project implementation managers to
                    translate complex customer requirements into effective
                    technical solutions
                  </li>
                  <li>
                    Drive the implementation of internal software components and
                    features, from initial design to long-term maintenance
                  </li>
                  <li>
                    Implement features and bug fixes; perform code reviews,
                    coach team members
                  </li>
                </ul>
                <h4 className="mb-0">Customization Developer</h4>
                <p className="my-0 text-meta">Aug 2015 – May 2016</p>
                <ul className="mt-5">
                  <li>
                    Develop customized software components using AngularJS,
                    Node.js, CouchDB
                  </li>
                  <li>
                    Liaise between services and engineering teams to resolve
                    technical issues on production systems
                  </li>
                  <li>
                    Implement fixes and improvements based on recurring support
                    cases
                  </li>
                </ul>
              </ol>
            </li>
          </ol>
        </section>
        <section>
          <h2 className="mt-20">Education</h2>
          <ol className="list-unstyled">
            <li>
              <h3 className="mb-0">
                Glasgow Caledonian University{" "}
                <small>
                  (<a href="https://www.gcu.ac.uk">gcu.ac.uk</a>)
                </small>
              </h3>
              <p className="my-0">
                Bachelor’s degree, Computing (Web Systems Development), First
                Class Honours
              </p>
              <p className="my-0 text-meta">2011 – 2015</p>
            </li>
          </ol>
        </section>
        <section>
          <h2 className="mt-20">Certifications</h2>
          <ol className="list-unstyled">
            <li>
              <h3 className="mb-0">Cambridge English: Advanced</h3>
              <p className="my-0">Cambridge English Language Assessment</p>
              <p className="my-0 text-meta">2009</p>
            </li>
          </ol>
        </section>
      </div>
    </main>
  </>
);
