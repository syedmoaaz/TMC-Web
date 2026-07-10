import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Award,
  Clock3,
  BadgeDollarSign,
  Download,
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

      <div className="relative mx-auto max-w-6xl px-5 lg:px-6">
        {/* Heading */}





<motion.h2 className="text-4xl md:text-5xl font-bold flex flex-wrap justify-center gap-3">
  {[
    { text: "Learn.", color: "text-violet-600" },
    { text: "Grow.", color: "text-[#0B55B7]" },
    { text: "Get", color: "text-green-600" },
    { text: "Certified.", color: "text-green-600" },
  ].map((word, index) => (
    <motion.span
      key={word.text}
      initial={{
        opacity: 0,
        y: -70,
        rotate: -10,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.18,
        type: "spring",
        stiffness: 170,
        damping: 12,
      }}
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      className={`${word.color} inline-block`}
    >
      {word.text}
    </motion.span>
  ))}
</motion.h2>

<CoursesTypeWriter />


        {/* Cards */}

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                className={`relative overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br ${course.bg} p-5 shadow-xl`}
              >
                {course.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r ${course.color} text-white shadow-lg`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-lg font-bold leading-6 text-slate-900">
                  {course.title}
                </h3>

                {course.subtitle && (
                  <p className="mt-1 text-sm text-slate-500">{course.subtitle}</p>
                )}

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Clock3 size={18} />

                    {course.duration}
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

   {/* Flexible Online Learning */}

<motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative mt-24 overflow-hidden rounded-[40px] bg-gradient-to-br from-violet-50 via-white to-sky-50 p-10 shadow-2xl"
>
  {/* Background Glow */}

  <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-violet-200/30 blur-3xl"></div>
  <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl"></div>

  {/* Heading */}

  <div className="relative z-10 text-center">

    <motion.div
      whileHover={{
        rotate: 8,
        scale: 1.08,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-violet-600 via-blue-500 to-green-500 text-white shadow-xl"
    >
      <Laptop size={36} />
    </motion.div>

    <h3 className="mt-6 text-4xl font-bold text-slate-900">
      Flexible Online Learning
    </h3>

    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
      Learn from anywhere in the world with interactive lessons, expert
      trainers, downloadable resources, and a schedule that fits your
      lifestyle.
    </p>

  </div>

  {/* Feature Cards */}

  <div className="relative z-10 mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    {[
      {
        title: "Study at Your Own Pace",
        icon: Clock3,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
      },

      {
        title: "Interactive Lessons",
        icon: BookOpen,
        color: "bg-orange-100",
        iconColor: "text-orange-500",
      },

      {
        title: "Downloadable Resources",
        icon: Download,
        color: "bg-blue-100",
        iconColor: "text-blue-600",
      },

      {
        title: "Expert Trainer Support",
        icon: Users,
        color: "bg-green-100",
        iconColor: "text-green-600",
      },

      {
        title: "Professional Certification",
        icon: GraduationCap,
        color: "bg-pink-100",
        iconColor: "text-pink-600",
      },

      {
        title: "Learn Anytime, Anywhere",
        icon: Laptop,
        color: "bg-yellow-100",
        iconColor: "text-yellow-600",
      },

    ].map((item, index) => {

      const Icon = item.icon;

      return (

        <motion.div
          key={index}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          className="rounded-[28px] border border-white bg-white/80 p-6 shadow-lg backdrop-blur"
        >

          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
          >
            <Icon
              size={30}
              className={item.iconColor}
            />
          </div>

          <h4 className="mt-5 text-lg font-semibold leading-7 text-slate-900">
            {item.title}
          </h4>

        </motion.div>

      );

    })}

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

function CoursesTypeWriter() {
  const text =
    "Explore our professionally designed Montessori and Early Childhood Education programs. Whether you're beginning your journey or becoming a certified Montessori educator, we have the perfect course for you.";

  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [started]);

  return (
  <motion.p
  initial={{
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 0.8,
  }}
  viewport={{ once: true }}
  onViewportEnter={() => setStarted(true)}
  whileHover={{
    scale: 1.02,
    color: "#4f46e5",
  }}
  className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600 transition-colors duration-300"
>
      {displayText}
      {started && (
        <span className="ml-1 inline-block h-6 w-[3px] rounded-full bg-gradient-to-b from-violet-600 via-blue-500 to-green-500 animate-pulse align-middle"></span>
      )}
    </motion.p>
  );
}