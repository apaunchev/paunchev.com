import ArticleLayout from '@/layouts/article';
import { githubLink } from '@/lib/helpers';
import markdownToHtml from '@/lib/markdown';
import { getNoteBySlug, getNotes } from '@/lib/notes';
import { routes } from '@/lib/routes';
import Link from 'next/link';
import { GitHub } from 'react-feather';

export default function Note({ slug, title, description, content }) {
  return (
    <ArticleLayout title={title} description={description}>
      <p>
        <Link href={routes.notes.href}>
          <a>← Notes</a>
        </Link>
      </p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <hr className="hr--transparent" />
      <p className="text-center">
        <a className="button" href={githubLink('notes', slug, 'md')}>
          <GitHub width={18} height={18} />
          Edit on GitHub
        </a>
      </p>
    </ArticleLayout>
  );
}

export async function getStaticProps({ params }) {
  const note = getNoteBySlug(params.slug);
  const content = await markdownToHtml(note?.content);

  return {
    props: {
      ...note,
      content,
    },
  };
}

export async function getStaticPaths() {
  const notes = getNotes();

  return {
    paths: notes.map(note => {
      return {
        params: {
          slug: note.slug,
        },
      };
    }),
    fallback: false,
  };
}
