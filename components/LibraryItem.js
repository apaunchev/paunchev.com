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
    <a className="group" href={url} target="_blank" rel="noopener">
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
            <p className="text-2xl text-purple-600 font-semibold group-hover:text-gray-700">
              {title}
            </p>
            <p className="font-semibold">{author}</p>
            {description ? <p className="mt-1">{description}</p> : null}
            {quote ? <p className="mt-1 italic">‘{quote}’</p> : null}
          </div>
        </div>
      </div>
    </a>
  );
}
