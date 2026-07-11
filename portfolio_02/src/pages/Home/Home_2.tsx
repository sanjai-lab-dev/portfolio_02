import img from "../../assets/hero_1.png";

function Home_2() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[var(--bg-right)]">

      {/* Glow Behind Player */}
      <div
        className="
          absolute
          bottom-0
          right-0
          w-125
          h-125
          rounded-full
          bg-[var(--glow-right-sec)]
          blur-[120px]
          z-0
        "
      ></div>

      {/* Bottom Gradient */}
      <div
        className="
          absolute
          bottom-0
          w-full
          h-87.5
          bg-linear-to-t
          from-[var(--accent-right)]/40
          via-[var(--accent-right)]/10
          to-transparent
          z-10
        "
      ></div>

      {/* Player Image */}
      <div className="relative z-20 flex justify-center h-full">
        <img
          src={img}
          alt="Player"
          className="h-full md:h-screen max-h-full animate-[start_2s_linear] object-contain pt-6 pointer-events-none"
        />
      </div>

      {/* Full Stack Developer Card */}
      <div
        className="
          absolute
          right-4
          bottom-4
          md:right-10
          md:bottom-10
          z-30

          px-4
          py-3
          md:px-8
          md:py-6

          rounded-2xl
          md:rounded-3xl

          bg-black/25
          backdrop-blur-xl

          border
          border-[var(--border-card)]

          shadow-[0_0_40px_var(--border-card)]

          transition-all
          duration-500

          hover:scale-105
          hover:border-[var(--border-card-hover)]
          hover:shadow-[0_0_60px_var(--border-card-hover)]
        "
      >
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            font-black
            leading-none

            bg-linear-to-r
            from-[var(--gradient-text-start)]
            via-[var(--gradient-text-via)]
            to-[var(--gradient-text-end)]

            bg-clip-text
            text-transparent
          "
        >
          FULL
        </h1>

        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            font-black
            leading-none

            bg-linear-to-r
            from-[var(--gradient-text-start)]
            via-[var(--gradient-text-via)]
            to-[var(--gradient-text-end)]

            bg-clip-text
            text-transparent
          "
        >
          STACK
        </h1>

        <p
          className="
            text-center
            text-white
            tracking-[0.2em]
            md:tracking-[0.35em]
            font-semibold
            mt-1
            md:mt-3
            text-sm
            md:text-xl
          "
        >
          DEVELOPER
        </p>
      </div>
    </div>
  );
}

export default Home_2;