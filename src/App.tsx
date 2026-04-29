/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { content } from './content';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ur'>('en');
  const data = content[lang];

  return (
    <div className={`min-h-screen bg-[#fdfcf7] text-[#1a1a1a] font-sans ${lang === 'ur' ? 'font-urdu' : ''}`} dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      <header className="bg-[#064e3b] text-white p-6 shadow-md">
        <nav className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-serif font-bold text-[#f59e0b]">{data.title}</h1>
          <button
            onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
            className="px-4 py-2 bg-[#f59e0b] text-[#064e3b] font-bold rounded hover:bg-white transition"
          >
            {lang === 'en' ? 'اردو' : 'English'}
          </button>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#064e3b]">
          <p className="text-xl font-serif italic leading-relaxed text-[#064e3b]">{data.prophetQuote}</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#064e3b]/10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#d97706] mb-3">{lang === 'en' ? 'Location' : 'پتہ'}</h2>
            <p className="text-lg font-serif text-[#064e3b]">{data.address}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#064e3b]/10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#d97706] mb-3">{lang === 'en' ? 'Esaal-e-Sawab' : 'ایصالِ ثواب'}</h2>
            <p className="text-lg font-serif text-[#064e3b]">{data.esaalESawab}</p>
          </div>
        </section>

        <section className="bg-[#064e3b] text-white p-8 rounded-xl shadow-sm text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#f59e0b]">{data.admissions}</h2>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-sm border border-[#064e3b]/10">
          <h2 className="text-2xl font-serif font-semibold text-[#064e3b] mb-6">{lang === 'en' ? 'Departments' : 'شعبہ جات'}</h2>
          <ul className="grid gap-4 md:grid-cols-3">
            {data.departments.map((dept, i) => (
              <li key={i} className="bg-[#064e3b]/5 p-4 rounded-lg text-[#064e3b] border border-[#064e3b]/10 font-medium">{dept}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-sm border border-[#064e3b]/10">
          <h2 className="text-2xl font-serif font-semibold text-[#064e3b] mb-6">{lang === 'en' ? 'Facilities' : 'سہولیات'}</h2>
          <ul className="list-disc list-inside space-y-3 text-[#1a1a1a]/80 text-lg">
            {data.facilities.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-sm border border-[#064e3b]/10 space-y-4">
          <h2 className="text-2xl font-serif font-semibold text-[#064e3b]">{lang === 'en' ? 'Management' : 'انتظامیہ'}</h2>
          <p className="text-lg font-medium text-[#1a1a1a]/90">{data.supervisor}</p>
          <div className="space-y-2 text-[#064e3b]/80 italic">
            {data.management.map((m, i) => <p key={i}>{m}</p>)}
          </div>
        </section>

        <footer className="bg-white p-6 rounded-t-xl shadow-sm border-t-4 border-[#064e3b] text-center">
          <p className="text-2xl font-bold text-[#064e3b]">{data.contact}</p>
        </footer>
      </main>
    </div>
  );
}
