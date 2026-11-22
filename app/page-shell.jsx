export default function PageShell({ title, intro, children }) {
  return (
    <div className="min-h-screen bg-white text-[#1B2140]">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
        <header className="max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-[#C62F45] sm:text-7xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-[#1B2140]/80">
              {intro}
            </p>
          ) : null}
        </header>
        <div className="mt-12">{children}</div>
      </main>
    </div>
  );
}
