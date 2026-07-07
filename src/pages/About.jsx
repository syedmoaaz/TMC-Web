export default function About() {
  const highlights = [
    'Accessible, affordable, and simple learning for everyone.',
    'Practical resources for parents, teachers, and caregivers.',
    'Workshops and courses that support real growth and confidence.',
  ]

  const socials = ['Instagram', 'YouTube', 'TikTok']

  return (
    <section id="about" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_35%),linear-gradient(135deg,_#fefce8_0%,_#f8fafc_45%,_#ecfeff_100%)] px-4 py-16 sm:px-6 lg:px-8 scroll-mt-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="float-slow absolute -left-12 top-0 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="float-slow absolute bottom-0 right-0 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-8">
        <section className="overflow-hidden rounded-[36px] border border-emerald-100/80 bg-white/80 p-8 shadow-[0_25px_80px_-25px_rgba(15,23,42,0.22)] backdrop-blur sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="fade-up">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                About Us
              </span>
              <h1 className="about-heading mt-5 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                🌿 About Us – Our Journey
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Our Facebook page was founded in December 2021 with a heartfelt mission: to make Montessori and Early Childhood education accessible, affordable, and simple for everyone.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                We began by sharing helpful resources, printables, and early childhood guidance. With continuous support from educators, speech therapists, and child therapists, this small page has grown into a vibrant community of parents, teachers, caregivers, and students who appreciate practical and flexible online learning.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Over time, we have also conducted workshops in different schools locally and internationally.
              </p>
            </div>

            <div className="float-slow rounded-[30px] bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 p-8 text-white shadow-xl shadow-emerald-500/20">
              <div className="inline-flex rounded-full bg-white/20 px-3 py-1 text-sm font-semibold tracking-[0.2em] text-emerald-50">
                ✨ Our Promise
              </div>
              <h2 className="mt-6 text-2xl font-semibold leading-snug">
                Professional Montessori and Early Childhood orientation courses that fit your schedule, budget, and pace.
              </h2>
              <p className="mt-4 text-sm leading-7 text-emerald-50/90">
                We empower learners to build strong foundations in teaching, parenting, and child development with warmth, clarity, and purpose.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-emerald-50/90">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="fade-up rounded-[28px] border border-slate-200/70 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Community</p>
            <p className="mt-3 text-base leading-8 text-slate-600">
              Your trust, encouragement, and participation help this community grow and flourish every day. 🌱✨
            </p>
          </div>

          <div className="fade-up rounded-[28px] border border-slate-200/70 bg-slate-900 p-8 text-white shadow-sm" style={{ animationDelay: '0.1s' }}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Learning</p>
            <p className="mt-3 text-base leading-8 text-slate-300">
              We bring together practical resources, thoughtful guidance, and flexible online learning for modern families and educators.
            </p>
          </div>

          <div className="fade-up rounded-[28px] border border-slate-200/70 bg-white p-8 shadow-sm" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">Impact</p>
            <p className="mt-3 text-base leading-8 text-slate-600">
              From local schools to international workshops, our work continues to nurture brighter childhoods with care and intention.
            </p>
          </div>
        </section>

        <section className="rounded-[32px] border border-slate-200/70 bg-slate-900 p-8 text-white shadow-[0_25px_80px_-25px_rgba(15,23,42,0.4)] sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">Connect With Us!</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                We are now active on Instagram, YouTube, and TikTok too!
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Join us across platforms for more learning, resources, and inspiration.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socials.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-white/10 bg-white/10 p-6 sm:p-8">
            <p className="text-lg leading-8 text-slate-100">Let&apos;s work together to create brighter childhoods!</p>
            <p className="mt-5 text-sm text-slate-300">Regards,</p>
            <p className="mt-1 text-xl font-semibold text-white">Ramsha Hammad</p>
            <p className="text-sm text-emerald-200">Founder & Director – The Montessori Castle (TMC)🏰</p>
          </div>
        </section>
      </div>
    </section>
  )
}
