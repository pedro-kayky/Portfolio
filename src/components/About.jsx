import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, FaFlag, FaBriefcase, FaPhone, 
  FaMapMarkerAlt, FaEnvelope, FaGlobe 
} from 'react-icons/fa';
import profilePic from '../assets/profile.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  // O hook DEVE ficar dentro do componente
  const { t } = useTranslation();

  // O array de informações também fica dentro para re-renderizar quando o idioma trocar
  const personalInfo = [
    { icon: <FaCalendarAlt />, label: t('info.dob_label'), value: t('info.dob_val') },
    { icon: <FaFlag />, label: t('info.nationality_label'), value: t('info.nationality_val') },
    { icon: <FaBriefcase />, label: t('info.freelance_label'), value: t('info.freelance_val') },
    { icon: <FaPhone />, label: t('info.phone_label'), value: '+81 70 8507-5013' },
    { icon: <FaMapMarkerAlt />, label: t('info.address_label'), value: t('info.address_val') },
    { icon: <FaEnvelope />, label: t('info.email_label'), value: 'pedrokayky63@gmail.com' },
    { icon: <FaGlobe />, label: t('info.languages_label'), value: t('info.languages_val') },
  ];

  return (
    <section id="about" className="bg-[#050505] text-white py-28 px-8 md:px-24 overflow-hidden scroll-mt-20">
      
      {/* Título da Seção */}
      <motion.div 
        className="text-center mb-16 space-y-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: false }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-serif text-rose-500">{t('about.title')}</h2>
        <p className="text-xs text-gray-400 uppercase tracking-widest">
          {t('about.subtitle')}
        </p>
        <div className="flex justify-center space-x-1.5 pt-2">
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
        </div>
      </motion.div>

      {/* Grid Principal */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Foto de Perfil */}
        <motion.div 
          className="md:col-span-5 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-3 bg-[#111111] border border-white/5 shadow-2xl rounded-sm">
            <img 
              src={profilePic} 
              alt="Pedro Kayky" 
              className="w-full h-[400px] object-cover rounded-sm filter brightness-90"
            />
          </div>
        </motion.div>

        {/* Informações e Textos */}
        <div className="md:col-span-7 space-y-6">
          
          {/* Título e Parágrafos */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3, once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-2xl font-bold text-white tracking-wide">
                {t('about.greeting')}
              </h3>
              <div className="w-10 h-1 bg-rose-500 mt-2"></div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              {t('about.bio_paragraph_1')}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              {t('about.bio_paragraph_2')}
            </p>
          </motion.div>

          {/* Grid de Informações Pessoais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-4 text-xs">
            {personalInfo.map((info, idx) => (
              <motion.div 
                key={idx} 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2, once: false }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <span className="text-rose-500 text-sm">{info.icon}</span>
                <div className="truncate">
                  <span className="font-semibold text-gray-300 mr-1.5">{info.label}</span>
                  <span className="text-gray-400">{info.value}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;