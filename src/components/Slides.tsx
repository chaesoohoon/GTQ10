import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Award, 
  MapPin, 
  User, 
  GraduationCap,
  ClipboardCheck,
  ShieldCheck,
  Car,
  Info,
  Target,
  Zap,
  HelpCircle,
  Phone,
  Monitor,
  ChevronRight
} from 'lucide-react';

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-4 tracking-tighter font-display">
    {children}
  </h2>
);

export const SectionSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm md:text-base text-yellow-600 font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-3 font-display">
    <span className="w-12 h-0.5 bg-yellow-400 inline-block" />
    {children}
  </p>
);

// 1. Title Slide
export const TitleSlide = () => (
  <div className="flex flex-col justify-center h-full relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="inline-block px-4 py-1 bg-zinc-900 text-yellow-400 text-xs font-bold tracking-widest mb-8 rounded-full">
        2026 TRAINING ORIENTATION
      </div>
      <h1 className="text-7xl md:text-9xl font-black text-zinc-900 leading-[1.1] mb-12 tracking-tighter font-display">
        GTQ 1급 <br />
        <span className="text-yellow-400">자격취득</span> <br />
        <span className="text-zinc-300">포토샵 과정</span>
      </h1>
      
      <div className="flex flex-wrap gap-12 items-center">
        <div className="flex flex-col">
          <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-2">Instructor</span>
          <span className="text-2xl font-black text-zinc-800 font-display">채수훈 강사</span>
        </div>
        <div className="w-px h-12 bg-zinc-200 hidden md:block" />
        <div className="flex flex-col">
          <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-2">Institution</span>
          <span className="text-2xl font-black text-zinc-800 font-display">THE국제직업전문학교</span>
        </div>
      </div>
    </motion.div>
    
    {/* Large background text */}
    <div className="absolute -bottom-10 -right-20 text-[20vw] font-black text-zinc-50 select-none -z-10 tracking-tighter leading-none opacity-50">
      GTQ
    </div>
  </div>
);

// 2. Welcome & Instructor Intro
export const WelcomeSlide = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-center">
    <div>
      <SectionSubtitle>WELCOME MESSAGE</SectionSubtitle>
      <SectionTitle>반갑습니다, <br />여러분의 도전을 <br />응원합니다.</SectionTitle>
      <p className="mt-8 text-zinc-500 text-lg leading-relaxed">
        디자인의 기초부터 자격증 취득까지, <br />
        실무 중심의 교육으로 여러분의 성장을 돕겠습니다.
      </p>
    </div>
    <div className="relative">
      <div className="aspect-[4/5] bg-zinc-100 rounded-[3rem] overflow-hidden shadow-premium relative group">
        <img 
          src="https://picsum.photos/seed/designer/800/1000" 
          alt="Instructor" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
          <p className="text-yellow-400 font-bold text-sm mb-2 uppercase tracking-widest">Lead Instructor</p>
          <h3 className="text-white text-3xl font-black font-display">채수훈</h3>
          <p className="text-zinc-300 text-sm mt-2">시각디자인 전문 강사 / GTQ 마스터</p>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
        <Zap size={48} className="text-zinc-900" />
      </div>
    </div>
  </div>
);

// 3. Training Goal
export const GoalSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>OUR VISION</SectionSubtitle>
    <SectionTitle>단순한 자격증을 넘어, <br /><span className="text-yellow-500">실무 역량</span>을 갖춘 디자이너로.</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {[
        { icon: <Target className="text-yellow-600" />, title: "GTQ 1급 취득", desc: "국가공인 자격증 취득을 통한 객관적 역량 증명" },
        { icon: <Monitor className="text-yellow-600" />, title: "실무 툴 활용", desc: "포토샵의 핵심 기능을 자유자재로 활용하는 능력" },
        { icon: <Award className="text-yellow-600" />, title: "포트폴리오 완성", desc: "NCS 기반의 수준 높은 디자인 결과물 제작" },
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-10 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:border-yellow-400 transition-all group"
        >
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-yellow-400 transition-colors">
            {item.icon}
          </div>
          <h4 className="text-2xl font-black text-zinc-900 mb-4 font-display">{item.title}</h4>
          <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

// 4. What is NCS?
export const NCSDefinitionSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>NCS DEFINITION</SectionSubtitle>
    <SectionTitle>NCS(국가직무능력표준)란?</SectionTitle>
    
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="bg-zinc-900 p-12 rounded-[3rem] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400 rounded-full -mr-24 -mt-24 opacity-20" />
        <h3 className="text-4xl font-black mb-6 font-display">National Competency Standards</h3>
        <p className="text-zinc-400 leading-relaxed">
          산업 현장에서 직무를 수행하기 위해 필요한 <span className="text-yellow-400 font-bold">지식, 기술, 태도</span>를 국가적 차원에서 표준화한 것입니다.
        </p>
      </div>
      <div className="relative p-8 bg-zinc-50 rounded-[3rem] border border-zinc-100">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
            <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold">1</div>
            <p className="text-sm font-bold">산업현장 요구 분석</p>
          </div>
          <div className="flex items-center gap-4 bg-yellow-400 p-4 rounded-2xl shadow-md translate-x-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold">2</div>
            <p className="text-sm font-bold">NCS 표준 적용 (교육/훈련)</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
            <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold">3</div>
            <p className="text-sm font-bold">현장 적합 인재 개발</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 4-1. NCS Structure
export const NCSStructureSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>NCS STRUCTURE</SectionSubtitle>
    <SectionTitle>NCS의 구성 체계</SectionTitle>
    
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
        <h4 className="text-xl font-black mb-4 font-display text-yellow-600">능력단위 (Unit)</h4>
        <p className="text-sm text-zinc-500 leading-relaxed">NCS의 기본 구성 요소로, 특정 직무를 수행하기 위한 최소 단위의 집합입니다.</p>
      </div>
      <div className="p-8 bg-zinc-900 rounded-3xl text-white">
        <h4 className="text-xl font-black mb-4 font-display text-yellow-400">능력단위 요소</h4>
        <ul className="text-xs space-y-2 text-zinc-400">
          <li>• 수행준거 (Criteria)</li>
          <li>• 지식 (Knowledge)</li>
          <li>• 기술 (Skill)</li>
          <li>• 태도 (Attitude)</li>
        </ul>
      </div>
      <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
        <h4 className="text-xl font-black mb-4 font-display text-yellow-600">활용 정보</h4>
        <ul className="text-xs space-y-2 text-zinc-500">
          <li>• 적용범위 및 작업상황</li>
          <li>• 평가 지침</li>
          <li>• 직업기초능력</li>
        </ul>
      </div>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border border-yellow-100 text-center">
      <p className="text-sm font-bold text-yellow-800">본 과정은 시각디자인 분야의 핵심 능력단위를 체계적으로 학습합니다.</p>
    </div>
  </div>
);

// 4-2. NCS Module Utilization
export const NCSModuleSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>MODULE UTILIZATION</SectionSubtitle>
    <SectionTitle>NCS 학습모듈 활용</SectionTitle>
    
    <div className="mt-12 flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-zinc-100">
          <div className="w-12 h-12 bg-zinc-900 text-white rounded-xl flex items-center justify-center font-bold">산업</div>
          <div>
            <h5 className="font-bold">산업현장 연계</h5>
            <p className="text-xs text-zinc-400">채용, 승진, 인사노무관리 기준 활용</p>
          </div>
        </div>
        <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-zinc-100">
          <div className="w-12 h-12 bg-yellow-400 text-zinc-900 rounded-xl flex items-center justify-center font-bold">교육</div>
          <div>
            <h5 className="font-bold">교육현장 적용</h5>
            <p className="text-xs text-zinc-400">교육과정 개발 및 교수학습 교재 활용</p>
          </div>
        </div>
      </div>
      <div className="w-64 h-64 bg-zinc-100 rounded-full flex items-center justify-center relative">
        <div className="w-48 h-48 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl z-10">
          <span className="font-black text-zinc-900 text-center text-sm">NCS<br />학습모듈</span>
        </div>
        <div className="absolute inset-0 border-4 border-dashed border-zinc-200 rounded-full animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  </div>
);

// 5. NCS Level 4
export const NCSLevelSlide = () => (
  <div className="h-full flex flex-col justify-center text-center max-w-4xl mx-auto">
    <SectionSubtitle>NCS LEVEL 4</SectionSubtitle>
    <SectionTitle>본 과정은 <span className="text-yellow-500">NCS 4수준</span>의 <br />전문 교육 과정입니다.</SectionTitle>
    <p className="mt-8 text-zinc-500 text-lg leading-relaxed">
      4수준은 일반적인 직무 수행 능력을 넘어, <br />
      독립적으로 업무를 계획하고 실행하며 결과를 도출할 수 있는 수준을 의미합니다.
    </p>
    
    <div className="mt-16 flex justify-center items-end gap-2 h-48">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((lvl) => (
        <div key={lvl} className="flex flex-col items-center gap-4">
          <div 
            className={`w-12 rounded-t-xl transition-all duration-1000 ${lvl === 4 ? 'bg-yellow-400 h-full shadow-lg shadow-yellow-400/30' : 'bg-zinc-100 h-1/2'}`} 
            style={{ height: `${(lvl / 8) * 100}%` }}
          />
          <span className={`text-xs font-bold ${lvl === 4 ? 'text-zinc-900' : 'text-zinc-300'}`}>LV.{lvl}</span>
        </div>
      ))}
    </div>
  </div>
);

// 6. Why Evaluation?
export const EvaluationPurposeSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>EVALUATION PURPOSE</SectionSubtitle>
    <SectionTitle>이수자평가를 <br />왜 하나요?</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {[
        { title: "실무 역량 검증", desc: "교육을 통해 습득한 디자인 능력이 산업 현장의 표준(NCS)에 도달했는지 객관적으로 확인합니다." },
        { title: "훈련 품질 관리", desc: "훈련생이 능력 단위별 목표를 달성했는지 평가하여 교육 과정의 효과를 높입니다." },
        { title: "수료 근거 마련", desc: "성실한 참여와 기술 습득 과정을 증빙하여 국비 지원 훈련의 수료 자격을 부여합니다." },
        { title: "현장 적합성", desc: "단순히 기능만 익히는 것이 아니라, 실무에서 즉시 활용 가능한 포트폴리오 제작 능력을 갖추었는지 평가합니다." },
      ].map((item, i) => (
        <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex gap-6 items-start">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center font-black text-zinc-900">
            {i + 1}
          </div>
          <div>
            <h4 className="text-xl font-black text-zinc-900 mb-2 font-display">{item.title}</h4>
            <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 7. Evaluation Flow
export const EvaluationFlowSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>EVALUATION PROCESS</SectionSubtitle>
    <SectionTitle>평가는 이렇게 <br />진행됩니다.</SectionTitle>
    
    <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4">
      {[
        { step: "01", label: "학습 진행", desc: "능력단위별 이론 및 실습" },
        { step: "02", label: "본평가", desc: "포트폴리오 제작 및 제출" },
        { step: "03", label: "결과 확인", desc: "60점 이상 합격 (Pass)" },
        { step: "04", label: "재평가", desc: "미달 시 보충 학습 후 재도전" },
      ].map((item, i) => (
        <React.Fragment key={i}>
          <div className="flex-1 w-full p-8 bg-white rounded-[2rem] border-2 border-zinc-100 text-center relative group hover:border-yellow-400 transition-all">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-zinc-900 text-yellow-400 text-[10px] font-bold rounded-full">STEP {item.step}</span>
            <h4 className="text-xl font-black text-zinc-900 mb-2 mt-2 font-display">{item.label}</h4>
            <p className="text-zinc-400 text-xs">{item.desc}</p>
          </div>
          {i < 3 && <ChevronRight className="text-zinc-200 hidden md:block" size={32} />}
        </React.Fragment>
      ))}
    </div>
  </div>
);

// 8. Training Overview
export const OverviewSummarySlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>COURSE SUMMARY</SectionSubtitle>
    <SectionTitle>훈련 개요</SectionTitle>
    
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Course Name</p>
            <p className="text-xl font-black text-zinc-800 font-display">[시각디자인] GTQ 1급 자격취득(포토샵)-10회차</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900">
            <Calendar size={24} />
          </div>
          <div>
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Duration</p>
            <p className="text-xl font-black text-zinc-800 font-display">2026.02.23 ~ 2026.03.17</p>
            <p className="text-sm text-zinc-500">16일 / 총 48시간</p>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-400 p-12 rounded-[3rem] text-zinc-900 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
          <Clock size={32} />
          <h4 className="text-3xl font-black font-display">일과 시간</h4>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-zinc-900/10 pb-4">
            <span className="font-bold">교육 시간</span>
            <span className="text-2xl font-black font-display">14:00 - 17:00</span>
          </div>
          <p className="text-sm font-medium opacity-80">1일 3시간, 총 3교시로 진행됩니다.</p>
        </div>
      </div>
    </div>
  </div>
);

// 9. Detailed Schedule Week 1-2
export const ScheduleDetail1Slide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>SCHEDULE DETAIL</SectionSubtitle>
    <SectionTitle>주차별 학습 계획 (1-2주)</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100">
        <h4 className="text-2xl font-black text-zinc-900 mb-6 font-display">WEEK 01</h4>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <p className="text-zinc-600">오리엔테이션 및 포토샵 기초 환경 설정</p>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <p className="text-zinc-600">시안 디자인 개발 기초: 레이어와 선택 도구</p>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <p className="text-zinc-600 font-bold text-zinc-900">02/27: 시안 디자인 개발 기초 평가</p>
          </li>
        </ul>
      </div>
      <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100">
        <h4 className="text-2xl font-black text-zinc-900 mb-6 font-display">WEEK 02</h4>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <p className="text-zinc-600">이미지 보정 및 합성 기법 심화</p>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <p className="text-zinc-600">펜 도구와 쉐이프 활용 디자인</p>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <p className="text-zinc-600">타이포그래피 및 레이어 스타일 적용</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

// 10. Detailed Schedule Week 3-4
export const ScheduleDetail2Slide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>SCHEDULE DETAIL</SectionSubtitle>
    <SectionTitle>주차별 학습 계획 (3-4주)</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100">
        <h4 className="text-2xl font-black text-zinc-900 mb-6 font-display">WEEK 03</h4>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <p className="text-zinc-600">시안 디자인 개발 응용: 실무 프로젝트 실습</p>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <p className="text-zinc-600 font-bold text-zinc-900">03/11: 시안 디자인 개발 응용 평가</p>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <p className="text-zinc-600">GTQ 1급 기출문제 분석 및 풀이 시작</p>
          </li>
        </ul>
      </div>
      <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100">
        <h4 className="text-2xl font-black text-zinc-900 mb-6 font-display">WEEK 04</h4>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <p className="text-zinc-600">시간 단축 전략 및 최종 모의고사</p>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <p className="text-zinc-600 font-bold text-zinc-900">03/13: GTQ 포토샵 기출 평가</p>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <p className="text-zinc-600">과정 마무리 및 수료식 (03/17)</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

// 11. Curriculum: NCS Subjects
export const CurriculumNCSSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>CURRICULUM: NCS</SectionSubtitle>
    <SectionTitle>NCS 전공교과 (39H)</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div className="bg-zinc-900 p-12 rounded-[3rem] text-white">
        <h4 className="text-3xl font-black mb-8 font-display text-yellow-400">시안 디자인 개발 기초</h4>
        <p className="text-zinc-400 mb-8">24시간 배정</p>
        <ul className="space-y-4 text-sm">
          <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-yellow-400" /> 디자인 컨셉 수립 및 자료 수집</li>
          <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-yellow-400" /> 기본 도구 활용 및 레이어 관리</li>
          <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-yellow-400" /> 기초 시안 제작 및 수정</li>
        </ul>
      </div>
      <div className="bg-zinc-100 p-12 rounded-[3rem] text-zinc-900">
        <h4 className="text-3xl font-black mb-8 font-display">시안 디자인 개발 응용</h4>
        <p className="text-zinc-500 mb-8">15시간 배정</p>
        <ul className="space-y-4 text-sm">
          <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-zinc-900" /> 심화 합성 및 특수 효과 적용</li>
          <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-zinc-900" /> 응용 시안 제작 및 완성도 향상</li>
          <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-zinc-900" /> 최종 결과물 도출 및 정리</li>
        </ul>
      </div>
    </div>
  </div>
);

// 12. Curriculum: Non-NCS Subjects
export const CurriculumNonNCSSlide = () => (
  <div className="h-full flex flex-col justify-center items-center text-center">
    <SectionSubtitle>CURRICULUM: NON-NCS</SectionSubtitle>
    <SectionTitle>비NCS 교과: <br /><span className="text-yellow-500">GTQ 포토샵 기출문제</span></SectionTitle>
    <p className="mt-8 text-zinc-500 text-lg max-w-2xl">
      NCS 교과 외에 자격증 취득을 위한 실전 기출문제 풀이와 <br />
      시험 전략 학습에 9시간을 집중 투자합니다.
    </p>
    
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {[
        { title: "실전 감각", desc: "실제 시험과 동일한 환경에서 기출문제 풀이" },
        { title: "시간 관리", desc: "90분 내에 4문제를 완벽히 해결하는 전략" },
        { title: "감점 방지", desc: "자주 틀리는 포인트와 감점 요인 집중 분석" },
      ].map((item, i) => (
        <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
          <h4 className="text-xl font-black text-zinc-900 mb-3 font-display">{item.title}</h4>
          <p className="text-zinc-400 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

// 13. Evaluation Schedule
export const EvalScheduleSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>EVALUATION SCHEDULE</SectionSubtitle>
    <SectionTitle>평가 일정 요약</SectionTitle>
    
    <div className="mt-12 space-y-4">
      {[
        { unit: "시안 디자인 개발 기초", main: "02/27 (금)", sub: "03/04 (수)", method: "포토폴리오" },
        { unit: "시안 디자인 개발 응용", main: "03/11 (수)", sub: "03/13 (금)", method: "포토폴리오" },
        { unit: "GTQ 포토샵 기출문제", main: "03/13 (금)", sub: "03/16 (월)", method: "포토폴리오" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col md:flex-row items-center gap-6 p-8 bg-white rounded-3xl border-2 border-zinc-100 hover:border-yellow-400 transition-all">
          <div className="flex-1">
            <h4 className="text-xl font-black text-zinc-900 font-display">{item.unit}</h4>
            <p className="text-sm text-zinc-400 mt-1">{item.method}</p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-zinc-900 text-white rounded-2xl text-center">
              <p className="text-[10px] font-bold uppercase opacity-50 mb-1">Main Eval</p>
              <p className="text-lg font-black font-display text-yellow-400">{item.main}</p>
            </div>
            <div className="px-6 py-3 bg-zinc-100 text-zinc-500 rounded-2xl text-center">
              <p className="text-[10px] font-bold uppercase opacity-50 mb-1">Re-Eval</p>
              <p className="text-lg font-black font-display">{item.sub}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 14. Attendance Policy: Basics
export const AttendanceBasicsSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>ATTENDANCE POLICY</SectionSubtitle>
    <SectionTitle>출결 관리의 기본</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      <div className="bg-yellow-400 p-12 rounded-[4rem] text-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 opacity-20" />
        <h4 className="text-4xl font-black mb-8 font-display">80% 이상 <br />출석 필수</h4>
        <p className="text-zinc-800 font-medium leading-relaxed">
          총 훈련일수 16일 중 <span className="font-black underline">13일 이상</span> 출석해야 <br />
          정상적으로 수료가 가능합니다. (최대 3일 결석 가능)
        </p>
      </div>
      <div className="space-y-6">
        <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center gap-6">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-zinc-900 font-black">IN</div>
          <div>
            <p className="text-xs text-zinc-400 font-bold uppercase">입실 체크</p>
            <p className="text-xl font-black font-display">14:00 까지 (14:10 이후 지각)</p>
          </div>
        </div>
        <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center gap-6">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-zinc-900 font-black">OUT</div>
          <div>
            <p className="text-xs text-zinc-400 font-bold uppercase">퇴실 체크</p>
            <p className="text-xl font-black font-display">17:00 정시 (16:50 이전 조퇴)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 15. Attendance Policy: Penalties
export const AttendancePenaltySlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>ATTENDANCE RULES</SectionSubtitle>
    <SectionTitle>지각, 조퇴, 결석 규정</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      <div className="p-10 bg-zinc-900 text-white rounded-[3rem] text-center">
        <div className="text-5xl font-black text-yellow-400 mb-6 font-display">3 = 1</div>
        <h4 className="text-xl font-bold mb-4">누적 결석</h4>
        <p className="text-zinc-400 text-sm">지각/조퇴/외출 3회 누적 시 <br />결석 1회로 산정됩니다.</p>
      </div>
      <div className="p-10 bg-zinc-100 text-zinc-900 rounded-[3rem] text-center">
        <div className="text-5xl font-black text-zinc-900 mb-6 font-display">5 DAYS</div>
        <h4 className="text-xl font-bold mb-4">연속 결석 금지</h4>
        <p className="text-zinc-500 text-sm">사유 없이 연속 5일 결석 시 <br />제적(중도탈락) 처리됩니다.</p>
      </div>
      <div className="p-10 bg-red-50 text-red-900 rounded-[3rem] text-center border border-red-100">
        <div className="text-5xl font-black text-red-600 mb-6 font-display">NO FAKE</div>
        <h4 className="text-xl font-bold mb-4">부정 출석 엄금</h4>
        <p className="text-red-700/60 text-sm">부정한 방법으로 출석 체크 시 <br />즉시 제적 및 패널티 부여</p>
      </div>
    </div>
  </div>
);

// 15-1. Attendance Recognition
export const AttendanceRecognitionSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>ATTENDANCE RECOGNITION</SectionSubtitle>
    <SectionTitle>출석 인정 사유 및 기간</SectionTitle>
    
    <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
      <div className="max-h-[420px] overflow-y-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead className="bg-zinc-900 text-white sticky top-0 z-10">
            <tr>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider">구분</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider">상세 사유</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-wider text-right">인정 일수</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 text-xs">
            {[
              { cat: "훈련·시험", reason: "예비군·민방위 훈련, 징병검사, 자격시험(직종관련), 채용시험 응시", days: "소요일수" },
              { cat: "결혼", reason: "본인", days: "5일" },
              { cat: "결혼", reason: "자녀", days: "1일" },
              { cat: "사망", reason: "배우자, 본인 및 배우자의 부모", days: "5일" },
              { cat: "사망", reason: "본인 및 배우자의 조부모, 외조부모", days: "3일" },
              { cat: "사망", reason: "자녀와 그 자녀의 배우자", days: "3일" },
              { cat: "사망", reason: "본인 및 배우자의 형제자매", days: "1일" },
              { cat: "출산", reason: "배우자", days: "5일" },
              { cat: "질병·입원", reason: "본인 및 자녀(만 19세 미만) / *전체 훈련일수의 10% 초과 불가", days: "소요일수" },
              { cat: "휴가", reason: "월 1회 휴가 (적치 사용 가능)", days: "월 1일" },
            ].map((item, i) => (
              <tr key={i} className="hover:bg-yellow-50 transition-colors">
                <td className="p-3 font-bold text-zinc-400 border-r border-zinc-50">{item.cat}</td>
                <td className="p-3 text-zinc-700">{item.reason}</td>
                <td className="p-3 font-black text-yellow-600 text-right">{item.days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <p className="mt-4 text-[10px] text-zinc-400 italic text-center">
      * 국민내일배움카드 운영규정 [별표 3] 기준 / 사유 발생일 기준 기산
    </p>
  </div>
);

// 15-2. Dropout Criteria
export const DropoutCriteriaSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>DROPOUT CRITERIA</SectionSubtitle>
    <SectionTitle>미수료(중도탈락) 기준</SectionTitle>
    
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        {[
          "정당한 사유 없이 연속 5일 이상 결석",
          "정당한 사유 없이 4일 이상 무단결석",
          "총 소정훈련일수의 20%를 초과하여 결석",
          "대리 출석 등 부정한 방법으로 출석 처리",
        ].map((text, i) => (
          <div key={i} className="p-6 bg-zinc-50 rounded-2xl border-l-4 border-red-500 flex items-center gap-4">
            <AlertCircle className="text-red-500 shrink-0" size={20} />
            <p className="text-sm font-bold text-zinc-700">{text}</p>
          </div>
        ))}
      </div>
      <div className="bg-zinc-900 p-10 rounded-[3rem] text-white flex flex-col justify-center">
        <h4 className="text-2xl font-black mb-6 font-display text-yellow-400">수강태도 불량</h4>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          음주, 약물복용, 폭행, 타 훈련생의 수업 지장 초래 등 훈련 과정을 정상적으로 운영할 수 없다고 판단되는 경우 제적 처리될 수 있습니다.
        </p>
        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
          <p className="text-[10px] text-zinc-500 uppercase font-bold mb-2 tracking-widest">Warning</p>
          <p className="text-xs text-zinc-300 italic">성실한 참여가 최선의 자격증 취득 전략입니다.</p>
        </div>
      </div>
    </div>
  </div>
);

// 16. GTQ Exam Overview
export const GTQOverviewSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>GTQ EXAM</SectionSubtitle>
    <SectionTitle>GTQ 1급 시험 안내</SectionTitle>
    
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100">
          <h4 className="text-2xl font-black text-zinc-900 mb-6 font-display">시험 과목 및 시간</h4>
          <ul className="space-y-4">
            <li className="flex justify-between border-b border-zinc-200 pb-2">
              <span className="text-zinc-500">시험 시간</span>
              <span className="font-bold">90분</span>
            </li>
            <li className="flex justify-between border-b border-zinc-200 pb-2">
              <span className="text-zinc-500">문항 수</span>
              <span className="font-bold">4문항 (실기)</span>
            </li>
            <li className="flex justify-between border-b border-zinc-200 pb-2">
              <span className="text-zinc-500">응시료(1급)</span>
              <span className="font-bold text-yellow-600">42,000원</span>
            </li>
            <li className="flex justify-between border-b border-zinc-200 pb-2">
              <span className="text-zinc-500">합격 기준</span>
              <span className="font-bold">70점 이상</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-zinc-900 p-12 rounded-[3rem] text-white flex flex-col justify-center">
        <Monitor size={48} className="text-yellow-400 mb-8" />
        <h4 className="text-3xl font-black mb-4 font-display">Adobe Photoshop CS6 / CC</h4>
        <p className="text-zinc-400 leading-relaxed text-sm">
          시험은 한글 및 영문 버전 선택이 가능하며, <br />
          접수 및 정보 확인은 <span className="text-yellow-400 underline">License.kpc.or.kr</span>에서 가능합니다.
        </p>
      </div>
    </div>
  </div>
);

// 17. GTQ Exam Schedule
export const GTQScheduleSlide = () => (
  <div className="h-full flex flex-col justify-center items-center text-center">
    <SectionSubtitle>EXAM SCHEDULE</SectionSubtitle>
    <SectionTitle>2026년 제3회 <br /><span className="text-yellow-500">GTQ 정기시험</span> 일정</SectionTitle>
    
    <div className="mt-16 w-full max-w-4xl bg-zinc-50 p-12 rounded-[4rem] border border-zinc-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">원서 접수</p>
          <p className="text-2xl font-black text-zinc-900 font-display">02.25 - 03.04</p>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-px bg-zinc-200 hidden md:block" />
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">시험 일자</p>
          <p className="text-3xl font-black text-yellow-600 font-display">03.28 (토)</p>
          <div className="absolute inset-y-0 right-0 w-px bg-zinc-200 hidden md:block" />
        </div>
        <div>
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">합격자 발표</p>
          <p className="text-2xl font-black text-zinc-900 font-display">04.17 (금)</p>
        </div>
      </div>
    </div>
    <p className="mt-8 text-zinc-400 text-sm italic">* 응시 수수료: 1급 42,000원 (수수료 별도)</p>
  </div>
);

// 18. GTQ Exam Tips
export const GTQTipsSlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>EXAM STRATEGY</SectionSubtitle>
    <SectionTitle>합격을 위한 실전 전략</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="space-y-4">
        <div className="p-6 bg-zinc-900 text-white rounded-3xl">
          <h4 className="text-lg font-black mb-4 font-display text-yellow-400">문제별 시간 배분 (90분)</h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>1번 (20점)</span>
              <span className="font-bold text-yellow-400">17분</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>2번 (20점)</span>
              <span className="font-bold text-yellow-400">13분</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>3번 (25점)</span>
              <span className="font-bold text-yellow-400">25분</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>4번 (35점)</span>
              <span className="font-bold text-yellow-400">35분</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
          <h5 className="font-bold text-zinc-900 mb-2">단축키 암기</h5>
          <p className="text-xs text-zinc-500">단축키를 외우면 작업 속도가 2배 이상 빨라집니다.</p>
        </div>
        <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
          <h5 className="font-bold text-zinc-900 mb-2">정확한 수치 입력</h5>
          <p className="text-xs text-zinc-500">지시사항의 픽셀(px) 단위를 정확히 지켜야 감점을 피합니다.</p>
        </div>
        <div className="p-6 bg-yellow-400 rounded-2xl shadow-lg">
          <h5 className="font-bold text-zinc-900 mb-2">파일 저장 규칙</h5>
          <p className="text-xs text-zinc-800">JPG(원본크기)와 PSD(1/10크기) 두 가지 모두 제출 필수!</p>
        </div>
      </div>
    </div>
  </div>
);

// 19. Safety & Facilities
export const SafetySlide = () => (
  <div className="h-full flex flex-col justify-center">
    <SectionSubtitle>SAFETY & CONTACT</SectionSubtitle>
    <SectionTitle>안전 및 비상 연락처</SectionTitle>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      <div className="space-y-6">
        <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-zinc-900">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h4 className="text-xl font-black text-zinc-900 font-display">안전 수칙</h4>
            <p className="text-sm text-zinc-500 mt-1">비상 대피로 및 소화기 위치 숙지 (강의실 내 비치)</p>
          </div>
        </div>
        <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-zinc-900">
            <Car size={32} />
          </div>
          <div>
            <h4 className="text-xl font-black text-zinc-900 font-display">주차 안내</h4>
            <p className="text-sm text-zinc-500 mt-1">LC타워 지하 1층 (2시간 무료, 사전 정산 필수)</p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-400 p-12 rounded-[3rem] text-zinc-900 flex flex-col justify-center shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <Phone size={32} />
          <h4 className="text-3xl font-black font-display">비상 연락처</h4>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-white/20 p-4 rounded-2xl">
            <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-yellow-400">
              <User size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase opacity-60">Lead Instructor</p>
              <p className="text-xl font-black font-display">채수훈 강사</p>
              <p className="text-lg font-bold font-mono">010-6274-6860</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/20 p-4 rounded-2xl">
            <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white">
              <HelpCircle size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase opacity-60">Administration</p>
              <p className="text-lg font-bold">김세아 선생님 (상담)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 20. Closing Slide
export const ClosingSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center relative overflow-hidden">
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="w-48 h-48 bg-yellow-400 rounded-full flex items-center justify-center mb-12 shadow-2xl shadow-yellow-400/40"
    >
      <GraduationCap size={80} className="text-zinc-900" />
    </motion.div>
    
    <h2 className="text-7xl font-black text-zinc-900 mb-6 tracking-tighter font-display">여러분의 새로운 시작을 <br /><span className="text-yellow-500">응원합니다!</span></h2>
    <p className="text-xl text-zinc-400 font-medium mb-16">GTQ 1급 취득을 향한 첫걸음, 함께하겠습니다.</p>
    
    <div className="flex gap-4">
      <div className="px-8 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold tracking-widest uppercase">더국제</div>
    </div>
    
    {/* Decorative background text */}
    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-[30vw] font-black text-zinc-50 select-none -z-10 tracking-tighter leading-none opacity-30">
      FINISH
    </div>
  </div>
);
