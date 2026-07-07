import { ArrowRight } from "lucide-react";

const Home = () => {
  const highlights = [
    "Hands-on Montessori training",
    "Flexible learning for parents and teachers",
    "Supportive guidance from experienced educators",
  ];

  return (
    <div className="w-full">
      <section id="home" className="relative overflow-hidden bg-gradient-to-r from-[#FFF9EC] via-white to-[#EEF8FF] min-h-[calc(100vh-88px)] py-10 scroll-mt-28">
        <div className="absolute top-40 left-0 h-96 w-96 rounded-full bg-yellow-200/60 blur-[140px]" />
        <div className="absolute bottom-20 right-0 h-[500px] w-[500px] rounded-full bg-sky-200/60 blur-[180px]" />

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(70)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full opacity-70"
              style={{
                width: Math.random() * 8 + 4,
                height: Math.random() * 8 + 4,
                background: ["#FF8A65", "#7E57C2", "#4FC3F7", "#66BB6A", "#FFD54F"][Math.floor(Math.random() * 5)],
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="text-4xl font-black leading-[1.05] md:text-5xl lg:text-[58px] headline-animate">
                <span className="inline-block text-violet-600" style={{ animationDelay: '0.1s' }}>Where teachers</span>
                <br />
                <span className="inline-block text-orange-500" style={{ animationDelay: '0.25s' }}>begin their</span>{" "}
                <span className="inline-block text-green-500" style={{ animationDelay: '0.4s' }}>magic.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-slate-800 font-medium">
                The Montessori Castle is a training academy for aspiring and practising educators. Learn the Montessori method the way it was meant to be — hands-on, joyful, and rooted in the child.
              </p>

              <div className="mt-8 flex flex-wrap gap-5">
                <a
                  href="#courses"
                  className="flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-violet-700"
                >
                  Explore Courses
                  <ArrowRight size={20} />
                </a>

                <a
                  href="#contact"
                  className="rounded-full border-2 border-violet-300 px-6 py-3 font-semibold text-violet-600 transition hover:bg-violet-50"
                >
                  Talk to an Advisor
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-pink-300 via-yellow-200 to-sky-300 blur-[120px] opacity-30" />
              <div className="absolute right-6 top-5 rotate-6 rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                Coming Soon 🚀
              </div>

              <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-[35px] border border-gray-100 bg-white shadow-2xl">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-violet-100 text-5xl">
                    🎓
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-violet-600">Hero Image</h3>
                  <p className="mt-2 text-gray-500">Will be added later</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-600">Why families choose us</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                A calm, practical path into Montessori learning.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our courses are designed to make early childhood education feel approachable, warm, and genuinely useful for modern families and educators.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Home;