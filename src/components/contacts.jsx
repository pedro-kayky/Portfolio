import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const { t } = useTranslation();
  const formRef = useRef(null);

  // Estados para feedback do formulário
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  // Função para envio real do e-mail via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: '', text: '' });

    // Substitua estas 3 strings com as suas chaves reais do EmailJS:
    // 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY'
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          setLoading(false);
          setStatusMessage({
            type: 'success',
            text: t('contact.form.success'),
          });
          formRef.current.reset(); // Limpa os campos do formulário
        },
        (error) => {
          setLoading(false);
          setStatusMessage({
            type: 'error',
            text: t('contact.form.error'),
          });
        }
      );
  };

  // Cards de contato com traduções
  const contactCards = [
    {
      title: t('contact.cards.address_title'),
      content: t('contact.cards.address_val'),
      delay: 0.2,
    },
    {
      title: t('contact.cards.phone_title'),
      content: '+81 070-8507-5013',
      delay: 0.4,
    },
    {
      title: t('contact.cards.email_title'),
      content: 'pedrokayky63@gmail.com',
      delay: 0.6,
    },
  ];

  // Links das redes sociais
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: 'https://www.linkedin.com/in/pedro-kayky-252351263/',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/p.kayky63?stkn=bmR4aGU2Y2hlYnhy&utm_source=qr',
    },
  ];

  return (
    <div id="contact" className="bg-[#0c0c0c] text-white pt-20 scroll-mt-20">
      {/* 1. SEÇÃO DE CONTATO / FORMULÁRIO */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#f43f5e] font-serif mb-2">
          {t('contact.title')}
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          {t('contact.subtitle')}
        </p>

        {/* Linha de Pontos Decorativos */}
        <div className="flex justify-center gap-1.5 mb-12">
          <span className="w-2 h-2 rounded-full bg-[#f43f5e]"></span>
          <span className="w-2 h-2 rounded-full bg-[#f43f5e]"></span>
          <span className="w-2 h-2 rounded-full bg-[#f43f5e]"></span>
          <span className="w-2 h-2 rounded-full bg-[#f43f5e]"></span>
        </div>

        {/* Formulário de Contato Funcional */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              required
              placeholder={t('contact.form.name_placeholder')}
              className="w-full bg-[#171717] border border-transparent focus:border-[#f43f5e] rounded px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder={t('contact.form.email_placeholder')}
              className="w-full bg-[#171717] border border-transparent focus:border-[#f43f5e] rounded px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition"
            />
          </div>

          <input
            type="text"
            name="subject"
            required
            placeholder={t('contact.form.subject_placeholder')}
            className="w-full bg-[#171717] border border-transparent focus:border-[#f43f5e] rounded px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition"
          />

          <textarea
            name="message"
            rows="5"
            required
            placeholder={t('contact.form.message_placeholder')}
            className="w-full bg-[#171717] border border-transparent focus:border-[#f43f5e] rounded px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition resize-none"
          ></textarea>

          {/* Mensagem de Feedback (Sucesso / Erro) */}
          {statusMessage.text && (
            <p
              className={`text-sm py-2 px-4 rounded ${
                statusMessage.type === 'success'
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}
            >
              {statusMessage.text}
            </p>
          )}

          <div className="pt-4 pb-16">
            <button
              type="submit"
              disabled={loading}
              className="border border-[#f43f5e] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-white px-8 py-3 rounded text-sm font-semibold uppercase tracking-wider transition duration-300 cursor-pointer disabled:opacity-50"
            >
              {loading ? t('contact.form.sending') : t('contact.form.button')}
            </button>
          </div>
        </form>
      </div>

      {/* 2. OS 3 CARDS ANIMADOS */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 -mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: card.delay,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="bg-[#181818] p-8 rounded border border-white/5 text-center shadow-2xl"
            >
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <div className="w-8 h-[2px] bg-[#f43f5e] mx-auto mb-4"></div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. RODAPÉ / FOOTER */}
      <footer className="bg-[#050505] pt-32 pb-12 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-[#f43f5e] font-serif">
            Pedro Kayky
          </h2>

          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            {t('contact.footer_description')}
          </p>

          {/* Ícones de Redes Sociais */}
          <div className="flex justify-center gap-4 pt-2">
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#f43f5e] transition duration-300"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

          <div className="w-16 h-[1px] bg-white/10 mx-auto pt-4"></div>

          <p className="text-gray-500 text-xs">
            {t('contact.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}