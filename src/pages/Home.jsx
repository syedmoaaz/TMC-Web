import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

      <section className="relative overflow-hidden py-24">

  <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8E8] via-white to-[#EEF8FF]"></div>

  <div className="absolute -left-24 top-0 w-72 h-72 rounded-full bg-yellow-200/40 blur-3xl"></div>

  <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl"></div>

  <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

      <div>


<motion.h2
  initial={{
  opacity:0,
  y:80,
  rotateX:30
}}

whileInView={{
  opacity:1,
  y:0,
  rotateX:0
}}

whileHover={{
  scale: 1.02,
}}

transition={{
  duration: 1,
  delay: 0.15,
  type: "spring",
  stiffness: 70,
}}
  viewport={{ once: true }}
  className="mt-6 text-4xl font-bold leading-tight text-slate-900"
>
  A calm, practical path
  <br />
  into Montessori learning.
</motion.h2>

    <TypeWriter />

      </div>

      <div className="rounded-[32px] bg-white border border-violet-100 shadow-xl p-8">

        <ul className="space-y-5">

          {highlights.map((item) => (

            <li
              key={item}
              className="flex items-start gap-4 rounded-2xl bg-gradient-to-r from-violet-50 via-yellow-50 to-green-50 p-5"
            >

              <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-violet-600 to-green-500"></div>

              <span className="text-slate-700 font-medium">
                {item}
              </span>

            </li>

          ))}

        </ul>

      </div>

    </div>

  </div>
  

</section>
    </div>




  );
 
};

function TypeWriter() {
  const text =
    "We believe learning should be inspiring, practical and accessible. Every course is designed to help teachers, parents and caregivers build confidence through real-world Montessori knowledge.";

  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;

      if (i > text.length) {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setStarted(true)}
      className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
    >
      {displayText}
      {started && <span className="animate-pulse text-violet-600">|</span>}
    </motion.p>
  );
}
export default Home;
