export default function AboutPage() {
    return (
      <main className="min-h-screen px-6 py-16 md:px-12 lg:px-32 bg-slate-950 text-slate-50">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About</h1>
          <p className="text-slate-300 mb-10">
            A selection of full-stack and frontend projects I’ve built using Next.js, React,
            TypeScript, Node, and SQL/NoSQL.
          </p>
  
          {/* later: replace with real cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 p-6">
              <h2 className="text-xl font-semibold mb-2">GoldenKey</h2>
              <p className="text-sm text-slate-300 mb-3">
                Property management dashboard built with React, Node, and MySQL.
              </p>
              <p className="text-xs text-slate-400">
                Features: Ag-Grid, memo system, image uploads, MySQL ENUM fields.
              </p>
            </article>
          </div>
        </section>
      </main>
    );
  }
  