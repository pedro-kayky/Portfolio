import React, { useState, useEffect } from 'react';
import profile from '../assets/profile.png'; 
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation();
  const words = ["roles.web_developer", "roles.ui_ux_designer"].map(key => t(key));
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <section
      id="home"
      className="bg-[#050505] text-white min-h-[60vh] flex items-center justify-center overflow-hidden relative pt-28 scroll-mt-20 px-6 md:px-12"
    >
      {/* Container principal */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">

        {/* Lado Esquerdo - Conteúdo de Texto */}
        <div className="max-w-xl space-y-6 z-10 py-12">
          <h3 className="text-lg font-normal text-gray-200">
            {t('hero.greeting')}
          </h3>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight flex items-center min-h-[72px]">
            <span>{`${words[index].substring(0, subIndex)}`}</span>
            <span className="inline-block w-[3px] h-[50px] bg-gray-400 ml-2 animate-pulse"></span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
            {t('hero.description')}
          </p>

          <div className="pt-2">
            <a
              href="/curriculo.pdf"
              download="Pedro_Kayky_CV.pdf"
              className="inline-block border border-white/80 text-white px-7 py-2.5 rounded text-sm font-medium hover:bg-[#f43f5e] hover:border-[#f43f5e] hover:text-white transition duration-300 cursor-pointer"
            >
              {t('hero.downloadCv')}
            </a>
          </div>
        </div>

        {/* Lado Direito - Imagem */}
        <div className="hidden md:flex justify-end items-center w-1/2 h-full z-0">
          <img 
            src={profile} 
            alt="Foto de Perfil" 
            className="h-[70vh] w-auto object-cover mix-blend-screen [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;