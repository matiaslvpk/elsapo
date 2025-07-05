
import React from 'react';

interface CardProps {
  title: string;
  author: string;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, author, imageUrl }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-stone-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="h-56">
        <img
          alt={title}
          src={imageUrl}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-600">{author}</p>
        <p className="mt-2 text-xl font-bold text-stone-800 sm:text-2xl flex-grow">{title}</p>
      </div>
    </div>
  );
};
