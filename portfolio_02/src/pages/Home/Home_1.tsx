
import pdf from '../../assets/Resume.pdf'

interface HomeProps{
    change:(num:number)=>void
}

function Home_1(props:HomeProps) {
    return (
        <div className='relative min-h-full w-full bg-[var(--bg-left)] flex items-center justify-center flex-col px-6 md:px-20 py-20 md:py-0 overflow-hidden text-[var(--text-primary)]'>
         {/* Background Ambient Glows */}
      <div className="absolute bottom-0 -left-0 w-125 h-125 rounded-full bg-[var(--glow-left)] blur-[120px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-57.5 bg-linear-to-t from-[var(--accent-home)]/40 via-[var(--accent-home]/10 to-transparent z-10 pointer-events-none"></div>


            {/* Main Content Container */}
            <div className='max-w-3xl text-center z-10 flex flex-col items-center gap-6'>
                {/* Intro Badge */}
                <span className='px-4 py-1.5 text-xs font-semibold tracking-wider text-[var(--accent-left)] bg-[var(--accent-left)]/10 rounded-full border border-[var(--accent-left)]/20 uppercase backdrop-blur-sm animate-fade-up-badge'>
                    Available for New Projects
                </span>

                {/* Typography Stack */}
                <h1 className='text-4xl w-auto md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] mt-2 flex flex-col sm:flex-row items-center justify-center gap-3'>
                    <span className=''>Hi, I'm</span> 
                    <span className='animate-typewriter bg-linear-to-r from-[var(--gradient-text-start)] via-[var(--gradient-text-via)] to-[var(--gradient-text-end)] bg-clip-text text-transparent inline-block pr-1 pb-2'>
                        Sanjai
                    </span>
                </h1>
                
                <h2 className='text-md md:text-2xl font-bold text-[var(--text-secondary)] max-w-xl text-balance animate-fade-up-delayed-1'>
                    Full Stack Developer passionate about building modern web applications.
                </h2>
                
                <p className='text-sm md:text-lg text-[var(--text-muted)] font-normal leading-relaxed max-w-2xl mt-2 animate-fade-up-delayed-2 hidden lg:block'>
                    I specialize in <span className='text-[var(--accent-left)] font-medium'>React</span>, <span className='text-[var(--accent-left)] font-medium'>Node.js</span>, <span className='text-[var(--accent-left)] font-medium'>Express.js</span>, and <span className='text-[var(--accent-left)] font-medium'>MongoDB</span>. 
                    I focus on crafting responsive, user-friendly, and scalable solutions that solve real-world problems.
                </p>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-12 z-10 w-full sm:w-auto px-4 animate-fade-up-delayed-3'>
                <button 
                   onClick={()=>props.change(2)} 
                    className='w-full sm:w-auto text-center bg-linear-to-r from-[var(--gradient-text-start)] to-[var(--gradient-text-end)] hover:opacity-90 text-slate-950 font-semibold px-8 py-4 rounded-xl shadow-lg shadow-[var(--gradient-text-start)]/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0'
                >
                    View Projects
                </button>
                
                <a
                    href={pdf} 
                    download
                    className='w-full sm:w-auto text-center bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] text-[var(--btn-text)] font-semibold px-8 py-4 rounded-xl border border-[var(--btn-border)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0'
                >
                    Download Resume
                </a>

                <a 
                    href="https://github.com/sanjai-lab-dev" 
                    target="_blank" 
                    rel="noreferrer"
                    className='w-full sm:w-auto text-center bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] text-[var(--btn-text)] font-semibold px-8 py-4 rounded-xl border border-[var(--btn-border)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0'
                >
                    GitHub Page
                </a>
            </div>
        </div>
    );
}

export default Home_1;