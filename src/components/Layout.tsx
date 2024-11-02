import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}