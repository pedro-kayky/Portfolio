import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { LuGlobe } from 'react-icons/lu';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Lista de idiomas suportados com bandeiras e nomes nativos
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'jp', name: '日本語', flag: '🇯🇵' },
  ];

  // Função para trocar o idioma global da aplicação
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false); // Fecha o menu ao selecionar
  };

  // Itens do menu usando as chaves de tradução
  const navItems = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.services'), id: 'services' },
    { name: t('nav.portfolio'), id: 'portfolio' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  // Função inteligente para navegar até as seções
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      // Se estiver na página de detalhes (/project/:id), volta para a Home primeiro
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Se já estiver na Home, apenas faz a rolagem suave
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Observador de scroll para destacar o item ativo no menu (apenas se estiver na Home)
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = ['home', 'about', 'services', 'portfolio', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  // Sair do dropdown se clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#050505]/90 backdrop-blur-md z-50 py-4 px-8 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-xl font-bold text-[#f43f5e] font-serif cursor-pointer"
        >
          Pedro Kayky
        </a>

        {/* LINKS DE NAVEGAÇÃO E SELETOR DE IDIOMAS */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === '/' && activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                      isActive
                        ? 'text-[#f43f5e] font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* SELETOR DE IDIOMAS (ÍCONE DE GLOBO + DROPDOWN) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-label="Select Language"
              className="p-2 rounded-lg bg-[#171717] border border-white/10 text-gray-300 hover:text-white hover:border-[#f43f5e] transition duration-200 flex items-center gap-2 cursor-pointer"
            >
              <LuGlobe className="w-4 h-4 text-[#f43f5e]" />
              <span className="text-xs font-semibold uppercase">
                {i18n.language ? i18n.language.slice(0, 2) : 'en'}
              </span>
            </button>

            {/* MENU SUSPENSO */}
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#171717] border border-white/10 rounded-lg shadow-2xl py-1 z-50 overflow-hidden">
                {languages.map((lang) => {
                  const isSelected = i18n.language?.startsWith(lang.code);
                  return (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs text-left transition duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-[#f43f5e]/10 text-[#f43f5e] font-semibold'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="text-sm">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}