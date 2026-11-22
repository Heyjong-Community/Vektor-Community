import { Star } from 'lucide-react';
import React from 'react';

interface CardLearnProps {
  ImageUrl: string;
  category: string;
  tutor: string;
  title: string;
  description: string;
}

// const CardLearn = ({ ImageUrl, category, tutor, title, description }: CardLearnProps) => {
const CardLearn = () => {
  return (
    <div id='class-card' className='rounded-xl'>
      <div className='relative bg-yellow-400 rounded-t-xl h-52 w-full'>
        <div className='absolute top-3 left-3 rounded py-1 px-2.5 bg-blue-800 w-fit'>
          <p className='text-[10px] text-white font-semibold'>Programming</p>
        </div>
      </div>
      <div className='p-6 bg-white drop-shadow-lg drop-shadow-blue-300/40 rounded-b-xl'>
        <div id='tutor' className='flex items-center gap-2.5'>
          <div className='size-7 bg-purple-300 rounded-full flex items-center justify-center'>
            <p className='text-purple-500 uppercase text-xs'>TQ</p>
          </div>
          <p className='text-xs text-[#434655]'>Taqi Mundzir B</p>
        </div>
        <h3 className='my-2.5 font-semibold text-xl leading-7 text-black'>
          Dasar Public Speaking 101: Bicara Runtut & Percaya Diri
        </h3>
        <p className='text-sm text-[#434655] mb-4.5 '>
          Kuasai teknik mengatasi demam panggung, menyusun opening memukau, dan artikulasi vokal…
        </p>
        <div className='flex items-center gap-2'>
          <div id='stars' className='flex items-center gap-0.5'>
            <Star fill='#F4D006' stroke='none' className='size-4' />
            <Star fill='#F4D006' stroke='none' className='size-4' />
            <Star fill='#F4D006' stroke='none' className='size-4' />
            <Star fill='#F4D006' stroke='none' className='size-4' />
          </div>
          <div className=''>
            <p>
              <span className='text-xs font-bold'>4.9</span> <span className='text-[#737686] text-xs'>(32 Ulasan)</span>
            </p>
          </div>
        </div>
        <div className='mt-7.5 flex items-center justify-between'>
          <div className=''>
            <p className='text-[#434655] text-xs font-semibold'>
              <span>8 Video</span> • <span>2j 45m</span>
            </p>
          </div>
          <button className='flex items-center gap-1 text-blue-700 font-semibold text-xs'>Lihat Kelas</button>
        </div>
      </div>
    </div>
  );
};

export default CardLearn;
