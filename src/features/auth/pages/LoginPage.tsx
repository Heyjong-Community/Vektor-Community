import { ArrowLeftIcon, ArrowRightIcon, Star } from 'lucide-react';
import { Link } from 'react-router';

const LoginPage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
      <div className='flex flex-col justify-between bg-linear-to-br from-blue-600 via-blue-800 to-blue-900 p-4 md:p-6 lg:p-10 xl:p-16'>
        {/* HEAD LEFT SIDE */}
        <div className='flex justify-between items-start'>
          {/* LOGO */}
          <div className='flex items-stretch gap-3'>
            <div className='size-12 bg-white/10 border border-white/20 flex items-center justify-center rounded-md'>
              <img src={`/logo/logo.png`} alt='Logo Vektor' className='size-12 object-contain' />
            </div>
            <div className=''>
              <h1 className='text-white text-xl font-bold'>Vektor Community</h1>
              <p className='text-white/60 text-xs font-medium'>Learn • Connect • Impact</p>
            </div>
          </div>
          <div className=''>
            {/* BADGE */}
            <span className='bg-white/10 border border-white/20 rounded-full py-1 px-3 flex items-center gap-1.5 text-white font-medium text-xs'>
              <div className='size-2 rounded-full bg-green-400'></div>
              Portal Anggota & Admin
            </span>
          </div>
        </div>
        {/* CENTER LEFT SIDE */}
        <div className=''>
          <span className='w-fit bg-white/10 border border-white/20 rounded-full py-1.5 px-3 text-xs font-medium text-white flex items-center gap-1.5'>
            ✨ Ruang Kolaboratif & Terapan
          </span>
          <h1 className='my-4 text-white font-extrabold text-5xl leading-12'>
            Selamat Datang <br /> Kembali 👋
          </h1>
          <p className='text-lg text-white/60 leading-7 xl:w-2/3'>
            Masuk ke akunmu dan lanjutkan perjalanan belajar, tonton video kurikulum, serta diskusikan tantangan dengan
            para mentor.
          </p>
          {/* Review Card */}
          <div className='mt-6 w-3/4 bg-white/10 rounded-xl p-5 border border-white/20 backdrop-blur-lg'>
            <div className='flex items-center gap-2.5'>
              <div className='flex items-center gap-1'>
                <Star fill='#FCD34D' className='size-3 text-[#FCD34D]' />
                <Star fill='#FCD34D' className='size-3 text-[#FCD34D]' />
                <Star fill='#FCD34D' className='size-3 text-[#FCD34D]' />
                <Star fill='#FCD34D' className='size-3 text-[#FCD34D]' />
                <Star fill='#FCD34D' className='size-3 text-[#FCD34D]' />
              </div>
              <p className='text-xs text-white'>Ulasan Anggota</p>
            </div>
            <div className='mt-2.5'>
              <p className='text-white text-base'>
                “Di sini tidak ada yang merasa paling pintar. Semua datang sebagai pembelajar, saling mengisi celah, dan
                pulang membawa pemahaman nyata.”
              </p>
            </div>
            <div className='mt-4 border-t border-white/10 pt-3'></div>
          </div>
        </div>
        {/* FOOT LEFT SIDE */}
        <div className='border-t border-white/10 w-3/4 pt-6'>
          <div className='grid grid-cols-3'>
            <div className='border-r border-white/10'>
              <h5 className='text-white font-bold text-2xl leading-8 text-center'>500+</h5>
              <p className='text-center text-white/60 text-xs font-medium'>Anngota Aktif</p>
            </div>
            <div className='border-x border-white/10'>
              <h5 className='text-white font-bold text-2xl leading-8 text-center'>12</h5>
              <p className='text-center text-white/60 text-xs font-medium'>kelas & Kurikulum</p>
            </div>
            <div className='border-l border-white/10'>
              <h5 className='text-white font-bold text-2xl leading-8 text-center'>340+</h5>
              <p className='text-center text-white/60 text-xs font-medium'>Video Pembelajaran</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between bg-white p-4 md:p-6 lg:p-10 xl:p-16'>
        {/* HEAD RIGHT SIDE */}
        <div className='flex justify-between items-start'>
          <Link to={'/'} className='flex items-center gap-2'>
            <ArrowLeftIcon className='size-4 text-gray-500' />
            <span className='text-gray-500 text-sm font-medium'>Kembali ke Beranda</span>
          </Link>
          <p className='text-sm text-gray-400'>
            Bantuan:{' '}
            <Link to={`#`} className='text-blue-600'>
              komunitas.vektor@gmail.com
            </Link>
          </p>
        </div>
        {/* CENTER RIGHT SIDE */}
        <div className='px-8 w-3/4 mx-auto'>
          <h1 className='text-black font-bold text-3xl leading-9'>Masuk ke Akun</h1>
          <p className='mt-1.5 text-sm text-black/70'>
            Belum punya akun? Hubungi pengurus komunitas untuk mendapatkan akses belajar.
          </p>
          <form action={() => alert('Submit Form')} className='mt-8 flex flex-col gap-4'>
            <div className='group-input'>
              <label htmlFor='' className='text-black font-medium text-sm'>
                Alamat Email <span className='text-red-600'>*</span>
              </label>
              <input type='text' className='block mt-2 w-full rounded-lg px-4 py-2.5 border border-slate-400' />
            </div>
            <div className='group-input'>
              <label htmlFor='' className='text-black font-medium text-sm'>
                Password <span className='text-red-600'>*</span>
              </label>
              <input
                type='password'
                className='block mt-2 w-full rounded-lg px-4 py-2.5 border border-slate-400'
                placeholder='********'
                // placeholder='••••••'
              />
            </div>
            <div className='flex items-center justify-between'></div>
            <button
              type='submit'
              className='rounded-lg bg-blue-600 py-3 w-full flex items-center justify-center gap-2.5'
            >
              <span className='text-sm text-white font-medium'>Masuk sekarang</span>
              <ArrowRightIcon className='size-4 text-white' />
            </button>
          </form>
        </div>
        {/* FOOT RIGHT SIDE */}
        <div className='border-t border-gray-300 pt-6 flex items-center justify-between'>
          <p className='text-gray-400 text-xs'>&copy;Vektor Community. All rights reserved.</p>
          <p className='text-gray-400 text-xs'>Privasi • Syarat & Ketentuan.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
