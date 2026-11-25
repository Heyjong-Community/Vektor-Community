import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'; // Opsional jika pakai Shadcn UI
import { Check, Search, SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';

interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: 'default' | 'highest-rating' | 'most-reviewed';
  onSortChange: (sort: 'default' | 'highest-rating' | 'most-reviewed') => void;
  categories?: string[];
}

const SearchFilterBar = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  categories = ['Semua', 'Programming', 'Soft Skill', 'UI/UX Design', 'Data & Bisnis', 'Digital Marketing'],
}: SearchFilterBarProps) => {
  const [openFilter, setOpenFilter] = useState(false);

  const activeFilterCount = (selectedCategory !== 'Semua' ? 1 : 0) + (sortBy !== 'default' ? 1 : 0);

  const handleReset = () => {
    onCategoryChange('Semua');
    onSortChange('default');
  };

  return (
    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8'>
      <div className='relative w-full sm:w-96'>
        <Search className='size-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none' />
        <input
          id='search'
          type='text'
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder='Cari kelas atau nama mentor...'
          className='w-full rounded-xl border border-slate-200 bg-[#f8fafc] py-3 pl-10 pr-9 text-sm text-slate-800 placeholder-slate-400 transition-all focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-3 focus:ring-blue-500/15'
        />
        {searchQuery && (
          <button
            type='button'
            onClick={() => onSearchChange('')}
            aria-label='Hapus pencarian'
            className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-0.5 rounded-full hover:bg-slate-200/60 transition'
          >
            <X className='size-3.5' />
          </button>
        )}
      </div>

      <div className='flex items-center gap-2 self-end sm:self-auto'>
        <Popover open={openFilter} onOpenChange={setOpenFilter}>
          <PopoverTrigger asChild>
            <button
              type='button'
              className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all cursor-pointer ${
                activeFilterCount > 0
                  ? 'border-blue-600 bg-blue-50/70 text-blue-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <SlidersHorizontal className='size-4' />
              <span>Filter</span>
              {activeFilterCount > 0 && (
                <span className='ml-0.5 flex size-5 items-center justify-center rounded-full bg-blue-700 text-[11px] font-bold text-white'>
                  {activeFilterCount}
                </span>
              )}
            </button>
          </PopoverTrigger>

          <PopoverContent align='end' className='w-72 p-4 rounded-2xl border-slate-100 shadow-xl space-y-4'>
            <div>
              <div className='flex items-center justify-between mb-2'>
                <p className='text-xs font-bold uppercase tracking-wider text-slate-500'>Kategori</p>
                {activeFilterCount > 0 && (
                  <button
                    type='button'
                    onClick={handleReset}
                    className='text-xs font-semibold text-blue-700 hover:underline cursor-pointer'
                  >
                    Reset
                  </button>
                )}
              </div>
              <div className='flex flex-wrap gap-1.5'>
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type='button'
                      onClick={() => onCategoryChange(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                        isSelected
                          ? 'bg-blue-700 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className='pt-3 border-t border-slate-100'>
              <p className='text-xs font-bold uppercase tracking-wider text-slate-500 mb-2'>Urutkan Berdasarkan</p>
              <div className='space-y-1'>
                {[
                  { value: 'default', label: 'Paling Relevan' },
                  { value: 'highest-rating', label: 'Rating Tertinggi' },
                  { value: 'most-reviewed', label: 'Ulasan Terbanyak' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type='button'
                    onClick={() => onSortChange(option.value as typeof sortBy)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                      sortBy === option.value
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{option.label}</span>
                    {sortBy === option.value && <Check className='size-3.5 text-blue-700' />}
                  </button>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default SearchFilterBar;
