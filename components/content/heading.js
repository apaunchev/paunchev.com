import Image from 'next/image';

export function Heading({ title, description, image, size = 'text-3xl' }) {
  const textContent = (
    <>
      <h1 className={`${size} font-semibold`}>{title}</h1>
      {description ? (
        <p className="mt-1 text-lg text-zinc-500">{description}</p>
      ) : null}
    </>
  );

  return image ? (
    <div className="flex justify-between gap-4">
      <div>{textContent}</div>
      <div className="flex-none">
        <Image {...image} alt="" />
      </div>
    </div>
  ) : (
    <div>{textContent}</div>
  );
}
