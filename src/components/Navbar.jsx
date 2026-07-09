import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About Us", href: "#about" },
    { title: "Our Courses", href: "#courses" },
    { title: "Why TMC", href: "#why" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScroll = window.scrollY;

      if (hasClicked) {
        setHidden(false);
        setHasClicked(false);
        lastScrollY = currentScroll;
        return;
      }

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasClicked]);

  const handleNavClick = () => {
    setHidden(true);
    setMobileMenu(false);
    setHasClicked(true);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
       <div className="h-[88px] flex items-center justify-between">
          {/* Logo */}

        <div className="flex items-center gap-3">

  <img
    src={logo}
    alt="TMC Logo"
    className="w-16 h-16 object-contain"
  />
<h2
  className="text-[22px] lg:text-[28px] font-semibold leading-none whitespace-nowrap"
  style={{ fontFamily: "'Baloo 2', cursive" }}
>
  <span className="text-[#7B3FF2]">The</span>{" "}
  <span className="text-[#0B55B7]">Montessori</span>{" "}
  <span className="text-[#52C24E]">Castle</span>
</h2>

</div>

          {/* Desktop Menu */}

         <nav className="hidden lg:flex items-center gap-8 ml-10 flex-nowrap">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-full px-5 py-3 font-semibold text-gray-600 transition-all duration-300 hover:bg-violet-50 hover:text-violet-600 whitespace-nowrap"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Contact */}

          <a
            href="#contact"
            onClick={handleNavClick}
            className="hidden lg:block rounded-full bg-gradient-to-r from-orange-500 to-red-400 px-8 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105"
          >
            Contact Us
          </a>

          {/* Mobile */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={30} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

    <div
  className={`lg:hidden overflow-hidden transition-all duration-300 ${
    mobileMenu ? "max-h-96 border-t" : "max-h-0"
  }`}
>
        <div className="lg:hidden bg-white border-t">
          <div className="bg-white/95 backdrop-blur-xl px-6 py-6">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
               className="block rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-violet-50 hover:text-violet-600 transition"
                onClick={() => {
                  handleNavClick();
                  setMobileMenu(false);
                }}
              >
                {item.title}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-4 block rounded-full bg-gradient-to-r from-orange-500 to-red-400 py-3 text-center font-semibold text-white shadow-lg"
              onClick={() => {
                handleNavClick();
                setMobileMenu(false);
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;