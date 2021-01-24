import Image from 'next/image';

export default function LibraryItem({
  type,
  title,
  author,
  description,
  quote,
  image,
  url,
}) {
  return (
    <a className="group" href={url} target="_blank" rel="noopener">
      <div className="flex flex-col items-start">
        <small className="inline-block mb-2 py-1 px-2 rounded bg-gray-800 font-bold text-gray-200 text-xs uppercase tracking-tight">
          {type}
        </small>
        <div className="flex w-full">
          <div className="flex flex-col flex-1">
            <p className="text-2xl text-purple-600 font-semibold group-hover:text-gray-700">
              {title}
            </p>
            <p className="font-semibold">{author}</p>
            {description ? <p className="mt-1">{description}</p> : null}
            {quote ? <p className="mt-1 italic">‘{quote}’</p> : null}
          </div>
          {image ? (
            <figure className="ml-4">
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={`Image of ${title}`}
              />
            </figure>
          ) : null}
        </div>
      </div>
    </a>
  );
}
