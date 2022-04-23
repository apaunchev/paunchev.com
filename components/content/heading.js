import clsx from 'clsx';
import Image from 'next/image';

export function Heading({ title, description, image, h1ClassName }) {
  return (
    <div className="flex justify-between gap-4">
      <div>
        <h1 className={clsx('font-semibold', h1ClassName)}>{title}</h1>
        {description ? (
          <p className="mt-1 text-lg text-zinc-500">{description}</p>
        ) : null}
      </div>
      {image ? (
        <div className="flex-none text-[0px]">
          <Image {...image} alt="" />
        </div>
      ) : null}
    </div>
  );
}
