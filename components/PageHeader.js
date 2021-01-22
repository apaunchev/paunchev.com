export default function PageHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col space-y-2 mb-8 max-w-prose">
      <h1 className="font-extrabold text-4xl tracking-tight">{title}</h1>
      {subtitle && <p className="text-2xl text-gray-700">{subtitle}</p>}
    </div>
  );
}
