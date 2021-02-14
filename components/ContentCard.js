import Image from 'next/image';
import { TagsList } from '@/components/TagsList';

export default function ContentCard({
  title,
  author,
  description,
  quote,
  image,
  url,
  tags,
}) {
  return (
    <a
      href={url}
      className="group border-none focus:ring-2 ring-purple-600 ring-offset-4"
    >
      <article>
        {image ? (
          <figure className="float-right mt-1 mb-1 ml-4 w-20">
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={title}
            />
          </figure>
        ) : null}
        {title ? (
          <h2 className="text-xl font-semibold tracking-tight group-hover:text-purple-600">
            {title}
          </h2>
        ) : null}
        {author ? (
          <h3 className="text-base text-gray-600 dark:text-gray-400">
            {author}
          </h3>
        ) : null}
        {description ? (
          <p className="mt-1 mb-0 text-base">{description}</p>
        ) : null}
        {quote ? <p className="mt-1 mb-0 text-base italic">‘{quote}’</p> : null}
        <TagsList tags={tags} />
      </article>
    </a>
  );
}
