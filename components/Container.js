import css from 'styled-jsx/css';
import Head from 'next/head';
import Header from '@/components/Header';

export default function Container({ children, title, description }) {
  let formattedTitle;

  if (!title || title === 'About') {
    formattedTitle = 'Angel Paunchev';
  } else {
    formattedTitle = `${title} – Angel Paunchev`;
  }

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <div className="container">
        <Header />
        <main>{children}</main>
      </div>
      <style jsx>{localStyles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}

const localStyles = css`
  .container {
    --layout-gap: 2.5rem;

    max-width: calc((var(--layout-gap) * 2) + 72rem);
  }

  @media (min-width: 768px) {
    .container {
      display: flex;
      margin: calc(var(--layout-gap) / 2 * -1);
    }

    main {
      margin: calc(var(--layout-gap) / 2);
      flex-grow: 1;
    }
  }
`;

const globalStyles = css.global`
  :root {
    --gray-0: #111827;
    --gray-1: #374151;
    --gray-2: #4b5563;
    --gray-3: #6b7280;
    --gray-4: #9ca3af;
    --gray-5: #d1d5db;
    --gray-6: #e5e7eb;
    --gray-7: #f3f4f6;
    --purple-0: #7c3aed;
    --purple-1: #ede9fe;

    --color-text-primary: var(--gray-0);
    --color-text-secondary: var(--gray-3);
    --color-links-active: var(--purple-0);
    --color-borders: var(--gray-6);
    --color-page-background: white;
    --color-selection-bg: var(--purple-1);
    --color-selection-text: var(--gray-0);
    --color-input-background: white;

    --rounded-radius: 0.25rem;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-text-primary: var(--gray-7);
      --color-text-secondary: var(--gray-4);
      --color-links-active: var(--purple-0);
      --color-borders: var(--gray-1);
      --color-page-background: var(--gray-0);
      --color-selection-bg: var(--purple-1);
      --color-selection-text: var(--gray-0);
      --color-input-background: var(--gray-1);
    }
  }

  ::selection {
    background-color: var(--color-selection-bg);
    color: var(--color-selection-text);
  }

  body {
    padding: 1.5rem;
    background-color: var(--color-page-background);
    font-size: 1rem;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    line-height: 1.5;
    color: var(--color-text-primary);
  }

  a {
    color: var(--color-text-primary);
    border-bottom: 2px solid var(--color-borders);
    transition: color 0.2s, border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
  }

  a:focus,
  a:hover {
    border-color: var(--color-links-active);
  }

  h1,
  .h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    letter-spacing: -0.025em;
    font-weight: 700;
  }

  h2,
  .h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: -0.025em;
    font-weight: 600;
  }

  h3,
  .h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    letter-spacing: -0.025em;
    font-weight: 600;
  }

  h4,
  .h4 {
    font-size: 1.125rem;
    line-height: 1.75rem;
    letter-spacing: -0.025em;
    font-weight: 500;
  }

  small,
  .small {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  hr {
    width: 2rem;
    margin: 1.5rem 0;
    border: 0;
    border-bottom: 3px solid var(--color-borders);
  }

  b,
  strong {
    font-weight: 600;
  }

  code {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-family: Inconsolata, Monaco, Consolas, 'Andale Mono',
      'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;
    font-style: normal;
    word-break: break-word;
  }

  input {
    padding: 0.25rem 0.5rem;
    background-color: var(--color-input-background);
    border: 1px solid var(--color-borders);
    border-radius: var(---rounded-radius);
    font-size: 1rem;
    color: var(--color-text-primary);
  }

  .rounded {
    border-radius: var(---rounded-radius);
  }

  .meta {
    color: var(--color-text-secondary);
  }

  .h-full {
    height: 100%;
  }

  @media (min-width: 768px) {
    body {
      padding: 3rem;
    }
  }

  @media (min-width: 1024px) {
    body {
      padding: 4rem;
      font-size: 1.125rem;
    }

    h1,
    .h1 {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    h2,
    .h2 {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    h3,
    .h3 {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    h4,
    .h4 {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    small {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    hr {
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
    }
  }
`;
