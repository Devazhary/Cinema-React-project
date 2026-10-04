import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-950/90 backdrop-blur-md shadow-lg" : ""
      }`}
      style={
        scrolled
          ? undefined
          : { background: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)" }
      }
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="/" className="text-2xl font-extrabold tracking-widest text-red-600">
            CINEMA
          </a>
      </div>
    </header>
  );
}

export default Header;