export default function WhyTMC() {
  return (
    <section id="why" className="bg-white px-4 py-16 sm:px-6 lg:px-8 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[32px] bg-slate-50 p-10 shadow-lg shadow-slate-200/40">
          <p className="text-sm uppercase tracking-[0.24em] text-rose-500">Why TMC</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-5xl">Practical Montessori training for every aspiring educator.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
            We combine AMI-inspired methodology with real classroom practice, smaller cohorts, and continuing mentorship so graduates feel ready to teach and lead with clarity.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Authentic curriculum</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Training aligned with Montessori principles, materials, and observation-based learning.
            </p>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Career-ready skills</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Lesson planning, classroom environment design, and confident presentation skills for teachers.
            </p>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Ongoing mentorship</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Graduates continue to receive coaching and network support after the course ends.
            </p>
          </div>
        </div>

        <section className="mt-16 rounded-[32px] bg-violet-600 p-10 text-white shadow-xl shadow-violet-500/20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">What sets The Montessori Castle apart</h2>
              <p className="mt-4 text-sm leading-7 text-violet-100/90">
                We keep our class sizes intimate, provide materials-based learning, and place real emphasis on the teacher's role as guide and observer.
              </p>
            </div>
            <div className="space-y-4 text-sm leading-7 text-violet-100/90">
              <p>• Personalized feedback for every trainee.</p>
              <p>• Small-group workshops with Montessori materials.</p>
              <p>• Practice in mixed-age settings and child observation.</p>
              <p>• Community events, classroom walkthroughs, and case studies.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
