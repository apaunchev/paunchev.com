import Head from 'next/head';
import Header from '@/components/Header';

export default function Container({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} – ` : null}Angel Paunchev</title>
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <style global jsx>{`
        :root {
          --gray-0: #111827;
          --gray-1: #1f2937; // not used
          --gray-2: #374151;
          --gray-3: #4b5563;
          --gray-4: #6b7280;
          --gray-5: #9ca3af;
          --gray-6: #d1d5db;
          --gray-7: #e5e7eb;
          --gray-8: #f3f4f6;
          --purple-0: #7c3aed;
          --purple-1: #ede9fe;

          --color-text-primary: var(--gray-0);
          --color-text-secondary: var(--gray-4);
          --color-links-active: var(--purple-0);
          --color-borders: var(--gray-7);
          --color-page-background: white;
          --color-selection-bg: var(--purple-1);
          --color-selection-text: var(--gray-0);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --color-text-primary: var(--gray-8);
            --color-text-secondary: var(--gray-5);
            --color-links-active: var(--purple-0);
            --color-borders: var(--gray-2);
            --color-page-background: var(--gray-0);
            --color-selection-bg: var(--purple-1);
            --color-selection-text: var(--gray-0);
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
          font-family: ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
            Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,
            Segoe UI Symbol, Noto Color Emoji;
          line-height: 1.5;
          color: var(--color-text-primary);
        }

        article {
          max-width: 32rem;
        }

        a {
          color: var(--color-text-primary);
          border-bottom: 2px solid var(--color-borders);
          transition: color, border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
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
          font-weight: 800;
        }

        h2,
        .h2 {
          font-size: 1.25rem;
          line-height: 1.75rem;
          letter-spacing: -0.025em;
          font-weight: 600;
        }

        h3,
        .h3 {
          margin-bottom: 0rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
          letter-spacing: -0.025em;
          font-weight: 600;
        }

        hr {
          width: 2rem;
          margin: 1.5rem 0;
          border: 0;
          border-bottom: 3px solid var(--color-borders);
        }

        ul,
        ol {
          padding-left: 1.25rem;
        }

        small {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }

        b {
          font-weight: 600;
        }

        .rounded {
          border-radius: 100%;
        }

        .meta {
          color: var(--color-text-secondary);
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

          article {
            max-width: 36rem;
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

          hr {
            margin-top: 2.5rem;
            margin-bottom: 2.5rem;
          }

          small {
            font-size: 1rem;
            line-height: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
