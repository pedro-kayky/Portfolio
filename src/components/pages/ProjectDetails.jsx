import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCheckCircle, FaFigma,FaPalette  } from 'react-icons/fa';


import { projectsData } from '../data/projectsData.jsx';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const project = projectsData.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">{t('project_details.not_found')}</h2>
        <button onClick={() => navigate('/')} className="text-[#f43f5e] hover:underline flex items-center gap-2">
          <FaArrowLeft /> {t('project_details.back')}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-28 pb-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#f43f5e] transition cursor-pointer text-sm font-medium"
        >
          <FaArrowLeft /> {t('project_details.back')}
        </button>

        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#f43f5e] font-semibold">
            {t(project.subtitleKey)}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif">{t(project.titleKey)}</h1>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="bg-[#171717] text-gray-300 text-xs px-3 py-1 rounded border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {project.image && (
            <img 
              src={project.image} 
              alt={t(project.titleKey)} 
              className="w-full h-[400px] object-cover rounded-lg border border-white/10 shadow-2xl"
            />
          )}

          <div className="flex flex-wrap gap-4 pt-2">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#f43f5e] text-white px-6 py-3 rounded font-medium hover:bg-[#e11d48] transition text-sm"
              >
                <FaExternalLinkAlt /> {t('project_details.live_demo')}
              </a>
            )}

            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded font-medium hover:bg-purple-700 transition text-sm"
              >
                <FaFigma /> Figma
              </a>
            )}

            {project.canvaUrl && (
            <a
              href={project.canvaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition text-sm"
            >
              <FaPalette  /> Canva
            </a>
          )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/20 hover:border-white text-white px-6 py-3 rounded font-medium transition text-sm"
              >
                <FaGithub /> {t('project_details.github_repo')}
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-white/10">
          <div className="md:col-span-2 space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-serif">{t('project_details.overview')}</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {t(project.overviewKey)}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-serif">{t('project_details.features')}</h2>
              <ul className="space-y-3">
                {project.featuresKeys?.map((featureKey, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                    <FaCheckCircle className="text-[#f43f5e] mt-1 shrink-0" />
                    <span>{t(featureKey)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white font-serif">{t('project_details.challenges')}</h2>
              <div className="space-y-4">
                {project.challengesKeys?.map((item, idx) => (
                  <div key={idx} className="bg-[#121212] p-6 rounded border border-white/5 space-y-2">
                    <h3 className="text-lg font-semibold text-[#f43f5e]">{t(item.titleKey)}</h3>
                    <p className="text-xs text-gray-400">
                      <strong className="text-gray-200">{t('project_details.challenge_label')}:</strong> {t(item.descKey)}
                    </p>
                    <p className="text-xs text-gray-300">
                      <strong className="text-green-400">{t('project_details.solution_label')}:</strong> {t(item.solKey)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6 bg-[#121212] p-6 rounded border border-white/5 h-fit">
            <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">{t('project_details.info')}</h3>
            <div className="space-y-4 text-xs">
              <div>
                <p className="text-gray-500 uppercase tracking-wider">{t('project_details.category')}</p>
                <p className="text-gray-200 font-medium">{t(project.categoryLabelKey)}</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-wider">{t('project_details.technologies')}</p>
                <p className="text-gray-200 font-medium">{project.tags?.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}