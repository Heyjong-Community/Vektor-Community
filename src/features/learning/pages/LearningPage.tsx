const LearningPage = () => {
  return (
    <main>
      <section id='home' className='relative overflow-hidden bg-[#06132e] pt-28 text-white h-fit'>
        <div className='absolute inset-0 -z-10 bg-[linear-gradient(rgba(72,111,180,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(72,111,180,0.11)_1px,transparent_1px)] bg-size-[64px_64px] mask-[linear-gradient(to_bottom,black,transparent_90%)]' />
        <div className='absolute -left-40 top-20 -z-10 h-120 w-120 rounded-full bg-blue-600/20 blur-[120px]' />
        <div className='absolute -right-25 top-55 -z-10 h-125 w-125 rounded-full bg-cyan-400/10 blur-[130px]' />

        <div className='mx-auto h-fit w-full max-w-310 items-center gap-10 px-5 pb-20 sm:px-8 lg:px-10'>
          <div className='mb-6 flex justify-center items-center gap-3 text-xs font-bold tracking-[0.28em] text-blue-300'>
            <span className='h-px w-10 bg-blue-400' /> ROADMAP BELAJAR <span className='h-px w-10 bg-blue-400' />
          </div>
          <h1 className='font-display text-center text-[clamp(3.4rem,7vw,6.4rem)] font-semibold leading-[.92] tracking-[-0.055em]'>
            Bangun <span className='text-blue-400'>Fundamental</span>
          </h1>
          <p className='mt-8 mx-auto text-justify md:text-center hyphens-auto md:text-base lg:text-lg leading-8 text-slate-300 text-sm'>
            Bingung mulai belajar darimana? Atau bingung ngertiin code yang dibuat sama AI? Vektor hadir mengajak para
            programmer pemula maupun vibe coder untuk menguatkan pondasi software development agar bisa mengarahkan AI
            juga. Dari sekadar prompting, naik level jadi paham cara kerja sistemnya. Mulai langkah pertamamu bareng
            komunitas yang suportif dan terarah sekarang! 👇
          </p>
        </div>
      </section>
      <section className='px-5 py-24 sm:px-8 sm:py-32 lg:px-10'>
        <div className='mx-auto max-w-310'>
          <div className='flex items-center justify-between'>
            <input
              id='search'
              type='text'
              required
              placeholder='Cari kelas'
              className='w-96 rounded-xl border border-slate-200 bg-[#f8fafc] py-3.5 pl-3 pr-4 text-base text-slate-800 placeholder-slate-400 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20'
            />
            <div className=''>
              <button>Filter</button>
            </div>
          </div>
          <div className='mt-7 flex items-stretch gap-4'>
            <button
              type='button'
              className='text-sm text-black px-4 py-1.5 bg-slate-100 hover:bg-blue-500 hover:text-white duration-300 transition hover:-translate-y-1 hover:shadow-blue-500/50 hover:shadow-lg rounded-full'
            >
              Semua
            </button>
            <button
              type='button'
              className='text-sm text-black px-4 py-1.5 bg-slate-100 hover:bg-blue-500 hover:text-white duration-300 transition hover:-translate-y-1 rounded-full hover:shadow-blue-500/50 hover:shadow-lg'
            >
              HTML
            </button>
            <button
              type='button'
              className='text-sm text-black px-4 py-1.5 bg-slate-100 hover:bg-blue-500 hover:text-white duration-300 transition hover:-translate-y-1 rounded-full hover:shadow-blue-500/50 hover:shadow-lg'
            >
              CSS
            </button>
            <button
              type='button'
              className='text-sm text-black px-4 py-1.5 bg-slate-100 hover:bg-blue-500 hover:text-white duration-300 transition hover:-translate-y-1 rounded-full hover:shadow-blue-500/50 hover:shadow-lg'
            >
              Javascript
            </button>
            <button
              type='button'
              className='text-sm text-black px-4 py-1.5 bg-slate-100 hover:bg-blue-500 hover:text-white duration-300 transition hover:-translate-y-0.5 rounded-full hover:shadow-blue-500/50 hover:shadow-lg'
            >
              TailwindCSS
            </button>
          </div>
          <div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-900 h-60'></div>
        </div>
      </section>
    </main>
  );
};

export default LearningPage;
