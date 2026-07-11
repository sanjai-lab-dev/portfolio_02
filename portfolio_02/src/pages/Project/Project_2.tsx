function Project_2() {
  const project = [
    {
      img: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "smart-leads-manager",
      tags: ["MERN-stack", "React"],
      info: "A classic Flappy Bird clone built using the Godot game engine with retro assets.",
      git_link: "https://smart-leads-manager-7xaqim0wx-sanjai-d-projects.vercel.app/"
    },
    {
      img: "https://i.pinimg.com/736x/a0/c3/34/a0c334f1c99dbe3b5a6a47260c79c312.jpg",
      title: "paw-stay",
      tags: ["Front-end", "HTML","CSS","JavaScript"],
      info: "A side-scroller Mario recreation built using Godot physics and level designs.",
      git_link: "https://paw-stay-i24u6a6gi-sanjai-d-projects.vercel.app/"
    }
  ];

  return (
    <div className='relative w-full min-h-full bg-[var(--bg-right)] flex flex-col justify-center items-center gap-8 overflow-hidden pt-20 md:pt-28 pb-10 px-4 md:px-8'>
      {/* Yellow & Amber Background Ambient Glows */}
      <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-[var(--glow-right)] blur-[120px] z-0 pointer-events-none"></div>
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

export default Project_2;