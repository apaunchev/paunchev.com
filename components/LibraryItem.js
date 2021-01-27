import Image from 'next/image';

export default function LibraryItem({
  title,
  author,
  description,
  quote,
  image,
  url,
}) {
  return (
    <a
      className="border-none focus:ring-2 ring-purple-600"
      href={url}
      target="_blank"
      rel="noopener"
    >
      <div className="flex flex-col">
        <div className="flex w-full">
          {image ? (
            <figure className="mr-4">
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={`Image of ${title}`}
              />
            </figure>
          ) : null}
          <div className="flex flex-col flex-1">
            <h2 className="text-xl lg:text-xl font-semibold">{title}</h2>
            <h3 className="text-lg text-gray-600 dark:text-gray-400">
              {author}
            </h3>
            {description ? (
              <p className="mt-1 mb-0 text-base">{description}</p>
            ) : null}
            {quote ? (
              <p className="mt-1 mb-0 italic text-base">‘{quote}’</p>
            ) : null}
          </div>
        </div>
      </div>
    </a>
  );
}
