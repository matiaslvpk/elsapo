
import React from 'react';
import { MailIcon, PhoneIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent mt-16 z-10 relative">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
        <div className="md:flex md:items-center md:justify-between gap-8">
            <div className="flex-1 min-w-0 text-center md:text-left">
                <h3 className="font-display text-4xl text-emerald-700">Contacta con nosotros</h3>
                <div className="mt-6 flex justify-center md:justify-start flex-wrap gap-x-8 gap-y-6">
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-stone-800 font-bold">Sheila Álvarez</p>
                    <a href="mailto:sheilalvarezmor@gmail.com" className="mt-1 text-sm text-stone-600 hover:text-emerald-600 flex items-center gap-2">
                      <MailIcon className="w-4 h-4" /> sheilalvarezmor@gmail.com
                    </a>
                    <a href="tel:+34663846661" className="mt-1 text-sm text-stone-600 hover:text-emerald-600 flex items-center gap-2">
                      <PhoneIcon className="w-4 h-4" /> +34 663 846 661
                    </a>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-stone-800 font-bold">Matías Lavarda</p>
                    <a href="mailto:matiaslavarda@gmail.com" className="mt-1 text-sm text-stone-600 hover:text-emerald-600 flex items-center gap-2">
                      <MailIcon className="w-4 h-4" /> matiaslavarda@gmail.com
                    </a>
                    <a href="tel:+34636735896" className="mt-1 text-sm text-stone-600 hover:text-emerald-600 flex items-center gap-2">
                      <PhoneIcon className="w-4 h-4" /> +34 636 73 58 96
                    </a>
                  </div>
                </div>
            </div>
            <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
                <img src="https://i.postimg.cc/6qzTV426/Sapo-mensajero-contacto.png" alt="Sapo mensajero" className="w-48 mx-auto"/>
            </div>
        </div>
        <p className="mt-12 text-center text-sm text-stone-500">
          &copy; {new Date().getFullYear()} Los Sueños del Sapo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
