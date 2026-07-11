import { useEffect, useState } from "react";

interface NavProps {
  num: number;
  change: (num: number) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

function Nav(props: NavProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = ["HOME", "SKILLS", "PROJECT", "CONTACT"];
  useEffect(() => {
    setActiveIndex(props.num);
  }, [props.num]);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    props.change(index);
  };

  return (
    // Outer container handles centering and responsiveness
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      
      {/* Dynamic Island Capsule */}
      <div className="pointer-events-auto flex flex-row items-center gap-2 md:gap-6 p-2 px-3 md:px-6 rounded-full bg-black/25 backdrop-blur-xl border border-[var(--border-card)] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 ease-in-out max-w-full">
        
        {/* Brand/Logo */}
        <div className="text-[var(--text-primary)] font-black tracking-widest text-[10px] sm:text-xs md:text-base px-1 sm:px-2">
          PORTFOLIO
        </div>

        {/* Navigation Actions */}
        <div className="relative flex flex-row items-center bg-white/5 p-1 rounded-full border border-white/5">
          
          {/* Moving Underline Indicator */}
          <div 
            className="absolute top-1 bottom-1 bg-linear-to-r from-[var(--gradient-text-start)]/25 to-[var(--gradient-text-end)]/35 border border-[var(--gradient-text-start)]/25 rounded-full transition-all duration-300 ease-out shadow-inner"
            style={{
              left: `calc(${activeIndex} * 25% + 4px)`,
              width: "calc(25% - 8px)",
            }}
          />

          {menuItems.map((item, index) => (
            <button
              key={item}
              onClick={() => handleNavClick(index)}
              className={`relative z-10 w-14 sm:w-16 md:w-30 py-1.5 text-center text-[10px] md:text-sm font-bold tracking-wide transition-colors duration-300 rounded-full ${
                activeIndex === index ? "text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={props.toggleTheme}
          className="text-[var(--text-primary)] hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors pointer-events-auto flex items-center justify-center"
          aria-label="Toggle Theme"
        >
          {props.theme === "dark" ? (
            // Moon icon for dark theme (click to switch to light)
            <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            // Sun icon for light theme (click to switch to dark)
            <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          )}
        </button>

      </div>
    </div>
  );
}

export default Nav;