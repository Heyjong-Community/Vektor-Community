import { ArrowRight, ArrowUpRight, Heart, Play, Target, Users } from 'lucide-react';
import Reveal from '../../../components/common/Reveal';
import Stat from '../../../components/common/Stat';
import { galleryCards } from '../../../data/galleryCards';
import { missions } from '../../../data/missons';
import { programs } from '../../../data/program';
import { statCards } from '../../../data/statCards';
import { href } from 'react-router';

const HomePage = () => {
  return (
    <main>
      <section
        id='home'
        className='relative isolate min-h-190 overflow-hidden bg-[#06132e] pt-28 text-white sm:min-h-205'
      >
        <div className='absolute inset-0 -z-10 bg-[linear-gradient(rgba(72,111,180,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(72,111,180,0.11)_1px,transparent_1px)] bg-size-[64px_64px] mask-[linear-gradient(to_bottom,black,transparent_90%)]' />
        <div className='absolute -left-40 top-20 -z-10 h-120 w-120 rounded-full bg-blue-600/20 blur-[120px]' />
        <div className='absolute -right-25 top-55 -z-10 h-125 w-125 rounded-full bg-cyan-400/10 blur-[130px]' />

        <div className='mx-auto grid min-h-162.5 w-full max-w-310 items-center gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-10'>
          <div
            data-reveal
            className='max-w-2xl opacity-0 -translate-x-8 transition-all duration-1000 ease-out data-[visible=true]:translate-x-0 data-[visible=true]:opacity-100'
          >
            <div className='mb-6 flex items-center gap-3 text-xs font-bold tracking-[0.28em] text-blue-300'>
              <span className='h-px w-10 bg-blue-400' /> IT COMMUNITY
            </div>

            <h1 className='font-display text-[clamp(3.4rem,7vw,6.4rem)] font-semibold leading-[.92] tracking-[-0.055em]'>
              Bersama
              <br />
              <span className='text-blue-400'>Membangun</span>
              <br />
              Masa Depan
              <br />
              <span className='text-blue-400'>Digital.</span>
            </h1>

            <p className='mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg'>
              Vektor adalah komunitas IT yang menjadi wadah bagi praktisi dan pembelajar untuk tumbuh bersama, berkarya,
              dan memberikan dampak nyata bagi masyarakat dengan berlandaskan nilai-nilai Islam.
            </p>

            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSc2kdipGtaCzMt4NS4xl3JsstqWOUi9dIJhha-A1hLbEnB3yA/viewform'
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-950/30 transition hover:-translate-y-1 hover:bg-blue-500'
              >
                Bergabung Sekarang <ArrowUpRight size={16} />
              </a>

              <button
                // onClick={() => nav('tentang')}>
                className='flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10'
              >
                <Play size={16} /> Kenali Vektor
              </button>
            </div>
          </div>

          <div
            data-reveal
            className='relative mx-auto h-110 w-full max-w-130 opacity-0 translate-x-8 transition-all duration-1000 ease-out data-[visible=true]:translate-x-0 data-[visible=true]:opacity-100'
          >
            <div className='absolute inset-[10%] rounded-full border border-blue-300/10' />
            <div className='absolute inset-[18%] rounded-full border border-blue-300/10' />
            <div className='absolute inset-[27%] rounded-full border border-blue-300/10' />
            <div className='absolute inset-[7%] animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-blue-400/20' />
            <div className='absolute left-1/2 top-1/2 grid h-64 w-64 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-blue-500/10 shadow-[0_0_100px_rgba(37,99,235,.28)] backdrop-blur-sm'>
              <div className='grid h-44 w-44 place-items-center rounded-full border border-blue-300/20 bg-[#071b3f]/90 shadow-[inset_0_0_60px_rgba(59,130,246,.14)]'>
                <img
                  src='/logo/logo.png'
                  alt='Vektor'
                  className='size-48 object-contain drop-shadow-[0_0_30px_rgba(96,165,250,.45)]'
                />
              </div>
            </div>

            <div className='absolute inset-x-0 bottom-2 flex justify-center gap-8 text-[10px] font-bold tracking-[.3em] text-slate-500 sm:gap-12'>
              <span>LEARN</span>
              <span>CONNECT</span>
              <span>IMPACT</span>
            </div>
          </div>
        </div>
      </section>

      <section id='tentang' className='px-5 py-24 sm:px-8 sm:py-32 lg:px-10'>
        <div className='mx-auto grid max-w-310 items-center gap-14 lg:grid-cols-2 lg:gap-20'>
          <Reveal direction='left'>
            <div className='text-xs font-bold tracking-[.25em] text-blue-600'>TENTANG VEKTOR</div>
            <h2 className='mt-4 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
              Lebih dari sekadar <span className='text-blue-600'>komunitas IT.</span>
            </h2>
            <p className='mt-7 text-xl leading-9 text-slate-600'>
              Vektor hadir sebagai rumah bagi siapa saja yang ingin belajar, berkembang, dan berkarya di bidang
              teknologi.
            </p>
            <p className='mt-5 max-w-xl leading-8 text-slate-500'>
              Kami percaya bahwa teknologi bukan hanya tentang kode, tetapi juga tentang manusia, nilai, kolaborasi, dan
              bagaimana sebuah karya dapat memberikan manfaat bagi kehidupan.
            </p>

            <div className='mt-9 grid grid-cols-3 gap-4'>
              {[
                { icon: Users, title: 'Kolaboratif', text: 'Bersama lebih kuat' },
                { icon: Heart, title: 'Inklusif', text: 'Terbuka untuk semua' },
                { icon: Target, title: 'Berdampak', text: 'Teknologi untuk kebaikan' },
              ].map(({ icon: IconComponent, title, text }) => (
                <div key={title} className='rounded-2xl border border-slate-200 p-4'>
                  <div className='mb-4 grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600'>
                    <IconComponent size={20} />
                  </div>
                  <h3 className='font-display text-sm font-bold text-slate-900'>{title}</h3>
                  <p className='mt-1 text-xs leading-5 text-slate-500'>{text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction='right' className='relative'>
            <div className='relative overflow-hidden rounded-4xl bg-[#06132e] p-8 shadow-2xl shadow-blue-950/15 sm:p-12'>
              <div className='absolute inset-0 bg-[linear-gradient(rgba(96,165,250,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.08)_1px,transparent_1px)] bg-size-[32px_32px]' />
              <div className='relative flex min-h-90 flex-col items-center justify-center text-center'>
                <img src='/logo/logo.png' alt='Vektor' className='size-36 object-contain' />
                <strong className='mt-5 font-display text-3xl tracking-[.18em] text-white'>VEKTOR</strong>
                <span className='mt-2 text-[10px] font-semibold tracking-[.3em] text-blue-300'>
                  LEARN · CONNECT · IMPACT
                </span>
              </div>
            </div>

            <div className='relative -mt-5 ml-auto mr-5 max-w-sm rounded-2xl border border-blue-100 bg-white p-6 shadow-xl'>
              <span className='font-display text-5xl leading-none text-blue-200'>“</span>
              <p className='-mt-1 text-sm font-medium leading-7 text-slate-700'>
                Teknologi adalah amanah, dan karya adalah bentuk ibadah ketika memberi manfaat bagi sesama.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className='relative overflow-hidden bg-slate-50 px-5 py-24 sm:px-8 sm:py-28 lg:px-10'>
        <div className='absolute right-[-10%] top-0 h-full w-1/2 bg-[radial-gradient(circle,rgba(37,99,235,.08),transparent_65%)]' />
        <div className='relative mx-auto grid max-w-310 gap-10 lg:grid-cols-[.6fr_1.4fr] lg:gap-20'>
          {/* <Reveal direction='left'>
            <div>
              <div className='text-xs font-bold tracking-[.25em] text-blue-600'>VISI</div>
              <div className='font-display text-[clamp(10rem,22vw,18rem)] font-semibold leading-[.7] -tracking-widest text-blue-100'>
                V
              </div>
            </div>
          </Reveal> */}
          <Reveal direction='left'>
            <div className='flex flex-col'>
              <div className='text-xs font-bold tracking-[.25em] text-blue-600 mb-2'>VISI</div>
              <img
                src='/logo/logo.png'
                alt='Vektor Logo'
                className='h-[clamp(10rem,22vw,18rem)] w-auto object-contain object-left opacity-90 filter drop-shadow-md'
              />
            </div>
          </Reveal>

          <Reveal direction='right'>
            <div className='max-w-4xl pt-2'>
              <div className='font-display text-6xl leading-none text-blue-200'>“</div>
              <blockquote className='font-display text-3xl font-medium leading-[1.35] tracking-tight text-slate-800 sm:text-4xl'>
                Menjadi wadah bertumbuh bersama bagi praktisi dan pembelajar IT untuk menghasilkan karya digital solutif
                yang berdampak nyata, berdaya guna bagi masyarakat, dan berlandaskan nilai-nilai Islam.
              </blockquote>
              <div className='mt-8 h-px w-24 bg-blue-600' />
            </div>
          </Reveal>
        </div>
      </section>

      <section id='visi-misi' className='px-5 py-24 sm:px-8 sm:py-32 lg:px-10'>
        <div className='mx-auto max-w-310'>
          <Reveal>
            <div className='text-xs font-bold tracking-[.25em] text-blue-600'>MISI</div>
            <h2 className='mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
              Lima langkah untuk <span className='text-blue-600'>memberikan dampak.</span>
            </h2>
          </Reveal>

          <div className='mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {missions.map((mission) => {
              const IconComponent = mission.icon;
              return (
                <article
                  key={mission.no}
                  data-reveal
                  className='group rounded-3xl border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10'
                >
                  <div className='flex items-start justify-between'>
                    <div className='grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600'>
                      <IconComponent className='size-5 text-blue-600 group-hover:text-white' />
                    </div>
                    <span className='font-display text-4xl font-semibold text-slate-100'>{mission.no}</span>
                  </div>
                  <h3 className='mt-8 font-display text-xl font-bold text-slate-900'>{mission.title}</h3>
                  <p className='mt-3 text-sm leading-7 text-slate-500'>{mission.text}</p>
                </article>
              );
            })}

            <article
              data-reveal
              className='relative overflow-hidden rounded-3xl bg-[#06132e] p-8 text-white shadow-2xl shadow-blue-950/15 md:col-span-2 lg:col-span-1'
            >
              <div className='absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-600/20 blur-2xl' />
              <img src='/vektor-logo.png' alt='' className='absolute -bottom-8 -right-8 h-48 w-48 opacity-10' />

              <div className='relative flex h-full min-h-62.5 flex-col justify-between'>
                <div>
                  <div className='font-display text-6xl leading-none text-blue-400'>“</div>
                  <strong className='font-display text-3xl leading-tight'>
                    Good People.
                    <br />
                    Build Great Things.
                  </strong>
                </div>

                <div>
                  <div className='mb-3 h-px w-12 bg-blue-400' />
                  <span className='text-[10px] font-semibold uppercase tracking-[.3em] text-slate-400'>
                    Learn · Connect · Impact
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className='bg-[#06132e] px-5 py-16 text-white sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-310 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {statCards.map((item) => (
            <Stat key={item.label} icon={item.icon} number={item.number} label={item.label} />
          ))}
        </div>
      </section>

      <section id='program' className='bg-slate-50 px-5 py-24 sm:px-8 sm:py-32 lg:px-10'>
        <div className='mx-auto max-w-310'>
          <Reveal>
            <div className='text-xs font-bold tracking-[.25em] text-blue-600'>PROGRAM</div>
            <h2 className='mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
              Ruang untuk belajar, <span className='text-blue-600'>berkarya,</span>
              <br /> dan berdampak.
            </h2>
          </Reveal>

          <div className='mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {programs.map((program, index) => {
              const IconComponent = program.icon;

              return (
                <Reveal key={program.label} direction='up'>
                  <article
                    className={`group relative min-h-97.5 overflow-hidden rounded-4xl p-7 text-white shadow-xl shadow-slate-950/10 ${index % 2 === 0
                      ? 'bg-linear-to-br from-[#0a2250] via-blue-800 to-blue-500'
                      : 'bg-linear-to-br from-[#071a39] via-slate-800 to-blue-700'
                      }`}
                  >
                    <div className='absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,.09)_45%,transparent_70%)] opacity-70' />

                    <div className='relative flex h-full flex-col justify-between'>
                      <div className='flex items-start justify-between'>
                        <div className='grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur'>
                          <IconComponent size={24} />
                        </div>
                        <span className='text-[9px] font-bold tracking-[.25em] text-white/50'>0{index + 1}</span>
                      </div>

                      <div>
                        <div className='mb-5 text-[9px] font-bold tracking-[.3em] text-blue-200'>{program.label}</div>
                        <h3 className='font-display text-2xl font-semibold leading-tight'>{program.title}</h3>
                        <p className='mt-3 max-w-52.5 text-sm leading-6 text-white/70'>{program.text}</p>
                        <div className='mt-7 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 transition group-hover:translate-x-1 group-hover:bg-white group-hover:text-blue-700'>
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id='galeri' className='px-5 py-24 sm:px-8 sm:py-32 lg:px-10'>
        <div className='mx-auto max-w-310'>
          <Reveal>
            <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
              <div>
                <div className='text-xs font-bold tracking-[.25em] text-blue-600'>COMMUNITY LIFE</div>
                <h2 className='mt-4 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
                  Tempat ide bertemu <span className='text-blue-600'>orang-orang.</span>
                </h2>
              </div>

              <button
                // onClick={() => nav('kontak')}
                className='flex w-fit items-center gap-2 border-b border-slate-300 pb-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600'
              >
                Ikuti perjalanan Vektor <ArrowUpRight size={17} />
              </button>
            </div>
          </Reveal>

          <div className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]'>
            {galleryCards.map((card, index) => (
              <Reveal
                key={card.title}
                direction={index === 0 ? 'left' : index === 2 ? 'right' : 'up'}
                className={index === 0 ? 'lg:row-span-2' : ''}
              >
                <div
                  className={`group relative overflow-hidden rounded-4xl bg-linear-to-br ${card.gradient} ${index === 0 ? 'min-h-140' : 'min-h-67.5'
                    }`}
                >
                  <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,.22),transparent_25%),linear-gradient(135deg,transparent_35%,rgba(255,255,255,.08)_35%,transparent_65%)]' />

                  <div className='absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent p-7 pt-24 text-white'>
                    <div className='text-[9px] font-bold tracking-[.3em] text-blue-200'>{card.label}</div>
                    <strong className='mt-2 block font-display text-xl'>{card.title}</strong>
                    <span className='mt-1 block text-sm text-white/65'>{card.text}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id='kontak'
        className='relative overflow-hidden bg-[#06132e] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10'
      >
        <div className='absolute inset-0 bg-[linear-gradient(rgba(96,165,250,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.07)_1px,transparent_1px)] bg-size-[54px_54px]' />
        <div className='absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[100px]' />

        <div className='relative mx-auto grid max-w-310 items-center gap-14 lg:grid-cols-[1.25fr_.75fr]'>
          <Reveal direction='left'>
            <div>
              <div className='text-xs font-bold tracking-[.25em] text-blue-300'>BERGABUNG DENGAN VEKTOR</div>
              <h2 className='mt-5 font-display text-5xl font-semibold tracking-tight sm:text-6xl'>
                Siap tumbuh dan
                <br />
                <span className='text-blue-400'>berkarya bersama?</span>
              </h2>
              <p className='mt-6 max-w-xl text-lg leading-8 text-slate-300'>
                Temukan ruang untuk belajar, berkolaborasi, dan menciptakan karya digital yang memberikan manfaat nyata.
              </p>
              <a
                className='mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-950/30 transition hover:-translate-y-1 hover:bg-blue-500'
                href='https://docs.google.com/forms/d/e/1FAIpQLSc2kdipGtaCzMt4NS4xl3JsstqWOUi9dIJhha-A1hLbEnB3yA/viewform'
              >
                Bergabung Sekarang <ArrowRight />
              </a>
            </div>
          </Reveal>

          <Reveal direction='right'>
            <div className='relative mx-auto grid h-80 w-80 place-items-center rounded-full border border-blue-300/10 bg-blue-500/5 shadow-[0_0_100px_rgba(37,99,235,.18)] sm:h-96 sm:w-96'>
              <div className='absolute inset-7 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-blue-400/20' />
              <img
                src='/logo/logo.png'
                alt='Vektor'
                className='size-72 object-contain drop-shadow-[0_0_45px_rgba(96,165,250,.35)]'
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
