import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Award, BookOpen, CheckCircle2, Clock, PlayCircle } from 'lucide-react';
import StarRating from './common/StarRating';

interface CardLearnProps {
  imageUrl?: string;
  category?: string;
  tutor?: string;
  tutorRole?: string;
  title?: string;
  description?: string;
  rating?: number;
  reviewCount?: number;
  videoCount?: number;
  duration?: string;
  level?: string;
  highlights?: string[];
  syllabus?: { title: string; duration: string }[];
}

const CardLearn = ({
  imageUrl,
  category = 'Programming',
  tutor = 'Taqi Mundzir B',
  tutorRole = 'Communication & Public Speaking Mentor',
  title = 'Dasar Public Speaking 101: Bicara Runtut & Percaya Diri',
  description = 'Kuasai teknik mengatasi demam panggung, menyusun opening memukau, dan artikulasi vokal yang jelas untuk presentasi profesional maupun berbicara di depan umum.',
  rating = 4.9,
  reviewCount = 32,
  videoCount = 8,
  duration = '2j 45m',
  level = 'Pemula',
  highlights = [
    'Mengatasi rasa gugup dan demam panggung dalam 3 menit pertama',
    'Struktur menyusun materi agar runtut dan mudah dipahami audiens',
    'Teknik pernapasan, intonasi, dan bahasa tubuh yang meyakinkan',
  ],
  syllabus = [
    { title: '1. Mindset & Mengatasi Demam Panggung', duration: '18m' },
    { title: '2. Merancang Opening Hook yang Memukau', duration: '24m' },
    { title: '3. Teknik Artikulasi & Intonasi Vokal', duration: '30m' },
    { title: '4. Studi Kasus: Presentasi & Q&A Session', duration: '25m' },
  ],
}: CardLearnProps) => {
  const clampedRating = Math.max(0, Math.min(5, rating));
  const fillPercentage = (clampedRating / 5) * 100;

  const initials = tutor
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');

  return (
    <div
      id='class-card'
      className='rounded-xl bg-white drop-shadow-lg drop-shadow-blue-300/40 overflow-hidden hover:drop-shadow-xl hover:drop-shadow-blue-300/80 transition-all duration-200'
    >
      <div className='relative bg-yellow-400 h-52 w-full overflow-hidden'>
        {imageUrl && <img src={imageUrl} alt={title} className='w-full h-full object-cover' />}
        <div className='absolute top-3 left-3 rounded py-1 px-2.5 bg-blue-800 w-fit'>
          <p className='text-[10px] text-white font-semibold'>{category}</p>
        </div>
      </div>
      <div className='p-6'>
        <div id='tutor' className='flex items-center gap-2.5'>
          <div className='size-7 bg-purple-200 rounded-full flex items-center justify-center'>
            <p className='text-purple-600 uppercase text-xs font-semibold'>{initials}</p>
          </div>
          <p className='text-xs text-[#434655]'>{tutor}</p>
        </div>
        <h3 className='my-2.5 font-semibold text-xl leading-7 text-black line-clamp-2'>{title}</h3>
        <p className='text-sm text-[#434655] mb-4.5 line-clamp-2'>{description}</p>
        <div className='flex items-center gap-2'>
          <StarRating rating={fillPercentage} reviewCount={reviewCount} />
          <p>
            <span className='text-xs font-bold'>{rating.toFixed(1)}</span>{' '}
            <span className='text-[#737686] text-xs'>({reviewCount} Ulasan)</span>
          </p>
        </div>
        <div className='mt-7.5 flex items-center justify-between'>
          <p className='text-[#434655] text-xs font-semibold'>
            <span>{videoCount} Video</span> • <span>{duration}</span>
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <button className='flex items-center gap-1 text-blue-700 font-semibold text-xs cursor-pointer hover:underline'>
                Lihat Kelas
              </button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-xl p-0 overflow-hidden rounded-2xl border-0 gap-0'>
              <div className='relative bg-yellow-400 h-44 w-full overflow-hidden'>
                {imageUrl && <img src={imageUrl} alt={title} className='w-full h-full object-cover' />}
                <div className='absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent' />
                <div className='absolute top-4 left-6 flex items-center gap-2'>
                  <span className='rounded py-1 px-2.5 bg-blue-800 text-[11px] text-white font-semibold'>
                    {category}
                  </span>
                  <span className='rounded py-1 px-2.5 bg-white/90 text-[11px] text-slate-800 font-semibold'>
                    Level: {level}
                  </span>
                </div>
              </div>
              <div className='p-6 max-h-[75vh] overflow-y-auto space-y-5'>
                <DialogHeader className='text-left space-y-2'>
                  <DialogTitle className='text-xl font-bold leading-snug text-slate-900'>{title}</DialogTitle>
                  <DialogDescription className='text-sm text-[#434655] leading-relaxed'>
                    {description}
                  </DialogDescription>
                </DialogHeader>
                <div className='flex flex-wrap items-center justify-between gap-3 py-3 px-4 rounded-xl bg-slate-50 border border-slate-100'>
                  <div className='flex items-center gap-3'>
                    <div className='size-9 bg-purple-200 rounded-full flex items-center justify-center shrink-0'>
                      <p className='text-purple-600 uppercase text-xs font-bold'>{initials}</p>
                    </div>
                    <div>
                      <p className='text-xs font-semibold text-slate-900'>{tutor}</p>
                      <p className='text-[11px] text-[#737686]'>{tutorRole}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <StarRating rating={fillPercentage} reviewCount={reviewCount} />
                    <span className='text-xs font-bold text-slate-900'>{rating.toFixed(1)}</span>
                    <span className='text-xs text-[#737686]'>({reviewCount})</span>
                  </div>
                </div>
                <div className='grid grid-cols-3 gap-2.5 text-center'>
                  <div className='p-2.5 rounded-lg bg-blue-50/70 text-blue-900'>
                    <PlayCircle className='size-4 mx-auto mb-1 text-blue-700' />
                    <p className='text-xs font-semibold'>{videoCount} Video Materi</p>
                  </div>
                  <div className='p-2.5 rounded-lg bg-blue-50/70 text-blue-900'>
                    <Clock className='size-4 mx-auto mb-1 text-blue-700' />
                    <p className='text-xs font-semibold'>Total {duration}</p>
                  </div>
                  <div className='p-2.5 rounded-lg bg-blue-50/70 text-blue-900'>
                    <Award className='size-4 mx-auto mb-1 text-blue-700' />
                    <p className='text-xs font-semibold'>E-Sertifikat</p>
                  </div>
                </div>
                <div>
                  <h4 className='text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5'>
                    Yang Akan Kamu Pelajari
                  </h4>
                  <ul className='space-y-2'>
                    {highlights.map((item, idx) => (
                      <li key={idx} className='flex items-start gap-2 text-xs text-[#434655]'>
                        <CheckCircle2 className='size-4 text-emerald-600 shrink-0 mt-0.5' />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className='text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5'>
                    <BookOpen className='size-3.5' /> Pratinjau Materi
                  </h4>
                  <div className='divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden'>
                    {syllabus.map((item, idx) => (
                      <div key={idx} className='flex items-center justify-between px-3.5 py-2.5 bg-white text-xs'>
                        <span className='text-slate-700 font-medium'>{item.title}</span>
                        <span className='text-[#737686] shrink-0 ml-2'>{item.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='pt-2 flex items-center justify-end gap-2.5 border-t border-slate-100'>
                  <DialogClose asChild>
                    <button className='px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer transition'>
                      Tutup
                    </button>
                  </DialogClose>
                  <button className='px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 cursor-pointer transition shadow-sm'>
                    Mulai Belajar Sekarang
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default CardLearn;
