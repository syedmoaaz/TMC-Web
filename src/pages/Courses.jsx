export default function Courses() {
  return (
    <section id="courses" className="bg-slate-50 py-20 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600">Our Courses</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Designed for confident teaching and early childhood success.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Choose the right learning path for your teaching goals — with practical Montessori training, child development support, and flexible online delivery.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">Montessori Basics</div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Montessori Fundamentals</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Build your foundation with child-led learning, practical materials, and classroom preparation.
            </p>
          </div>

          <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700">Early Childhood</div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Early Childhood Foundations</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Understand growth, language, social skills, and the prepared environment for young learners.
            </p>
          </div>

          <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">Classroom</div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Classroom Environment Design</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Learn how to create inspiring, respectful, and child-friendly learning spaces.
            </p>
          </div>

          <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">Parenting</div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Parenting with Montessori</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Discover practical guidance for creating calm routines, independence, and joyful learning at home.
            </p>
          </div>

          <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-700">Support</div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Mentor Coaching</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Get guidance from experienced educators to strengthen your skills and classroom confidence.
            </p>
          </div>

          <div className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="inline-flex rounded-2xl bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">Flexible</div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Flexible Online Delivery</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Learn at your own pace with accessible resources, recordings, and downloadable tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
