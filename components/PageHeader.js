export default function PageHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col lg:space-y-2">
      {title ? (
        <h1 className="font-extrabold text-3xl lg:text-4xl tracking-tight">
          {title}
        </h1>
      ) : null}
      {subtitle ? (
        <p className="my-0 text-xl lg:text-2xl text-gray-700 dark:text-gray-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
