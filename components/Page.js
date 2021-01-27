export function Page({ children }) {
  return (
    <div className="max-w-lg lg:max-w-xl space-y-5 md:space-y-6 lg:space-y-7">
      {children}
    </div>
  );
}

export function PageWide({ children }) {
  return (
    <div className="max-w-7xl space-y-5 md:space-y-6 lg:space-y-7">
      {children}
    </div>
  );
}
