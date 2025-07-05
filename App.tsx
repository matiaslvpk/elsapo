
import React from 'react';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { MailIcon, PhoneIcon, UserIcon, CalendarIcon, ClockIcon, LocationIcon, EuroIcon, UsersIcon, CheckCircleIcon, SparklesIcon } from './components/Icons';

const stories = [
  { title: "Las jirafas no pueden bailar", author: "Giles Andrae", imageUrl: "https://i.postimg.cc/VNbryNT4/Las-jirafas-no-pueden-bailar.png" },
  { title: "Orejas de mariposa", author: "Louisa Aguilar", imageUrl: "https://i.postimg.cc/9MdDMnc7/orejas-de-mariposa.png" },
  { title: "La vocecita", author: "Michael Escoffier", imageUrl: "https://i.postimg.cc/t4Jn5kNK/La-vocecita.png" },
  { title: "Elmer", author: "David Mckee", imageUrl: "https://i.postimg.cc/WzVJwP58/Elmer.png" },
  { title: "El cazo de Lorenzo", author: "Isabelle Carrier", imageUrl: "https://i.postimg.cc/0QDwSN0r/Cazo-de-Lorenzo.png" },
  { title: "Sapo, el pianista de los sueños", author: "Sheila Álvarez y Matías Lavarda", imageUrl: "https://i.postimg.cc/RVsNNfxX/Sapo-pianista.png" },
];

const team = [
    { name: "Sheila Álvarez", role: "Cuentacuentos", email: "sheilalvarezmor@gmail.com", phone: "+34 663 846 661" },
    { name: "Matías Lavarda", role: "Piano", email: "matiaslavarda@gmail.com", phone: "+34 636 73 58 96" },
    { name: "Rachel", role: "Escenografía / Vestuario / Iluminación / Difusión", email: null, phone: null },
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="py-16 sm:py-24">
        <h2 className="font-display text-4xl sm:text-5xl text-emerald-700 mb-12 text-center">{title}</h2>
        {children}
    </div>
);

const App: React.FC = () => {
    return (
        <div className="bg-[#FBF9F3] text-stone-800 relative overflow-x-hidden">
            
            {/* Decorative elements */}
            <img src="https://i.postimg.cc/3JKvyY4J/A-rbol.png" alt="" className="absolute -top-10 right-0 lg:w-1/5 w-1/3 opacity-30 mix-blend-multiply pointer-events-none" />
            <img src="https://i.postimg.cc/x8PNsF72/a-rbol-2.png" alt="" className="absolute bottom-[5%] -left-10 lg:w-1/6 w-1/4 opacity-20 mix-blend-multiply pointer-events-none" />

            {/* Hero Section */}
            <header className="relative h-[80vh] min-h-[500px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 to-amber-900/30 z-10"></div>
                <img src="https://i.postimg.cc/jjGfCfNG/agua.jpg" alt="Fondo de un estanque de ensueño" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="relative z-20 p-4 flex flex-col items-center">
                    <img src="https://i.postimg.cc/FsDJ383b/Imagen-principal-Sapo-son-ador.jpg" alt="Sapo soñador" className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-white/50 mb-6"/>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>Los Sueños del Sapo</h1>
                    <p className="mt-4 text-xl md:text-2xl font-light text-slate-100 drop-shadow-md">Un taller de cuentacuentos narrativo-musical</p>
                    <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 inline-flex items-center gap-4 shadow-lg">
                        <span className="text-red-600 font-bold text-xl uppercase tracking-wide">Propuesta para</span>
                        <img src="https://www.hoyodemanzanares.es/wp-content/uploads/2022/12/logo-ayuntamiento-hoyo-de-manzanares.png" alt="Logo del Ayuntamiento de Hoyo de Manzanares" className="h-10" />
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Presentation Section */}
                <Section title="Presentación">
                    <div className="max-w-3xl mx-auto text-center leading-relaxed text-xl text-stone-700">
                        <p>“Los Sueños del Sapo” es el nombre de nuestro proyecto: una antología narrativo-musical en forma de cuentacuentos acompañada por la interpretación musical del piano en directo.</p>
                        <p className="mt-4">La historia narra los oníricos descansos de un sapo que es capaz de decidir soñar con aquello que desea ser. A lo largo del cuento se abordan valores como la <span className="text-emerald-700 font-bold">empatía</span>, los <span className="text-emerald-700 font-bold">sentimientos</span>, la <span className="text-emerald-700 font-bold">amistad</span> y la <span className="text-emerald-700 font-bold">aceptación de uno mismo</span> a través de diversas historias cuidadosamente seleccionadas.</p>
                    </div>
                </Section>
                
                {/* Stories Section */}
                <Section title="Un Viaje por los Cuentos">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stories.map(story => (
                            <Card key={story.title} title={story.title} author={story.author} imageUrl={story.imageUrl} />
                        ))}
                    </div>
                </Section>
                
                {/* Team Section */}
                <Section title="El Equipo Creativo">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {team.map(member => (
                            <div key={member.name} className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-stone-200 shadow-lg hover:shadow-emerald-100 hover:border-emerald-300 transition-all duration-300">
                                <h3 className="text-2xl font-bold text-stone-800">{member.name}</h3>
                                <p className="text-emerald-600 font-display text-3xl mt-1">{member.role}</p>
                                <div className="mt-4 space-y-2 text-sm">
                                    {member.email && (
                                        <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-stone-600 hover:text-emerald-600">
                                            <MailIcon className="w-4 h-4"/> <span>{member.email}</span>
                                        </a>
                                    )}
                                    {member.phone && (
                                        <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 text-stone-600 hover:text-emerald-600">
                                            <PhoneIcon className="w-4 h-4"/> <span>{member.phone}</span>
                                        </a>
                                    )}
                                    {!member.email && !member.phone && (
                                      <div className="flex items-center justify-center gap-2 text-stone-500">
                                        <SparklesIcon className="w-4 h-4"/> <span>El alma creativa</span>
                                      </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Details Section */}
                <Section title="Organización y Detalles">
                    <div className="bg-white/60 backdrop-blur-md border border-stone-200 rounded-2xl p-8 md:p-12 shadow-xl">
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                            {/* Left Column: Event Info */}
                            <div>
                                <h3 className="text-2xl font-bold text-stone-800 mb-6">Sesiones</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start"><UsersIcon className="w-6 h-6 mr-3 text-emerald-600 flex-shrink-0 mt-1" /><p><strong className="text-stone-800">Acceso:</strong> Libre hasta completar aforo.</p></li>
                                    <li className="flex items-start"><LocationIcon className="w-6 h-6 mr-3 text-emerald-600 flex-shrink-0 mt-1" /><p><strong className="text-stone-800">Lugar:</strong> Sala polivalente adyacente a la biblioteca del Centro de Cultura.</p></li>
                                    <li className="flex items-start"><CalendarIcon className="w-6 h-6 mr-3 text-emerald-600 flex-shrink-0 mt-1" /><p><strong className="text-stone-800">Días:</strong> del 19 al 21 de septiembre <span className="text-stone-500 text-sm">(por determinar)</span></p></li>
                                    <li className="flex items-start"><ClockIcon className="w-6 h-6 mr-3 text-emerald-600 flex-shrink-0 mt-1" /><p><strong className="text-stone-800">Horario:</strong> de 18:00 a 19:00 (1 hora) <span className="text-stone-500 text-sm">(por determinar)</span></p></li>
                                    <li className="flex items-start"><EuroIcon className="w-6 h-6 mr-3 text-emerald-600 flex-shrink-0 mt-1" /><p><strong className="text-stone-800">Coste:</strong> Gratuito para los participantes.</p></li>
                                </ul>
                            </div>
                            {/* Right Column: Needs */}
                            <div>
                                <h3 className="text-2xl font-bold text-stone-800 mb-4">Necesidades Técnicas</h3>
                                <img src="https://i.postimg.cc/VvzdbWNH/Necesidades-te-cnicas.png" alt="Preparando el escenario" className="my-4 rounded-lg shadow-md border border-stone-200" />
                                <div className="space-y-6 mt-6">
                                    <div>
                                        <h4 className="font-semibold text-stone-800 mb-2">A cargo del Ayuntamiento:</h4>
                                        <ul className="space-y-2 list-inside text-stone-600">
                                            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" /><span>Aula/espacio, piano de cola y acceso a baños.</span></li>
                                            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" /><span>Difusión por canales oficiales.</span></li>
                                            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" /><span>Iluminación tenua y equipo de sonido.</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-stone-800 mb-2">A cargo del Equipo:</h4>
                                        <ul className="space-y-2 list-inside text-stone-600">
                                            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" /><span>Vestuario, atrezzo e iluminación propia.</span></li>
                                            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" /><span>Preparación del espacio y cartel.</span></li>
                                            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 mr-2 text-emerald-600 flex-shrink-0" /><span>Difusión por medios propios y realización.</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Costs */}
                        <div className="mt-12 pt-8 border-t border-stone-200">
                             <div className="grid lg:grid-cols-2 gap-12 items-start">
                                {/* Left: Breakdown */}
                                <div>
                                    <h3 className="text-xl font-bold text-stone-800 mb-4 text-center lg:text-left">Presupuesto</h3>
                                    <div className="rounded-lg overflow-hidden border border-stone-200 shadow-md bg-white">
                                        <table className="min-w-full text-sm">
                                            <thead className="bg-stone-50">
                                                <tr>
                                                    <th scope="col" className="p-3 text-left font-semibold text-stone-600 w-1/3"></th>
                                                    <th scope="col" className="p-3 text-left font-semibold text-stone-600">Concepto</th>
                                                    <th scope="col" className="p-3 text-right font-semibold text-stone-600">Coste</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-stone-200">
                                                {/* Matías */}
                                                <tr>
                                                    <td className="p-3 font-bold text-stone-800">Matías</td>
                                                    <td className="p-3 text-stone-700">Actuación</td>
                                                    <td className="p-3 text-stone-700 text-right">250 €</td>
                                                </tr>
                                                {/* Sheila */}
                                                <tr>
                                                    <td className="p-3 font-bold text-stone-800">Sheila</td>
                                                    <td className="p-3 text-stone-700">Actuación</td>
                                                    <td className="p-3 text-stone-700 text-right">250 €</td>
                                                </tr>
                                                {/* Rachel */}
                                                <tr>
                                                    <td rowSpan={4} className="p-3 font-bold text-stone-800 align-top">Rachel</td>
                                                    <td className="p-3 text-stone-700">Difusión</td>
                                                    <td className="p-3 text-stone-700 text-right">25 €</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 text-stone-700">Vestuario</td>
                                                    <td className="p-3 text-stone-700 text-right">25 €</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 text-stone-700">Atrezzo</td>
                                                    <td className="p-3 text-stone-700 text-right">25 €</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-3 text-stone-700">Iluminación</td>
                                                    <td className="p-3 text-stone-700 text-right">25 €</td>
                                                </tr>
                                            </tbody>
                                            <tfoot className="bg-stone-50 border-t-2 border-stone-300">
                                                <tr>
                                                    <td colSpan={2} className="p-3 text-left font-bold text-stone-900 text-base">TOTAL</td>
                                                    <td className="p-3 text-right font-bold text-stone-900 text-base">600 €</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                
                                {/* Right: Total */}
                                <div className="text-center bg-emerald-50/50 p-6 rounded-lg lg:sticky lg:top-8">
                                    <h3 className="text-xl font-bold text-stone-800">Coste Total del Evento</h3>
                                    <p className="font-display text-5xl text-emerald-700 mt-2">600 €</p>
                                    <p className="text-stone-500 mt-1">(Total por 1 sesión)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                
                {/* Communication Plan */}
                <Section title="Planificación">
                    <div className="max-w-2xl mx-auto">
                        <ol className="relative border-l border-stone-300">                  
                            <li className="mb-10 ml-6">            
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-200 rounded-full -left-3 ring-8 ring-[#FBF9F3]">
                                    <CalendarIcon className="w-3 h-3 text-emerald-700" />
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-stone-800">Primera semana de Septiembre</h3>
                                <p className="block mb-2 text-sm font-normal leading-none text-stone-500">Preparación de Material</p>
                                <p className="text-base font-normal text-stone-600">Cartel del evento A3 a disposición para su publicación e impresión en medios digitales y físicos.</p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-200 rounded-full -left-3 ring-8 ring-[#FBF9F3]">
                                    <CalendarIcon className="w-3 h-3 text-emerald-700" />
                                </span>
                                <h3 className="mb-1 text-lg font-semibold text-stone-800">Segunda semana de Septiembre</h3>
                                <p className="block mb-2 text-sm font-normal leading-none text-stone-500">Difusión</p>
                                <p className="text-base font-normal text-stone-600">Publicación en redes sociales, medios web y prensa.</p>
                            </li>
                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-200 rounded-full -left-3 ring-8 ring-[#FBF9F3]">
                                    <CalendarIcon className="w-3 h-3 text-emerald-700" />
                                </span>
                                <h3 className="mb-1 text-lg font-semibold text-stone-800">Del 19 al 21 de Septiembre</h3>
                                <p className="block mb-2 text-sm font-normal leading-none text-stone-500">¡El Evento!</p>
                                <p className="text-base font-normal text-stone-600">Realización del cuentacuentos en el Centro de Cultura.</p>
                            </li>
                        </ol>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
};

export default App;
