import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div
      className={`rounded-xl border-[1px] border-gray-200 bg-white p-3 drop-shadow ${className}`}
    >
      {children}
    </div>
  );
};
