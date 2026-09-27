import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Importante para navegação sem recarregar

import Brastel from '../assets/brastel.png';
import pokemon from '../assets/pokemon.png';
import quiz from '../assets/quiz.png';
import nbl from '../assets/nbl.png';
import github from '../assets/github.png';
import one from '../assets/onepiece.png';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');

  // Ajustado os IDs para baterem com as chaves do projectsData.js
  const projectsData = [
    {
      id: 'brastel',
      titleKey: "portfolio.projects.brastel.title",
      categoryKey: "Designing",
      categoryLabelKey: "portfolio.filters.designing",
      image: Brastel,
    },
    {
      id: 'pokemon',
      titleKey: "portfolio.projects.pokemon.title",
      categoryKey: "Websites",
      categoryLabelKey: "portfolio.filters.websites",
      image: pokemon,
    },
    {
      id: 'nbl',
      titleKey: "portfolio.projects.nbl.title",
      categoryKey: "Designing",
      categoryLabelKey: "portfolio.filters.designing",
      image: nbl,
    },
    {
      id: 'quiz',
      titleKey: "portfolio.projects.quiz.title",
      categoryKey: "Websites",
      categoryLabelKey: "portfolio.filters.websites",
      image: quiz,
    },
    {
      id: 'one-piece',
      titleKey: "portfolio.projects.one-piece.title",
      categoryKey: "Designing",
      categoryLabelKey: "portfolio.filters.designing",
      image: one,
    },
    {
      id: 'github',
      titleKey: "portfolio.projects.github.title",
      categoryKey: "Websites",
      categoryLabelKey: "portfolio.filters.websites",
      image: github,
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.categoryKey === activeFilter);

  const filterButtons = [
    { key: 'All', label: t('portfolio.filters.all') },
    { key: 'Designing', label: t('portfolio.filters.designing') },
    { key: 'Websites', label: t('portfolio.filters.websites') }
  ];

  return (
    <section id="portfolio" className="bg-[#050505] text-white py-28 px-8 md:px-24 scroll-mt-20 overflow-hidden">
      
      {/* Título da Seção */}
      <motion.div 
        className="text-center mb-12 space-y-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: false }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif text-rose-500">{t('portfolio.title')}</h2>
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          {t('portfolio.subtitle')}
        </p>
        <div className="flex justify-center space-x-1.5 pt-2">
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
        </div>
      </motion.div>

      {/* Botões de Filtro */}
      <div className="flex justify-center items-center space-x-3 mb-12">
        {filterButtons.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-300 cursor-pointer ${
              activeFilter === filter.key
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                : 'bg-[#111111] text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid de Projetos */}
      <motion.div 
        layout
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-[#111111] overflow-hidden rounded-sm border border-white/5 cursor-pointer"
            >
              {/* Imagem do Projeto */}
              <img 
                src={project.image} 
                alt={t(project.titleKey)}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay Escuro com Link de Navegação */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4 space-y-2">
                <span className="text-xs uppercase tracking-widest text-rose-500 font-semibold">
                  {t(project.categoryLabelKey)}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {t(project.titleKey)}
                </h3>

                {/* Alterado de <a> para <Link> apontando dinamicamente para /project/:id */}
                <Link 
                  to={`/project/${project.id}`}
                  className="mt-2 text-xs border border-rose-500 text-rose-500 px-4 py-1.5 rounded hover:bg-rose-500 hover:text-white transition duration-300"
                >
                  {t('portfolio.view_project')}
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};

export default Portfolio;