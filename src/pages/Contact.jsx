export default function Contact() {
  return (
    <main className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="rounded-[32px] bg-white p-10 shadow-xl shadow-slate-200/40">
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">Contact Us</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">Let’s talk about your Montessori journey.</h1>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Reach out to learn about training dates, course details, and how we support teachers every step of the way.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-[32px] bg-white p-10 shadow-sm">
            <div className="space-y-6">
              <label className="block text-sm font-medium text-slate-700">
                Full name
                <input
                  type="text"
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Email address
                <input
                  type="email"
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  placeholder="hello@domain.com"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Message
                <textarea
                  rows="5"
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  placeholder="Tell us about your training goals"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-700"
              >
                Send message
              </button>
            </div>
          </form>

          <aside className="space-y-6 rounded-[32px] bg-gradient-to-br from-violet-600 to-emerald-500 p-10 text-white shadow-xl shadow-violet-500/20">
            <div>
              <h2 className="text-2xl font-semibold">Get in touch</h2>
              <p className="mt-4 text-sm leading-7 text-white/90">
                We’re happy to answer questions about enrollment, course structure, and coaching for Montessori teachers.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-white/10 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/80">Email</p>
                <p className="mt-2 font-semibold">hello@montessoricastle.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/80">Phone</p>
                <p className="mt-2 font-semibold">+1 555 0100 2024</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/80">Location</p>
                <p className="mt-2 font-semibold">Online + hybrid classroom options</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
