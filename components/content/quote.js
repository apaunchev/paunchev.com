export function Quote({ text }) {
  return (
    <blockquote className="pl-3 border-l-2 border-violet-700 italic">
      <p>{text}</p>
    </blockquote>
  );
}
