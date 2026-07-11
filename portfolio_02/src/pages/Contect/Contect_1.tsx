
function Contect() {
  const openLocation = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=12.2167974,78.522452",
      "_blank"
    );
  };
  return (
    <div className="relative w-full min-h-full bg-[var(--bg-left)] flex items-center justify-center overflow-y-auto pt-20 md:pt-28 pb-10 px-4">
     {/* Background Ambient Glows */}
      <div className="absolute bottom-0 left-0 w-125 h-125 rounded-full bg-[var(--glow-left)] blur-[120px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-87.5 bg-linear-to-t from-[var(--glow-left)] via-[var(--glow-right)] to-transparent z-10 pointer-events-none"></div>


      {/* Main card box */}
      <div className="relative border border-[var(--border-card)] p-6 md:p-10 w-[95%] sm:w-[80%] md:w-[70%] rounded-3xl bg-black/20 backdrop-blur-xl shadow-[0_0_35px_var(--border-card)] flex items-center justify-center z-10">
        <div className='flex w-full flex-col space-y-5 lg:w-4/5'>
          <div className='space-y-4'>
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[var(--accent-left)]"></span>
              <h2 className='font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent-left)] font-bold'>Available for Projects</h2>
            </div>
            <h1 className='text-4xl sm:text-5xl font-black tracking-tighter md:text-7xl text-[var(--text-primary)]'>
              Let's <span className="bg-linear-to-r from-[var(--gradient-text-start)] via-[var(--gradient-text-via)] to-[var(--gradient-text-end)] bg-clip-text text-transparent font-black">Talk.</span>
            </h1>
            <p className='max-w-sm text-base md:text-lg leading-relaxed text-[var(--text-muted)]'>
              Have a vision? I have the stack. Let's collaborate to build something performant and beautiful.
            </p>
          </div>

          <div className='space-y-2'>
            {[
              { label: 'Email', value: 'sanjaydhesigan@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { label: 'Location', value: 'Krishnagiri, TN', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' }
            ].map((item, idx) => (
              <div key={idx} className='group flex items-center gap-5 rounded-2xl border border-[var(--border-card)] bg-black/15 p-4 transition-all hover:bg-black/35'>
                <div className='rounded-xl bg-[var(--bg-card)] p-3 text-[var(--text-primary)] group-hover:bg-[var(--accent-left)] group-hover:text-slate-950 transition-all cursor-pointer'>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" onClick={item.label === 'Location' ? openLocation : undefined}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p className='text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]'>{item.label}</p>
                  <p className='text-sm font-medium text-[var(--text-primary)]'>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contect;