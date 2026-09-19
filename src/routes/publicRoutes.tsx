import { useEffect, useState } from 'react';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import { Outlet } from 'react-router';

function PublicRoutes() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-count]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const targetElement = entry.target as HTMLElement;
          const target = Number(targetElement.dataset.count || 0);
          const startAt = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startAt) / 1100, 1);
            targetElement.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
          observer.unobserve(targetElement);
        });
      },
      { threshold: 0.7 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const nav = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <main className='min-h-screen overflow-x-hidden bg-white font-sans text-slate-900'>
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} onNavigate={nav} />
      <Outlet />
      <Footer onNavigate={nav} />
    </main>
  );
}

export default PublicRoutes;
