import { Mail, MessageSquareMore } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { NAV_ITEMS } from '../../data/nav-items';
import Logo from './Logo';

const Footer = ({ onNavigate }: { onNavigate: (id: string) => void }) => {
  return (
    <footer className='bg-[#030b1c] px-5 py-16 text-slate-300 sm:px-8 lg:px-10'>
      <div className='mx-auto grid max-w-310 gap-12 lg:grid-cols-[1.4fr_.6fr_1fr]'>
        <div>
          <Logo light />
          <p className='mt-6 max-w-sm text-sm leading-7 text-slate-500'>
            Bersama membangun masa depan digital yang lebih baik, berguna, dan berdampak nyata bagi masyarakat.
          </p>

          <div className='mt-6 flex gap-2'>
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>

        <div>
          <h3 className='font-display font-semibold text-white'>Menu</h3>
          <div className='mt-5 flex flex-col items-start gap-3'>
            {NAV_ITEMS.map(([id, label]) => (
              <button
                key={id}
                type='button'
                onClick={() => onNavigate(id)}
                className='text-sm text-slate-500 transition hover:text-white'
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className='font-display font-semibold text-white'>Komunitas IT Vektor</h3>
          <div className='mt-5 space-y-4 text-sm text-slate-500'>
            <div className='flex items-center gap-3'>
              <Mail name='mail' size={18} />
              <a className='hover:text-white' href='mailto:komunitas.vektor@gmail.com'>
                komunitas.vektor@gmail.com
              </a>
            </div>

            <div className='flex items-center gap-3'>
              <MessageSquareMore name='message' size={18} />
              <span>Terbuka untuk kolaborasi</span>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto mt-12 flex max-w-310 flex-col justify-between gap-3 border-t border-white/5 pt-6 text-[11px] font-medium uppercase tracking-[.18em] text-slate-600 sm:flex-row'>
        <span>© {new Date().getFullYear()} Vektor. All rights reserved.</span>
        <span>Powered By Heyjong.</span>
      </div>
    </footer>
  );
};

export default Footer;
