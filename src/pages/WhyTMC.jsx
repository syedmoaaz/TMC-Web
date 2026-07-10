import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Users,
  Globe2,
  ArrowRight,
} from "lucide-react";

import TmcVid from "../assets/TmcVid.mp4";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Montessori Trainers",
    description:
      "Learn directly from passionate educators with years of Montessori classroom experience.",
    bg: "bg-violet-100",
    iconColor: "text-violet-600",
  },

  {
    icon: Globe2,
    title: "Flexible Online Learning",
    description:
      "Study from anywhere in the world at your own pace with complete flexibility.",
    bg: "bg-sky-100",
    iconColor: "text-sky-600",
  },

  {
    icon: Award,
    title: "Professional Certification",
    description:
      "Receive recognized certificates that strengthen your teaching career.",
    bg: "bg-green-100",
    iconColor: "text-green-600",
  },

  {
    icon: Users,
    title: "Supportive Learning Community",
    description:
      "Become part of a growing community of educators, parents and future teachers.",
    bg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
];

const WhyTMC = () => {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFF8EC] via-white to-[#EEF8FF] py-28 scroll-mt-20"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-violet-200/30 blur-[120px]"></div>

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[140px]"></div>

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-200/20 blur-[120px]"></div>

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .8,
              }}
              viewport={{
                once: true,
              }}
              className="text-5xl font-bold leading-tight"
            >

              <span className="text-violet-600">
                Why Choose
              </span>

              <br />

              <span className="text-[#0B55B7]">
                The Montessori
              </span>{" "}

              <span className="text-[#52C24E]">
                Castle?
              </span>

            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .2,
                duration: .8,
              }}
              viewport={{
                once: true,
              }}
              className="mt-8 text-lg leading-8 text-slate-600"
            >
              At The Montessori Castle, we believe every educator deserves
              practical, engaging and internationally inspired Montessori
              training. Our programs empower teachers, assistants and parents
              with the confidence to create meaningful learning experiences
              for every child.
            </motion.p>

            {/* Cards */}

            <div className="mt-12 space-y-6">

              {features.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -60,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * .15,
                      duration: .6,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                    }}
                    className="group flex gap-5 rounded-[28px] border border-white bg-white/80 p-6 shadow-xl backdrop-blur transition-all"
                  >

                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
                    >

                      <Icon
                        size={30}
                        className={`${item.iconColor} transition duration-300 group-hover:rotate-12 group-hover:scale-110`}
                      />

                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>

                );

              })}

            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .95,
              }}
              className="mt-10 flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl"
            >

              Start Learning Today

              <ArrowRight size={20} />

            </motion.button>

          </div>

          {/* ========================= */}
          {/* RIGHT SIDE STARTS HERE */}
          {/* Part 2 yahan se start hogi */}
          {/* RIGHT SIDE */}

<div className="relative flex justify-center">

  {/* Glow */}

  <div className="absolute h-[520px] w-[360px] rounded-[60px] bg-gradient-to-b from-violet-300/30 via-sky-300/20 to-green-300/30 blur-[90px]"></div>

  {/* Video Container */}

  <motion.div
    initial={{
      opacity: 0,
      x: 80,
      scale: .9,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
      scale: 1,
    }}
    transition={{
      duration: .9,
      delay: .25,
    }}
    viewport={{
      once: true,
    }}
    whileHover={{
      scale: 1.02,
    }}
    className="relative overflow-hidden rounded-[42px] border border-white/70 bg-white p-3 shadow-[0_35px_80px_rgba(0,0,0,.18)] backdrop-blur-xl"
  >

    <video
      src={TmcVid}
      autoPlay
      muted
      loop
      playsInline
      className="h-[620px] w-[340px] rounded-[32px] object-cover"
    />

  </motion.div>

  {/* Floating Badge 1 */}

  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
    className="absolute -left-10 top-8 rounded-2xl bg-white px-5 py-4 shadow-xl"
  >

    <div className="flex items-center gap-3">

      <GraduationCap
        className="text-violet-600"
        size={26}
      />

      <div>

        <h4 className="font-bold">
          Certified
        </h4>

        <p className="text-xs text-slate-500">
          Courses
        </p>

      </div>

    </div>

  </motion.div>

  {/* Floating Badge 2 */}

  <motion.div
    animate={{
      y: [0, -14, 0],
    }}
    transition={{
      duration: 3.5,
      repeat: Infinity,
      delay: .5,
    }}
    className="absolute -right-12 top-24 rounded-2xl bg-white px-5 py-4 shadow-xl"
  >

    <div className="flex items-center gap-3">

      <Globe2
        className="text-sky-600"
        size={26}
      />

      <div>

        <h4 className="font-bold">
          Online
        </h4>

        <p className="text-xs text-slate-500">
          Learning
        </p>

      </div>

    </div>

  </motion.div>

  {/* Floating Badge 3 */}

  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: 1,
    }}
    className="absolute -left-10 bottom-28 rounded-2xl bg-white px-5 py-4 shadow-xl"
  >

    <div className="flex items-center gap-3">

      <Award
        className="text-green-600"
        size={26}
      />

      <div>

        <h4 className="font-bold">
          Professional
        </h4>

        <p className="text-xs text-slate-500">
          Certificate
        </p>

      </div>

    </div>

  </motion.div>

  {/* Floating Badge 4 */}

  <motion.div
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: 1.3,
    }}
    className="absolute -right-8 bottom-12 rounded-2xl bg-white px-5 py-4 shadow-xl"
  >

    <div className="flex items-center gap-3">

      <Users
        className="text-orange-500"
        size={26}
      />

      <div>

        <h4 className="font-bold">
          2500+
        </h4>

        <p className="text-xs text-slate-500">
          Teachers
        </p>

      </div>

    </div>

  </motion.div>

</div>
        </div>
      </div>

      {/* Bottom CTA */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .8,
          delay: .2,
        }}
        viewport={{
          once: true,
        }}
        className="relative z-10 mx-auto mt-24 max-w-6xl px-6"
      >

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-600 via-blue-600 to-green-500 p-12 shadow-[0_30px_80px_rgba(59,130,246,.25)]">

          {/* Floating Glow */}

          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 text-center">

            <motion.h2
              initial={{
                opacity: 0,
                scale: .9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: .8,
              }}
              viewport={{
                once: true,
              }}
              className="text-4xl font-bold text-white"
            >

              Your Montessori Journey Starts Here.

            </motion.h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">

              Join aspiring teachers, assistants and parents who are
              transforming early childhood education through practical
              Montessori learning.

            </p>

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: .95,
              }}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-violet-700 shadow-xl transition"

            >

              Explore Our Courses

              <ArrowRight size={20} />

            </motion.button>

          </div>

        </div>

      </motion.div>

    </section>

  );
};

export default WhyTMC;