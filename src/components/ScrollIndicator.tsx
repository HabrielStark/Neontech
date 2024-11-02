import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(!scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce">
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-gray-400">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-blue-500" />
      </div>
    </div>
  );
}