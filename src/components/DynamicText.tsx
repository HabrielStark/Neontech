import { useEffect, useState } from 'react';

interface DynamicTextProps {
  words: string[];
  className?: string;
}

export function DynamicText({ words, className = '' }: DynamicTextProps) {
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const word = words[currentWord];

    const timer = setTimeout(() => {
      setText(prev => {
        if (!isDeleting && prev === word) {
          setTimeout(() => setIsDeleting(true), 2000);
          return prev;
        }
        
        if (isDeleting && prev === '') {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
          return '';
        }

        if (isDeleting) {
          return prev.slice(0, -1);
        }

        return word.slice(0, prev.length + 1);
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWord, words]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}