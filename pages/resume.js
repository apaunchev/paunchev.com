import Head from 'next/head';

export default function Resume() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Resume – Angel Paunchev</title>
      </Head>
      <main>
        <div>
          <section>
            <h1>Angel Paunchev</h1>
            <div>
              <a href="mailto:apaunchev@gmail.com">apaunchev@gmail.com</a>
              <a href="tel:+359886966059">+359886966059</a>
              <a href="https://paunchev.space">paunchev.space</a>
            </div>
            <p>
              I have been building websites for over 10 years; I specialize in
              front-end web development. I aim for simple yet effective
              solutions that bring joy to both the user and the developer. I
              have also been in charge of development teams and, working closely
              with product and project management, have successfully delivered
              web and mobile solutions to customers around the world.
            </p>
          </section>
          <section>
            <h2>Employment</h2>
            <ol>
              <li>
                <h3>
                  eBag{' '}
                  <small>
                    (<a href="https://ebag.bg">ebag.bg</a>)
                  </small>
                </h3>
                <ol>
                  <h4>Lead Front-end Engineer</h4>
                  <p>June 2020 – present</p>
                </ol>
              </li>
              <li>
                <h3>
                  SpotMe{' '}
                  <small>
                    (<a href="https://spotme.com">spotme.com</a>)
                  </small>
                </h3>
                <ol>
                  <h4>Team Lead, Packages</h4>
                  <p>Nov 2018 – Apr 2020</p>
                  <p>
                    Lead a development team responsible for an ecosystem of 100+
                    software packages built on top of a web/mobile platform.
                    Collaborate with product managers, designers and architects
                    on delivering features and platform improvements. Plan and
                    execute releases; manage team dependencies and resolve
                    post-release defects. Facilitate scrum meetings, coach team
                    members and perform code reviews.
                  </p>
                  <h4>Customization Manager</h4>
                  <p>Jun 2016 – Oct 2018</p>
                  <p>
                    Lead a development team and collaborate with project
                    management to deliver customized features for clients and
                    internal teams. Drive implementation – from initial design,
                    to development, to delivery, to long-term maintenance. Coach
                    team members and perform code reviews.
                  </p>
                  <h4>Customization Developer</h4>
                  <p>Aug 2015 – May 2016</p>
                  <p>
                    Develop customized features for clients and internal teams
                    using AngularJS, Node.js, CouchDB. Support internal teams in
                    delivering the perfect experience.
                  </p>
                </ol>
              </li>
            </ol>
          </section>
          <section>
            <h2>Education</h2>
            <ol>
              <li>
                <h3>
                  Glasgow Caledonian University{' '}
                  <small>
                    (<a href="https://www.gcu.ac.uk">gcu.ac.uk</a>)
                  </small>
                </h3>
                <p>
                  Bachelor’s degree, Computing (Web Systems Development), First
                  Class Honours
                </p>
                <p>2011 – 2015</p>
              </li>
            </ol>
          </section>
          <section>
            <h2>Certifications</h2>
            <ol>
              <li>
                <h3>Cambridge English: Advanced</h3>
                <p>Cambridge English Language Assessment</p>
                <p>2009</p>
              </li>
            </ol>
          </section>
        </div>
      </main>
    </>
  );
}
