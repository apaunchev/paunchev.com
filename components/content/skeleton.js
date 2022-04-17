import clsx from 'clsx';

export function Skeleton({ className, ...props }) {
  return (
    <span
      className={clsx(
        className,
        'inline-block h-[1em] w-20 rounded-[0.2em] bg-zinc-200 align-middle animate-pulse',
      )}
      {...props}
    />
  );
}
