import React from 'react';

interface SplitTextProps {
  children: string;
  className?: string;
  wrapperClass?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({ children, className = '', wrapperClass = '' }) => {
  const words = children.split(' ');

  return (
    <span className={`inline-block ${wrapperClass}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden whitespace-nowrap mr-[0.2em] last:mr-0 align-top">
          <span className={`inline-block ${className} split-word-inner`}>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
};