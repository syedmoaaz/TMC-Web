import Navbar from "../components/Navbar";
import { ArrowRight } from "lucide-react";
//import heroLogo from "../assets/hero.png"; // <-- same logo/image jo right side dikhani hai

const Home = () => {
  return (
    <>
      <Navbar />

     <section className="relative overflow-hidden bg-gradient-to-r from-[#FFF9EC] via-white to-[#EEF8FF] pt-[88px] min-h-[calc(100vh-88px)]">

        {/* Background Glow */}

        <div className="absolute top-40 left-0 w-96 h-96 bg-yellow-200 blur-[140px] opacity-40 rounded-full"></div>

        <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-sky-200 blur-[180px] opacity-40 rounded-full"></div>

        {/* Confetti */}

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(90)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full opacity-70"
              style={{
                width: Math.random() * 8 + 4,
                height: Math.random() * 8 + 4,
                background: [
                  "#FF8A65",
                  "#7E57C2",
                  "#4FC3F7",
                  "#66BB6A",
                  "#FFD54F",
                ][Math.floor(Math.random() * 5)],
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center min-h-[calc(100vh-80px)]">

            {/* LEFT */}

            <div>



              <h1 className="mt-10 font-black leading-[1.05] text-4xl md:text-5xl lg:text-[58px]">

                <span className="text-violet-600">
                  Where teachers
                </span>

                <br />

                <span className="text-orange-500">
                  begin their
                </span>{" "}

                <span className="text-green-500">
                  magic.
                </span>

              </h1>

              <p className="mt-8 text-gray-600 text-base leading-7 max-w-xl">
                The Montessori Castle is a training academy for aspiring
                and practising educators. Learn the Montessori method
                the way it was meant to be — hands-on, joyful,
                and rooted in the child.
              </p>

              <div className="flex flex-wrap gap-5 mt-8">

                <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl transition">

                  Explore Courses

                  <ArrowRight size={20} />

                </button>

                <button className="border-2 border-violet-300 hover:bg-violet-50 text-violet-600 px-6 py-3 rounded-full font-semibold transition">
                  Talk to an Advisor
                </button>

              </div>

         

            </div>

        {/* RIGHT */}

<div className="relative flex justify-center">

  {/* Glow */}
  <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-pink-300 via-yellow-200 to-sky-300 blur-[120px] opacity-30"></div>

  {/* Badge */}
  <div className="absolute top-5 right-6 rotate-6 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
    Coming Soon 🚀
  </div>

  {/* Placeholder Card */}
  <div className="relative w-[420px] h-[420px] bg-white rounded-[35px] shadow-2xl border border-gray-100 flex items-center justify-center">

    <div className="text-center">

      <div className="w-24 h-24 mx-auto rounded-full bg-violet-100 flex items-center justify-center text-5xl">
        🎓
      </div>

      <h3 className="mt-6 text-2xl font-bold text-violet-600">
        Hero Image
      </h3>

      <p className="mt-2 text-gray-500">
        Will be added later
      </p>

    </div>

  </div>

</div>
          </div>

        </div>

      </section>
    </>
  );
};

export default Home;