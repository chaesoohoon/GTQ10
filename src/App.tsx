/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Award,
  Maximize2,
  Minimize2
} from 'lucide-react';
import * as S from './components/Slides';

// --- Components ---

const SlideWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full flex flex-col p-8 md:p-20 bg-white overflow-hidden relative">
    {/* Decorative Elements inspired by the reference image */}
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
    <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-400 rounded-full" />
    <div className="absolute bottom-20 left-20 w-32 h-32 border-[12px] border-zinc-100 rounded-full opacity-50" />
    
    <div className="relative z-10 flex flex-col h-full">
      {children}
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = [
    <S.TitleSlide />,
    <S.WelcomeSlide />,
    <S.GoalSlide />,
    <S.NCSDefinitionSlide />,
    <S.NCSStructureSlide />,
    <S.NCSModuleSlide />,
    <S.NCSLevelSlide />,
    <S.EvaluationPurposeSlide />,
    <S.EvaluationFlowSlide />,
    <S.OverviewSummarySlide />,
    <S.ScheduleDetail1Slide />,
    <S.ScheduleDetail2Slide />,
    <S.CurriculumNCSSlide />,
    <S.CurriculumNonNCSSlide />,
    <S.EvalScheduleSlide />,
    <S.AttendanceBasicsSlide />,
    <S.AttendancePenaltySlide />,
    <S.AttendanceRecognitionSlide />,
    <S.DropoutCriteriaSlide />,
    <S.GTQOverviewSlide />,
    <S.GTQScheduleSlide />,
    <S.GTQTipsSlide />,
    <S.SafetySlide />,
    <S.ClosingSlide />
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="fixed inset-0 bg-zinc-50 flex items-center justify-center font-sans selection:bg-yellow-200">
      <div className={`w-full max-w-7xl aspect-video bg-white shadow-premium rounded-[3rem] overflow-hidden relative border border-zinc-100 transition-all duration-700 ${isFullscreen ? 'max-w-none h-full rounded-none' : ''}`}>
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-zinc-50 z-50">
          <motion.div 
            className="h-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <SlideWrapper>
              {slides[currentSlide]}
            </SlideWrapper>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-12 right-12 flex items-center gap-6 z-50">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-zinc-300 font-black uppercase tracking-widest mb-1">Progress</span>
            <div className="text-zinc-900 font-mono text-xl font-black font-display">
              {String(currentSlide + 1).padStart(2, '0')} <span className="text-zinc-200">/</span> {String(slides.length).padStart(2, '0')}
            </div>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                currentSlide === 0 
                  ? 'bg-zinc-50 text-zinc-200' 
                  : 'bg-white text-zinc-900 shadow-xl hover:bg-zinc-900 hover:text-white border border-zinc-100'
              }`}
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                currentSlide === slides.length - 1 
                  ? 'bg-zinc-50 text-zinc-200' 
                  : 'bg-yellow-400 text-zinc-900 shadow-xl hover:bg-zinc-900 hover:text-white'
              }`}
            >
              <ChevronRight size={28} />
            </button>
          </div>
          
          <button 
            onClick={toggleFullscreen}
            className="w-14 h-14 rounded-2xl bg-zinc-50 text-zinc-400 flex items-center justify-center hover:bg-zinc-100 transition-all"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
        </div>

        {/* Logo / Brand Watermark */}
        <div className="absolute top-12 left-12 z-50 flex items-center gap-4">
          <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-lg">
            <Award size={24} className="text-yellow-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black text-zinc-900 tracking-tighter uppercase font-display">더국제</span>
            <span className="text-[8px] text-zinc-400 font-bold uppercase tracking-[0.2em]">Vocational College</span>
          </div>
        </div>
      </div>
      
      {/* Help Text */}
      <div className="fixed bottom-6 left-12 text-zinc-300 text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 flex items-center gap-4">
        <span>[SPACE/ARROWS] NAVIGATE</span>
        <span className="w-1 h-1 bg-zinc-200 rounded-full" />
        <span>[F] FULLSCREEN</span>
      </div>
    </div>
  );
}
