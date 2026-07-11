

function Project_1() {
  const project = [
    {
      img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Portfolio Website",
      tags: ["React", "Tailwind", "Framer"],
      info: "A high-performance personal portfolio featuring smooth transitions and dark-mode aesthetics.",
      git_link: "http://sanjai-lab-dev.github.io/portfolio",
      icon: "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.84c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z",
    },
    {
      img: "https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Weather App",
      tags: ["React", "Tailwind", "API"],
      info: "Real-time weather tracking with dynamic backgrounds based on local climate conditions.",
      git_link: "https://github.com/sanjai-lab-dev/Weather_app",
      icon: "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.84c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z",
    },
  ];

  return (
    <div className='relative w-full min-h-full bg-[var(--bg-left)] flex flex-col justify-center items-center gap-8 overflow-hidden pt-20 md:pt-28 pb-10 px-4 md:px-8'>
 {/* Background Ambient Glows */}
      <div className="absolute bottom-0 left-0 w-125 h-125 rounded-full bg-[var(--glow-left)] blur-[120px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-87.5 bg-linear-to-t from-[var(--glow-left)] via-[var(--glow-right)] to-transparent z-10 pointer-events-none"></div>


      <div className="w-full md:w-[80%] flex flex-col gap-6 z-10 items-center">
        {project.map((items, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-5 w-full bg-[var(--bg-card)] p-4 sm:p-5 rounded-2xl border-2 border-[var(--border-card)] hover:border-[var(--border-card-hover)] shadow-lg transition-all duration-300">
            <img src={items.img} alt={items.title} className="w-full sm:w-40 md:w-50 xl:w-80 h-36 sm:h-40 xl:h-60 rounded-xl sm:rounded-l-xl sm:rounded-r-none object-cover shadow-md" />
            <div className="flex flex-col justify-center items-center gap-4 text-center grow p-2">
              <div className="text-center text-lg xl:text-2xl text-[var(--text-primary)] font-bold">{items.title}</div>
              <p className="text-xs md:text-sm text-[var(--text-muted)] max-w-md">{items.info}</p>
              
              <a 
                href={items.git_link} 
                target="_blank" 
                rel="noreferrer"
                className="bg-linear-to-r from-[var(--gradient-text-start)] to-[var(--gradient-text-end)] text-slate-950 px-5 py-2.5 rounded-xl font-bold hover:opacity-90 transition-all text-sm inline-flex items-center gap-2 shadow-sm"
              >
                Live Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project_1;