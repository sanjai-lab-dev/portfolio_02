
function Skill() {
  const skills = [
    {
      name: "HTML5",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "hover:drop-shadow-[0_0_15px_rgba(227,79,38,0.5)]",
      master: "100%"
    },
    {
      name: "CSS3",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "hover:drop-shadow-[0_0_15px_rgba(21,114,182,0.5)]",
      master: "100%"
    },
    {
      name: "JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "hover:drop-shadow-[0_0_15px_rgba(247,223,30,0.5)]",
      master: "90%"
    },
    {
      name: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "hover:drop-shadow-[0_0_15px_rgba(97,218,251,0.5)]",
      master: "100%"
    },
    {
      name: "Tailwind",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]",
      master: "100%"
    },
    {
      name: "Bootstrap",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      color: "hover:drop-shadow-[0_0_15px_rgba(121,82,179,0.5)]",
      master: "70%"
    }
  ];

  return (
    <div className="relative flex flex-wrap gap-6 md:gap-8 items-center justify-center min-h-full w-full bg-[var(--bg-left)] overflow-hidden pt-20 md:pt-28 pb-10 px-4 md:px-8">

      {/* Background Ambient Glows */}
      <div className="absolute bottom-0 left-0 w-125 h-125 rounded-full bg-[var(--glow-left)] blur-[120px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-87.5 bg-linear-to-t from-[var(--glow-left)] via-[var(--glow-right)] to-transparent z-10 pointer-events-none"></div>

       {skills.map((skill) => (
        <div
          key={skill.name}
          className="group w-64 h-40 md:w-70 md:h-45 [perspective:1000px] z-20"
        >
          <div
            className="
              relative h-full w-full
              duration-500
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]
            "
          >
            {/* Front Face */}
            <div
              className="
                absolute inset-0
                flex items-center justify-center
                rounded-3xl
                bg-[var(--bg-card)]
                backdrop-blur-xl
                border border-[var(--border-card)]
                text-4xl font-bold
                transition-all duration-300
                group-hover:border-[var(--border-card-hover)]
                backface-hidden
              "
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-xl"
                />
                <div className="text-xl md:text-2xl font-black tracking-wider bg-linear-to-r from-[var(--gradient-text-start)] via-[var(--gradient-text-via)] to-[var(--gradient-text-end)] bg-clip-text text-transparent">
                  {skill.name.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Back Face */}
            <div
              className="
                absolute inset-0
                flex flex-col items-center justify-center gap-2
                rounded-3xl
                bg-linear-to-r from-[var(--gradient-text-start)] via-[var(--gradient-text-via)] to-[var(--gradient-text-end)]
                text-stone-950
                [transform:rotateY(180deg)]
                backface-hidden
                shadow-[0_0_40px_var(--border-card)]
              "
            >
              <span className="text-3xl md:text-4xl font-black tracking-tighter text-amber-950 drop-shadow-sm">{skill.master}</span>
              <span className="text-base md:text-xl font-bold tracking-[0.2em] uppercase text-violet-950/60">
                {skill.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skill;