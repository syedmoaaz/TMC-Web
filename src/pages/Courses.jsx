import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  Clock3,
  BadgeDollarSign,
  Laptop,
  UserCheck,
  Users,
  Baby,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    title: "Assistant Course",
    duration: "1 Month",
    price: "SAR 1,000",
    badge: "Beginner",
    color: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-purple-50",
    icon: GraduationCap,
    points: [
      "Introduction to Montessori",
      "Child Development Basics",
      "Learning Environment",
      "Practical Activities",
    ],
  },

  {
    title: "Orientation Course",
    subtitle: "Early Childhood Montessori",
    duration: "1.5 Months",
    price: "SAR 2,000",
    badge: "Most Popular",
    color: "from-orange-500 to-amber-500",
    bg: "from-orange-50 to-yellow-50",
    featured: true,
    icon: BookOpen,
    points: [
      "Montessori Philosophy",
      "Activity Planning",
      "Child Observation",
      "Prepared Classroom",
    ],
  },

  {
    title: "Teacher Comprehensive",
    subtitle: "Montessori Certification",
    duration: "3 Months",
    price: "SAR 3,000",
    badge: "Professional",
    color: "from-green-500 to-emerald-600",
    bg: "from-green-50 to-emerald-50",
    icon: Award,
    points: [
      "Complete Montessori Training",
      "Teaching Practice",
      "Professional Assessment",
      "Certification Included",
    ],
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-gradient-to-b from-[#F8FBFF] via-white to-[#FFFDF7] py-24 scroll-mt-20"
    >
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-violet-200/30 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Learn. Grow. Get Certified.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore our professionally designed Montessori and Early Childhood
            Education programs. Whether you're beginning your journey or
            becoming a certified Montessori educator, we have the perfect course
            for you.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`relative overflow-hidden rounded-[34px] border border-slate-200 bg-gradient-to-br ${course.bg} p-8 shadow-xl`}
              >
                {course.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}

                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${course.color} text-white shadow-lg`}
                >
                  <Icon size={38} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {course.title}
                </h3>

                {course.subtitle && (
                  <p className="mt-1 text-slate-500">{course.subtitle}</p>
                )}

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Clock3 size={18} />

                    {course.duration}
                  </div>

                  <div className="flex items-center gap-3 text-slate-700">
                    <BadgeDollarSign size={18} />

                    <span className="font-semibold text-2xl">
                      {course.price}
                    </span>
                  </div>
                </div>

                <ul className="mt-8 space-y-3">
                  {course.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

                      {point}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${course.color} py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]`}
                >
                  Enroll Now

                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Flexible Learning */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[36px] bg-white p-10 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-violet-100 p-4">
              <Laptop className="text-violet-600" size={32} />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Flexible Online Learning
              </h3>

              <p className="mt-2 text-slate-600">
                Learn anytime, anywhere with expert guidance.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Short bite-sized lessons",
              "Study at your own pace",
              "Online resources",
              "Trainer support",
              "Professional guidance",
              "Interactive learning",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-50 p-5 font-medium text-slate-700"
              >
                ✅ {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Who Is It For */}

        <div className="mt-24">
          <h3 className="text-center text-4xl font-bold text-slate-900">
            Who Is It For?
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: UserCheck,
                title: "Teachers",
                color: "bg-violet-100 text-violet-600",
              },
              {
                icon: Baby,
                title: "Parents & Caregivers",
                color: "bg-orange-100 text-orange-500",
              },
              {
                icon: Users,
                title: "Aspiring Educators",
                color: "bg-green-100 text-green-600",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  key={item.title}
                  className="rounded-[30px] bg-white p-8 text-center shadow-lg"
                >
                  <div
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${item.color}`}
                  >
                    <Icon size={36} />
                  </div>

                  <h4 className="mt-6 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[40px] bg-gradient-to-r from-violet-600 via-indigo-600 to-orange-500 p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl font-bold">
            Ready to Start Your Montessori Journey?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Limited seats available. Join teachers, parents and aspiring
            educators learning with The Montessori Castle.
          </p>

          <button className="mt-8 rounded-full bg-white px-10 py-4 font-semibold text-violet-700 transition hover:scale-105">
            Register Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}