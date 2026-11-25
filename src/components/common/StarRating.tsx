import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  showScore?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating = ({ rating, reviewCount, showScore = true, size = 'sm' }: StarRatingProps) => {
  // Pastikan angka selalu aman di rentang 0 - 5
  const clampedRating = Math.max(0, Math.min(5, rating));
  const fillPercentage = (clampedRating / 5) * 100;

  // Variasi ukuran bintang
  const sizeClass = {
    sm: 'size-4',
    md: 'size-5',
    lg: 'size-6',
  }[size];

  return (
    <div className='inline-flex items-center gap-2'>
      {/* Container Bintang 2 Lapis */}
      <div
        className='relative inline-flex items-center'
        aria-label={`Rating ${clampedRating.toFixed(1)} dari 5 bintang`}
      >
        {/* Lapisan 1: Bintang Kosong (Abu-abu) */}
        <div className='flex items-center gap-0.5'>
          {[...Array(5)].map((_, i) => (
            <Star key={`empty-${i}`} fill='#E2E8F0' stroke='none' className={`${sizeClass} shrink-0`} />
          ))}
        </div>

        {/* Lapisan 2: Bintang Terisi (Kuning) */}
        <div
          className='absolute top-0 left-0 flex items-center gap-0.5 overflow-hidden'
          style={{ width: `${fillPercentage}%` }}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={`filled-${i}`} fill='#F4D006' stroke='none' className={`${sizeClass} shrink-0`} />
          ))}
        </div>
      </div>

      {/* Angka Rating & Jumlah Ulasan (Opsional) */}
      {showScore && (
        <p className='text-xs'>
          <span className='font-bold text-slate-900'>{clampedRating.toFixed(1)}</span>
          {reviewCount !== undefined && <span className='text-[#737686] ml-1'>({reviewCount} Ulasan)</span>}
        </p>
      )}
    </div>
  );
};

export default StarRating;
