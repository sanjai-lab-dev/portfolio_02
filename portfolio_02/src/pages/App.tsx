import { useState, useEffect } from "react";
import Project_1 from "./Project/Project_1.tsx";
import Project_2 from "./Project/Project_2.tsx";
import Skill from "./Skills/Skill_1.tsx";
import Skil from "./Skills/Skill_2.tsx";
import Contect_1 from "./Contect/Contect_1.tsx"
import Contect_2 from "./Contect/Contect_2.tsx"
import Home_1 from "./Home/Home_1.tsx"
import Home_2 from "./Home/Home_2.tsx"
import Nav from './Nav.tsx'

function App() {
  const [page, setPage] = useState(0);
  const pages = ['Home', 'Skills', 'Projects', 'Contect', 'Home'];
  const [animate, setAnimate] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Sync theme with DOM
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // 1. Define the dynamic styles for each page (0 to 3) matching the unified themes
  const buttonThemes: Record<number, string> = {
    0: "bg-slate-900/80 border-violet-500/30 text-violet-200 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:border-violet-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]", // Violet
    1: "bg-slate-900/80 border-fuchsia-500/30 text-fuchsia-200 shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(217,70,239,0.4)]", // Fuchsia
    2: "bg-violet-950/80 border-yellow-500/30 text-yellow-200 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]", // Amber
    3: "bg-violet-950/80 border-amber-500/30 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]", // Golden/Orange
  };

  function add() {
    setAnimate(!animate);
    setPage((prev) => (prev >= 3 ? 0 : prev + 1));
  }
  function change(num: number) {
    setPage(num);
  }

  return (
    <div className="w-screen h-screen bg-bg-left flex items-center justify-center overflow-hidden transition-colors duration-300">

      <button
        onClick={add}
        className={`fixed border-4 backdrop-blur-sm rounded-full w-24 h-24 md:w-35 md:h-35 font-bold transition-all duration-500 z-50 flex items-center justify-center flex-col gap-1 bottom-24 right-4 md:bottom-auto md:right-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ${
          buttonThemes[page] || buttonThemes[3]
        }`}
      >
        <span className="text-[8px] tracking-widest opacity-70 uppercase">Click to <div className="inline md:block">Move</div></span>
        <span className="text-sm md:text-xl leading-none">{pages[page + 1]}</span>
      </button>

      {/* Nav Bar */}
      <Nav num={page} change={change} theme={theme} toggleTheme={toggleTheme}></Nav>

      {/* Home Page */}
      <div className={`fixed flex items-center justify-center left-0 top-0 w-full md:w-[50vw] h-[50vh] md:h-screen duration-400 ease-in-out delay-100 z-0 overflow-y-auto`}
      ><Home_1 change={change}></Home_1></div>
      <div className={`fixed flex items-center justify-center right-0 bottom-0 w-full md:w-[50vw] h-[50vh] md:h-screen duration-400 ease-in-out delay-100 z-0 overflow-y-auto`}
      ><Home_2></Home_2></div>

      {/* Skills page */}
      <div className={`fixed top-[-50vh] md:top-0 left-0 md:left-[-50vw] w-full md:w-[50vw] h-[50vh] md:h-screen duration-400 ease-in-out transition-all z-20 overflow-y-auto ${
        page >= 1 ? "translate-y-[50vh] md:translate-y-0 md:translate-x-[50vw]" : ""
      }`}
      ><Skill></Skill></div>
      <div className={`fixed bottom-[-50vh] md:top-0 right-0 md:right-[-50vw] w-full md:w-[50vw] h-[50vh] md:h-screen duration-400 ease-in-out transition-all z-20 overflow-y-auto ${
        page >= 1 ? "-translate-y-[50vh] md:translate-y-0 md:-translate-x-[50vw]" : ""
      }`}
      ><Skil></Skil></div>

      {/* Project page*/}
      <div className={`fixed top-[-50vh] md:top-0 left-0 md:left-[-50vw] w-full md:w-[50vw] h-[50vh] md:h-screen duration-400 ease-in-out transition-all z-30 overflow-y-auto ${
        page >= 2 ? "translate-y-[50vh] md:translate-y-0 md:translate-x-[50vw]" : ""
      }`}
      ><Project_1></Project_1></div>
      <div className={`fixed bottom-[-50vh] md:top-0 right-0 md:right-[-50vw] w-full md:w-[50vw] h-[50vh] md:h-screen duration-400 ease-in-out transition-all z-30 overflow-y-auto ${
        page >= 2 ? "-translate-y-[50vh] md:translate-y-0 md:-translate-x-[50vw]" : ""
      }`}
      ><Project_2 /></div>

      {/* Contect page*/}
      <div className={`fixed top-[-50vh] md:top-0 left-0 md:left-[-50vw] w-full md:w-[50vw] h-[50vh] md:h-screen duration-400 ease-in-out transition-all z-40 overflow-y-auto ${
        page >= 3 ? "translate-y-[50vh] md:translate-y-0 md:translate-x-[50vw]" : ""
      }`}
      ><Contect_1 /></div>
      <div className={`fixed bottom-[-50vh] md:top-0 right-0 md:right-[-50vw] w-full md:w-[50vw] h-[50vh] md:h-screen duration-400 ease-in-out transition-all z-40 overflow-y-auto ${
        page >= 3 ? "-translate-y-[50vh] md:translate-y-0 md:-translate-x-[50vw]" : ""
      }`}
      ><Contect_2 /></div>

    </div>
  );
}

export default App;