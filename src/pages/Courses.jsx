import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  Clock3,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    icon: GraduationCap,
    color: "text-violet-400",
    badge: "Most Popular",
    title: "Montessori Teacher Training",
    duration: "8 Weeks",
    description:
      "Master Montessori philosophy, classroom preparation, practical life, sensorial activities, language and mathematics with hands-on learning.",
  },
  {
    icon: BookOpen,
    color: "text-sky-400",
    badge: "Professional",
    title: "Early Childhood Education",
    duration: "6 Weeks",
    description:
      "Understand child psychology, classroom management, developmental milestones and effective teaching strategies for young learners.",
  },
  {
    icon: Award,
    color: "text-green-400",
    badge: "Certification",
    title: "Montessori Certification Program",
    duration: "10 Weeks",
    description:
      "Complete internationally inspired Montessori training and earn a professional certificate to strengthen your teaching career.",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-gradient-to-b from-[#F7FAFF] via-white to-[#FFFDF8] pt-5 py-24 scroll-mt-10"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-300/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Learn. Grow. Get Certified.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            From Montessori foundations to advanced teacher training,
            our courses are carefully designed to help educators gain
            practical skills, internationally inspired certifications,
            and the confidence to inspire young minds.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .7,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group overflow-hidden rounded-[34px] bg-slate-900 p-8 text-white shadow-2xl transition"
              >
                {/* Badge */}

                <span className="rounded-full bg-violet-500/20 px-4 py-2 text-sm font-semibold text-violet-300">
                  {course.badge}
                </span>

                {/* Icon */}

                <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
                  <Icon
                    className={course.color}
                    size={42}
                  />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold leading-snug">
                  {course.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-slate-300">
                  {course.description}
                </p>

                {/* Duration */}

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock3 size={18} />

                    <span>{course.duration}</span>
                  </div>

                  <div className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-300">
                    Certificate
                  </div>
                </div>

                {/* Button */}

                <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-4 font-semibold transition duration-300 group-hover:shadow-xl hover:scale-[1.02]">
                  Learn More

                  <ArrowRight size={20} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}