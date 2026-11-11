import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        
        {/* Navbar */}
        <nav className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Theme<span className="text-blue-600">Switch</span>
            </h1>
          </div>

          <ThemeToggle />
        </nav>

        {/* Hero */}
        <section className="flex min-h-[80vh] items-center justify-center">
          <div className="max-w-2xl text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
              ✨ React Custom Hook Project
            </div>

            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
              One click.
              <br />
              <span className="text-blue-600">Two themes.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              A clean and responsive theme switcher built with React,
              Tailwind CSS, and a reusable custom hook.
            </p>

            <div className="mt-10 flex justify-center">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />

                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Theme System
                  </span>
                </div>

                <p className="text-xl font-semibold">
                  Custom Hook + Tailwind
                </p>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Your preference is automatically saved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500">
          Built with React & Tailwind CSS
        </footer>
      </div>
    </main>
  );
}

export default App;