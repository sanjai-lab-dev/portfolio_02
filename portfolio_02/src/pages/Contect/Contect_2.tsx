import { useState } from "react";


function Contect_2() {

  const [status, setStatus] = useState('idle');
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mgolejwd", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000); // Reset button after 5s
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="relative w-full min-h-full bg-[var(--bg-right)] flex items-center justify-center overflow-y-auto pt-20 md:pt-28 pb-10 px-4">
      {/* Background Ambient Glows */}
      <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-[var(--glow-right-sec)] blur-[120px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-87.5 bg-linear-to-t from-[var(--glow-left)] via-[var(--glow-right)] to-transparent z-10 pointer-events-none"></div>

      {/* Form Page */}
      <div className="relative border border-[var(--border-card)] w-[95%] sm:w-[80%] md:w-[70%] h-auto rounded-3xl bg-black/20 backdrop-blur-xl shadow-[0_0_40px_var(--border-card)] flex items-center justify-center p-6 md:p-10 z-10 my-8">

        <form className='space-y-6 w-full' onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div className='group space-y-2'>
              <label className='ml-1 text-[10px] font-black uppercase tracking-widest text-[var(--accent-right)]/70 group-focus-within:text-[var(--accent-right)] transition-colors'>Name</label>
              <input
                name='name'
                type="text"
                className='w-full rounded-2xl border border-[var(--border-card)] bg-black/35 text-[var(--text-primary)] p-4 outline-none ring-[var(--border-card)] transition-all focus:border-[var(--border-card-hover)] focus:ring-4'
                placeholder="Sanjai D"
                required
              />
            </div>
            <div className='group space-y-2'>
              <label className='ml-1 text-[10px] font-black uppercase tracking-widest text-[var(--accent-right)]/70 group-focus-within:text-[var(--accent-right)] transition-colors'>Email</label>
              <input
                name='email'
                type="email"
                className='w-full rounded-2xl border border-[var(--border-card)] bg-black/35 hover:bg-black/50 text-[var(--text-primary)] p-4 outline-none ring-[var(--border-card)] transition-all focus:border-[var(--border-card-hover)] focus:ring-4'
                placeholder="sanjai@example.com"
                required
              />
            </div>
          </div>

          <div className='group space-y-2'>
            <label className='ml-1 text-[10px] font-black uppercase tracking-widest text-[var(--accent-right)]/70 group-focus-within:text-[var(--accent-right)] transition-colors'>Your Message</label>
            <textarea
              name='message'
              className='w-full resize-none rounded-2xl border border-[var(--border-card)] bg-black/35 text-[var(--text-primary)] p-4 outline-none ring-[var(--border-card)] transition-all focus:border-[var(--border-card-hover)] focus:ring-4'
              placeholder="Briefly describe your project..."
              required
            />
          </div>

          <button
            disabled={status === 'sending'}
            className='group relative w-full overflow-hidden rounded-2xl bg-linear-to-r from-[var(--gradient-text-start)] to-[var(--gradient-text-end)] hover:opacity-90 py-4 font-black uppercase tracking-[0.2em] text-slate-950 transition-all disabled:opacity-50 shadow-md shadow-[var(--gradient-text-start)]/10'
          >
            <span className='relative z-10 flex items-center justify-center gap-3'>
              {status === 'sending' ? 'Transmitting...' : 'Send Message'}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contect_2;