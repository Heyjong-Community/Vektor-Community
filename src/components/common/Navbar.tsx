import { ArrowUpRight, Menu, X } from 'lucide-react';
import { type Dispatch, type SetStateAction } from 'react';
import { NAV_ITEMS } from '../../data/nav-items';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  onNavigate: (id: string) => void;
}

const Navbar = ({ scrolled, menuOpen, setMenuOpen, onNavigate }: NavbarProps) => {
  const nav = (id: string) => {
    setMenuOpen(false);
    onNavigate(id);
  };
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200/80 bg-white/90 shadow-lg shadow-slate-950/5 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className='mx-auto flex h-19 w-full max-w-310 items-center justify-between px-5 sm:px-8 lg:px-10'>
        <button type='button' onClick={() => nav('home')} aria-label='Ke beranda' className='shrink-0'>
          <Logo />
        </button>

        <nav className='hidden items-center gap-7 lg:flex'>
          {NAV_ITEMS.map(([id, label]) => (
            <button
              key={id}
              type='button'
              onClick={() => nav(id)}
              className={`text-sm font-medium transition hover:text-blue-600 ${
                scrolled ? 'text-slate-600' : 'text-white/80'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          type='button'
          onClick={() => nav('kontak')}
          className='hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500 lg:flex'
        >
          Bergabung <ArrowUpRight size={16} />
        </button>

        <button
          type='button'
          onClick={() => setMenuOpen((current) => !current)}
          aria-label='Menu'
          className={`rounded-xl p-2 lg:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className='border-t border-slate-200 bg-white shadow-xl lg:hidden'>
          <div className='mx-auto flex max-w-310 flex-col gap-1 px-5 py-4 sm:px-8'>
            {NAV_ITEMS.map(([id, label]) => (
              <button
                key={id}
                type='button'
                onClick={() => nav(id)}
                className='rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-100'
              >
                {label}
              </button>
            ))}

            <button
              type='button'
              onClick={() => nav('kontak')}
              className='mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white'
            >
              Bergabung <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
