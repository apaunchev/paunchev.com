import clsx from 'clsx';
import { GitHub, Linkedin, Mail } from 'react-feather';

export function Intro() {
  return (
    <section>
      <p>
        <span className="block text-3xl font-semibold">Hey, I’m Angel—</span>
        <span className="block mt-2 text-lg">
          a software engineer from Sofia, Bulgaria. With knowledge across the
          stack and experience in cross-functional collaboration, I help teams
          provide robust solutions to real customer problems.
        </span>
      </p>
      <p className="mt-4 text-lg">
        Specialties: JavaScript, CSS, front-end architecture, performance, user
        experience, accessibility.
      </p>
      <p className="mt-6 flex flex-wrap gap-4">
        <SocialLink className="bg-[#333]" href="https://github.com/apaunchev">
          <GitHub height={16} /> GitHub
        </SocialLink>
        <SocialLink
          className="bg-[#0e76a8]"
          href="https://www.linkedin.com/in/apaunchev/"
        >
          <Linkedin height={16} /> LinkedIn
        </SocialLink>
        <SocialLink className="bg-violet-700" href="mailto:apaunchev@gmail.com">
          <Mail height={16} /> Email
        </SocialLink>
      </p>
    </section>
  );
}

function SocialLink({ children, className, href }) {
  return (
    <a
      className={clsx(
        className,
        'flex items-center gap-1 py-2 px-2.5 no-underline rounded-md text-white transition hover:opacity-90',
      )}
      href={href}
    >
      {children}
    </a>
  );
}
