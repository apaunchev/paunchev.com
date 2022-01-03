import Image from 'next/image';
import { classNames } from '@/lib/helpers';

export function PageHeader({
  title,
  description,
  meta,
  image,
  isCentered = false,
}) {
  const textContent = (
    <>
      {title ? <h1 className="page-header__title">{title}</h1> : null}
      {description ? (
        <p className="page-header__description">{description}</p>
      ) : null}
      {meta ? <p className="page-header__meta">{meta}</p> : null}
    </>
  );

  return (
    <header
      className={classNames(
        'page-header',
        image && 'page-header--with-image',
        isCentered && 'page-header--centered',
      )}
    >
      {image ? (
        <>
          <div>{textContent}</div>
          <div>
            <Image className="page-header__image" {...image} />
          </div>
        </>
      ) : (
        textContent
      )}
    </header>
  );
}
