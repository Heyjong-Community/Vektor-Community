import { dummyCourses, TOPIC_CATEGORIES } from '@/data/courses';
import CardLearn from '../../../components/CardLearn';
import SearchFilterBar from '@/components/common/SearchFilter';
import { useMemo, useState } from 'react';

const LearningPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortBy, setSortBy] = useState<'default' | 'highest-rating' | 'most-reviewed'>('default');

  const filteredCourses = useMemo(() => {
    return dummyCourses
      .filter((course) => {
        const matchesSearch =
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.tutor.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'Semua' || course.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'highest-rating') return b.rating - a.rating;
        if (sortBy === 'most-reviewed') return b.reviewCount - a.reviewCount;
        return 0;
      });
  }, [searchQuery, selectedCategory, sortBy]);

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
          <SearchFilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          <div className='mt-6 flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar'>
            {TOPIC_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type='button'
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full px-4.5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-700 text-white shadow-md shadow-blue-700/25 -translate-y-0.5'
                      : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          {filteredCourses.length > 0 ? (
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filteredCourses.map((course) => (
                <CardLearn key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <div className='mt-8 text-center py-16 px-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50/50'>
              <p className='text-base font-semibold text-slate-800'>Kelas tidak ditemukan</p>
              <p className='text-xs text-slate-500 mt-1'>
                Coba gunakan kata kunci lain atau reset filter kategori yang dipilih.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default LearningPage;
