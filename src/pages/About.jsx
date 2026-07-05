export default function About() {
  return (
    <main className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="rounded-[32px] bg-white p-10 shadow-xl shadow-slate-200/40">
          <p className="text-sm uppercase tracking-[0.24em] text-violet-600">About Us</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">Our mission is to prepare confident Montessori teachers.</h1>
          <p className="mt-6 text-base leading-8 text-slate-600">
            The Montessori Castle brings together experienced educators, AMI-inspired curriculum, and a joyful community of learners. We believe every child deserves a prepared environment supported by confident, compassionate teachers.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Our story</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Since our founding, we have guided hundreds of educators through Montessori philosophy, classroom design, and child observation. Our programs are built around meaningful practice and real classroom readiness.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                Montessori curriculum aligned with global standards.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                Practical, hands-on classroom experience.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                Supportive mentor guidance throughout training.
              </li>
            </ul>
          </div>
          <div className="rounded-[32px] bg-violet-600 p-10 text-white shadow-xl shadow-violet-500/20">
            <h2 className="text-2xl font-semibold">Our values</h2>
            <p className="mt-4 text-sm leading-7 text-violet-100/90">
              Child-centered planning, respect for individual development, and joyful learning are at the heart of everything we do.
            </p>
            <div className="mt-8 space-y-5 text-sm">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="font-semibold text-white">Hands-on exploration</p>
                <p className="mt-2 text-violet-100/80">Every teacher learns by doing and by guiding children with confidence.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="font-semibold text-white">Holistic development</p>
                <p className="mt-2 text-violet-100/80">We honor social, emotional, cognitive, and practical growth together.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="font-semibold text-white">Community care</p>
                <p className="mt-2 text-violet-100/80">Our training community supports teachers beyond the classroom.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
