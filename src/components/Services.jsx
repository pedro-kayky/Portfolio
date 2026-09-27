import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaPaintBrush, 
  FaMobileAlt, 
  FaRocket, 
  FaPlug, 
  FaVectorSquare 
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const servicesList = [
    {
      icon: <FaCode />,
      title: t('services.web_dev.title'),
      description: t('services.web_dev.desc')
    },
    {
      icon: <FaPaintBrush />,
      title: t('services.ui_ux.title'),
      description: t('services.ui_ux.desc')
    },
    {
      icon: <FaMobileAlt />,
      title: t('services.responsive.title'),
      description: t('services.responsive.desc')
    },
    {
      icon: <FaRocket />,
      title: t('services.performance.title'),
      description: t('services.performance.desc')
    },
    {
      icon: <FaPlug />,
      title: t('services.api.title'),
      description: t('services.api.desc')
    },
    {
      icon: <FaVectorSquare />,
      title: t('services.branding.title'),
      description: t('services.branding.desc')
    }
  ];

  return (
    <section id="services" className="bg-[#0a0a0a] text-white py-28 px-8 md:px-24 scroll-mt-20">
      
      {/* Título da Seção */}
      <motion.div 
        className="text-center mb-16 space-y-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: false }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif text-rose-500">{t('services.section_title')}</h2>
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          {t('services.section_subtitle')}
        </p>
        <div className="flex justify-center space-x-1.5 pt-2">
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
        </div>
      </motion.div>

      {/* Grid de Serviços */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, idx) => (
          <motion.div
            key={idx}
            className="relative p-8 bg-[#111111] border border-white/5 rounded-sm hover:border-rose-500/40 transition-all duration-300 group overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: false }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* Detalhes de Borda em Rosa que aparecem no Hover */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-rose-500 transition-all duration-500 group-hover:w-full"></div>
            <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-rose-500 transition-all duration-500 group-hover:w-full"></div>
            <div className="absolute top-0 right-0 w-[2px] h-0 bg-rose-500 transition-all duration-500 group-hover:h-full"></div>
            <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-rose-500 transition-all duration-500 group-hover:h-full"></div>

            {/* Conteúdo do Card */}
            <div className="flex flex-col items-center text-center space-y-4 py-2">
              <div className="text-4xl text-rose-500 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-rose-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Services;