import heroImage from '../images/banner1.jpg';

const HeroSection = () => (
  <div className="bg-[#F7F4ED]">
    <section
      /* 1 — rounded corner + overflow-hidden so all absolute layers inherit it */
      className="relative h-screen w-[95%] mx-auto overflow-hidden
                 rounded-lg sm:rounded-xl lg:rounded-2xl"
    >
      {/* 2 — background image + gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat
                   transform sm:scale-105 filter brightness-110 contrast-105 saturate-110"
        style={{
          backgroundImage: `
            linear-gradient(to top, rgba(128,0,32,.80) 0%, rgba(128,0,32,.30) 40%, rgba(128,0,32,0) 70%),
            url('${heroImage}')
          `,
          /* 3 — parallax only on desktop; disable on mobile for performance */
          backgroundAttachment: 'fixed',
        }}
      />

      {/* extra overlay if desired */}
      <div className="absolute inset-0 bg-gradient-to-t
                      from-black/20 via-transparent to-transparent" />

      {/* content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
  {/* subtle backdrop just behind the text for perfect legibility */}
  <div className="bg-black/10 backdrop-blur-sm px-6 py-4 rounded-lg">
    <h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                 mb-4 text-[#f7f4ed]
                 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                 font-serif font-semibold tracking-[0.15em]"
    >
      ZUBAIR&nbsp;SAJJAD
    </h1>

    <p
      className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto
                 text-[#f7f4ed]/90 font-light leading-relaxed"
    >
      Where tradition embraces transformation.
    </p>

    <button
      className="mt-8 w-fit border border-[#f7f4ed]/80 px-8 py-3 rounded-md
                 text-[#f7f4ed] font-medium tracking-widest
                 hover:bg-[#f7f4ed] hover:text-[#20000d]
                 transition-colors duration-300"
    >
      EXPLORE
    </button>
  </div>
</div>

    </section>
  </div>
);

export default HeroSection;
