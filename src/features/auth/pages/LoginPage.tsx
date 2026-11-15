import { ArrowLeftIcon, ArrowRightIcon, AtSign, Eye, EyeOff, Lock, LockOpen, Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
      <div className='hidden md:flex flex-col justify-between bg-linear-to-br from-blue-600 via-blue-800 to-blue-900 p-4 md:p-6 lg:p-10 xl:p-16'>
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
          <div className='mt-6 w-3/4 bg-white/10 rounded-xl p-5 border border-white/20 backdrop-blur-lg shadow-lg'>
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
            <div className='mt-4 border-t border-white/10 pt-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2.5'>
                  <div className='size-8 bg-white/10 border border-white/20 rounded-full flex items-center justify-center'>
                    <p className='text-xs text-white font-bold'>TQ</p>
                  </div>
                  <div className=''>
                    <p className='text-xs font-medium text-white'>Taqi Mundzir Burhanudin</p>
                    <p className='text-[10px] text-white/50'>Mahasiswa UPNVJ</p>
                  </div>
                </div>
                <div className=''>
                  <span className='bg-white/10 border border-white/20 text-white py-0.5 px-2 rounded-sm text-[11px]'>
                    Member Batch 1
                  </span>
                </div>
              </div>
            </div>
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
        <div className='lg:px-8 w-full lg:w-3/4 mx-auto'>
          <h1 className='text-black font-bold text-3xl leading-9'>Masuk ke Akun</h1>
          <p className='mt-1.5 text-sm text-black/70'>
            Belum punya akun? Hubungi pengurus komunitas untuk mendapatkan akses belajar.
          </p>
          <form action={() => alert('Submit Form')} className='mt-8 flex flex-col gap-4'>
            <div className='group-input'>
              <label htmlFor='' className='text-black font-medium text-sm'>
                Alamat Email <span className='text-red-600'>*</span>
              </label>
              <div className='relative flex items-center'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
                  <AtSign className='h-5 w-5 text-slate-400' strokeWidth={1.75} />
                </div>
                <input
                  id='email'
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='nama@email.com'
                  className='w-full rounded-xl border border-slate-200 bg-[#f8fafc] py-3.5 pl-12 pr-4 text-base text-slate-800 placeholder-slate-400 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20'
                />
              </div>
            </div>
            <div className='group-input'>
              <label htmlFor='' className='text-black font-medium text-sm'>
                Password <span className='text-red-600'>*</span>
              </label>
              <div className='relative flex items-center'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
                  {showPassword ? (
                    <LockOpen className='h-5 w-5 text-slate-400' strokeWidth={1.75} />
                  ) : (
                    <Lock className='h-5 w-5 text-slate-400' strokeWidth={1.75} />
                  )}
                </div>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Masukkan kata sandi'
                  className='w-full rounded-xl border border-slate-200 bg-[#f8fafc] py-3.5 pl-12 pr-12 text-base text-slate-800 placeholder-slate-400 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Lihat kata sandi'}
                  className='absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600 focus:outline-none'
                >
                  {showPassword ? (
                    <EyeOff className='h-5 w-5' strokeWidth={1.75} />
                  ) : (
                    <Eye className='h-5 w-5' strokeWidth={1.75} />
                  )}
                </button>
              </div>
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
