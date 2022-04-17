import Image from 'next/image';

export function CardGrid({ children, title, items, component = Card }) {
  const Component = component;
  const titleId = title?.toLowerCase();

  return (
    <div className="flex flex-col gap-3">
      {title ? (
        <h2 className="text-2xl font-medium" id={titleId}>
          <a href={`#${titleId}`}>{title}</a>
        </h2>
      ) : null}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items && items.length > 0
          ? items.map((item, idx) => (
              <Component key={item.id || idx} {...item} />
            ))
          : children}
      </div>
    </div>
  );
}

export function Card({ url, image, title, description, meta }) {
  return (
    <a
      href={url}
      className="flex flex-col gap-2 bg-white shadow rounded-md p-4 transition-shadow hover:shadow-md"
    >
      {image && image.src ? (
        <figure className="text-[0px]">
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={title}
          />
        </figure>
      ) : null}
      {title ? (
        <p className="text-lg font-semibold leading-snug">{title}</p>
      ) : null}
      {description ? <div>{description}</div> : null}
      {meta ? (
        <div className="flex items-center gap-4 text-sm text-zinc-500">
          {meta}
        </div>
      ) : null}
    </a>
  );
}
