import Image from 'next/image';
import { classNames } from '@/lib/helpers';

export function PageHeader({
  title,
  subtitle,
  meta,
  image,
  isCentered = false,
}) {
  return (
    <header
      className={classNames(
        'page-header',
        isCentered && 'page-header--centered',
      )}
    >
      {image ? <Image className="page-header__image" {...image} /> : null}
      {title ? <h1 className="page-header__title">{title}</h1> : null}
      {subtitle ? <p className="page-header__subtitle">{subtitle}</p> : null}
      {meta ? <p className="page-header__meta">{meta}</p> : null}
    </header>
  );
}
