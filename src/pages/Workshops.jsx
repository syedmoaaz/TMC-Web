import { motion } from "framer-motion";
import {
  CalendarDays,
  GraduationCap,
  Users,
  Sparkles,
  BookOpen,
  ArrowRight,
  Clock3,
  Globe2,
  BadgeCheck,
  Palette,
} from "lucide-react";

const workshops = [
  {
    title: "Montessori Classroom Setup",
    date: "15 July 2026",
    duration: "2 Days",
    mode: "Live Online",
    badge: "Popular",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Creative Learning Activities",
    date: "30 July 2026",
    duration: "1 Day",
    mode: "Interactive",
    badge: "New",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Child Observation Workshop",
    date: "18 August 2026",
    duration: "2 Days",
    mode: "Live Online",
    badge: "Featured",
    color: "from-green-500 to-emerald-500",
  },
];

const categories = [
  {
    title: "Montessori",
    icon: GraduationCap,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Creative Arts",
    icon: Palette,
    color: "bg-orange-100 text-orange-500",
  },
  {
    title: "Child Development",
    icon: Users,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Teaching Skills",
    icon: BookOpen,
    color: "bg-green-100 text-green-600",
  },
];

export default function Workshops() {
  return (
    <section
      id="workshops"
      className="relative overflow-hidden scroll-mt-24 py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7E8] via-white to-[#EEF8FF]" />

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-yellow-200/40 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-sky-200/30 blur-3xl" />

      <div className="absolute left-1/2 top-48 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-lg">

              <Sparkles className="text-orange-500" size={18} />

              <span className="font-semibold text-slate-700">
                Interactive Montessori Workshops
              </span>

            </div>

            <h2 className="mt-8 text-5xl font-black leading-tight">

              <span className="text-violet-600">
                Learn.
              </span>

              <br />

              <span className="text-orange-500">
                Practice.
              </span>

              <br />

              <span className="text-green-500">
                Inspire.
              </span>

            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

              Join our engaging Montessori workshops designed
              for teachers, assistants, parents and caregivers.
              Learn through practical demonstrations, live
              activities and interactive discussions.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#upcoming"
                className="flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
              >
                Upcoming Workshops

                <ArrowRight size={20} />

              </a>

              <a
                href="#contact"
                className="rounded-full border-2 border-violet-300 px-8 py-4 font-semibold text-violet-600 transition hover:bg-violet-50"
              >
                Reserve Your Seat
              </a>

            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .9 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="rounded-[36px] bg-white p-8 shadow-[0_30px_80px_rgba(0,0,0,.12)]"
            >
              <div className="inline-flex rounded-full bg-violet-100 px-4 py-2 font-semibold text-violet-700">

                Featured Workshop

              </div>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">

                Montessori Classroom Setup

              </h3>

              <div className="mt-8 space-y-4">

                <div className="flex items-center justify-between rounded-2xl bg-orange-50 p-4">

                  <span className="flex items-center gap-2">

                    <CalendarDays size={18} />

                    Date

                  </span>

                  <strong>

                    15 July

                  </strong>

                </div>

                <div className="flex items-center justify-between rounded-2xl bg-sky-50 p-4">

                  <span className="flex items-center gap-2">

                    <Clock3 size={18} />

                    Duration

                  </span>

                  <strong>

                    2 Days

                  </strong>

                </div>

                <div className="flex items-center justify-between rounded-2xl bg-green-50 p-4">

                  <span className="flex items-center gap-2">

                    <Globe2 size={18} />

                    Mode

                  </span>

                  <strong>

                    Live Online

                  </strong>

                </div>

                <div className="flex items-center justify-between rounded-2xl bg-violet-50 p-4">

                  <span className="flex items-center gap-2">

                    <BadgeCheck size={18} />

                    Certificate

                  </span>

                  <strong>

                    Included

                  </strong>

                </div>

              </div>

            </motion.div>
          </motion.div>
        </div>

        {/* Categories */}

        <div className="mt-24">

          <motion.h3
            initial={{ opacity:0,y:40 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            className="text-center text-4xl font-bold text-slate-900"
          >
            Explore Workshop Categories
          </motion.h3>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((item,index)=>{

              const Icon=item.icon;

              return(

                <motion.div
                  key={index}
                  whileHover={{
                    y:-8,
                    scale:1.04,
                    rotate:-2
                  }}
                  className="rounded-[30px] bg-white p-8 shadow-xl"
                >

                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}>

                    <Icon size={30}/>

                  </div>

                  <h4 className="mt-6 text-xl font-bold">

                    {item.title}

                  </h4>

                  <p className="mt-3 leading-7 text-slate-600">

                    Interactive workshops designed
                    around real classroom experience.

                  </p>

                </motion.div>

              )

            })}

          </div>

        </div>
                {/* Upcoming Workshops */}

        <div id="upcoming" className="mt-28">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <p className="font-semibold tracking-[0.25em] uppercase text-violet-600">
              Upcoming Workshops
            </p>

            <h3 className="mt-4 text-4xl font-bold text-slate-900">
              Learn with our live interactive sessions
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Every workshop combines practical activities, discussion,
              demonstrations and live interaction to help you confidently
              implement Montessori principles.
            </p>

          </motion.div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">

            {workshops.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .15 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group overflow-hidden rounded-[34px] bg-white shadow-xl"
              >

                <div
                  className={`h-3 bg-gradient-to-r ${item.color}`}
                ></div>

                <div className="p-8">

                  <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">

                    {item.badge}

                  </span>

                  <h4 className="mt-6 text-2xl font-bold text-slate-900">

                    {item.title}

                  </h4>

                  <div className="mt-8 space-y-4">

                    <div className="flex items-center justify-between">

                      <span className="text-slate-500">

                        Date

                      </span>

                      <strong>

                        {item.date}

                      </strong>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-slate-500">

                        Duration

                      </span>

                      <strong>

                        {item.duration}

                      </strong>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-slate-500">

                        Mode

                      </span>

                      <strong>

                        {item.mode}

                      </strong>

                    </div>

                  </div>

                  <button className="mt-10 w-full rounded-full bg-slate-900 py-4 font-semibold text-white transition group-hover:bg-violet-600">

                    Register Now

                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>





        {/* Why Attend */}

        <div className="mt-28 rounded-[40px] bg-gradient-to-r from-violet-600 via-blue-600 to-green-500 p-12 text-white">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold"
              >

                Why Attend Our Workshops?

              </motion.h3>

              <p className="mt-6 text-lg leading-8 text-white/90">

                Learn directly from experienced Montessori educators through
                practical demonstrations, interactive activities and real
                classroom discussions.

              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {[
                "Live Q&A Sessions",
                "Hands-on Activities",
                "Certificate Included",
                "Interactive Learning",
              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    rotate: -1,
                  }}
                  className="rounded-3xl bg-white/10 p-6 backdrop-blur"
                >

                  <div className="text-4xl">

                    ✨

                  </div>

                  <h4 className="mt-4 text-lg font-semibold">

                    {item}

                  </h4>

                </motion.div>

              ))}

            </div>

          </div>

        </div>





        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >

          <h2 className="text-5xl font-bold text-slate-900">

            Ready to Join Our Next Workshop?

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            Reserve your seat today and become part of a growing
            community of Montessori educators.

          </p>

          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: .95,
            }}
            className="mt-10 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 px-10 py-5 text-lg font-semibold text-white shadow-2xl"
          >

            Reserve Your Seat

          </motion.button>

        </motion.div>

      </div>

    </section>

  );
}