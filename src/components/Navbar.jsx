import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About Us", href: "#about" },
    { title: "Why TMC", href: "#why" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
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

         <nav className="hidden lg:flex items-center gap-12 ml-10">
            {navLinks.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                className={`font-semibold transition-all duration-300 ${
                  index === 0
                    ? "rounded-full bg-violet-600 px-8 py-3 text-white shadow-lg"
                    : "text-gray-600 hover:text-violet-600"
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Contact */}

          <a
            href="#contact"
            className="hidden lg:block rounded-full bg-gradient-to-r from-orange-500 to-red-400 px-8 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105"
          >
            Contact Us
          </a>

          {/* Mobile */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-5 space-y-4">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="font-medium text-gray-700"
                onClick={() => setMobileMenu(false)}
              >
                {item.title}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full bg-orange-500 py-3 text-center text-white"
              onClick={() => setMobileMenu(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;