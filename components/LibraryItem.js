import Image from 'next/image';

export default function LibraryItem({
  type,
  title,
  author,
  description,
  image,
  url,
}) {
  return (
    <a
      className="focus:ring-2 focus:ring-purple-600 ring-offset-2 outline-none rounded transition"
      href={url}
      target="_blank"
      rel="noopener"
    >
      <div className="flex flex-col items-start">
        <small className="inline-block mb-2 py-1 px-2 rounded bg-gray-800 font-bold text-gray-200 text-xs uppercase tracking-tight">
          {type}
        </small>
        <div className="flex items-start">
          {image ? (
            <figure>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={`Image of ${title}`}
              />
            </figure>
          ) : null}
          <div className="flex flex-col">
            <p className="text-2xl text-purple-600 font-semibold">{title}</p>
            <p className="font-semibold">{author}</p>
            {description ? (
              <p className="mt-1 italic">‘{description}’</p>
            ) : null}
          </div>
        </div>
      </div>
    </a>
  );
}
