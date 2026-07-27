import type { Project, Experience, SkillCategory } from './types';
import masarImg from '../assets/masar_eagle_app_1784052321524.jpg';
import moteelzImg from '../assets/moteelz_app_1784052335904.jpg';
import financialImg from '../assets/financial_app_1784052349274.jpg';

export const personalInfo = {
  name: 'Salah Aldeen Mohammed Al-Mamari',
  title: 'Mobile Developer',
  email: 'salahalmamaridev@gmail.com',
  phone: '+967 714 846 856',
  location: 'Tunis Street - Sana\'a, Yemen',
  github: 'https://github.com/salahaldeenalmamary',
  summary: 'Mobile Developer with a Bachelor\'s in Computer Science and 3+ years of experience in building cross-platform applications using Flutter and Dart. Skilled in REST APIs, state management, and delivering high-performance mobile solutions.',
};

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  university: "Sana'a University, Sana'a, Yemen",
  period: "2023-2024",
  grade: "Excellent",
  secondary: "Osama Ben Zaid - Yemen – Almhweet (2017-2018)"
};

export const experiences: Experience[] = [
  {
    role: 'Flutter Developer',
    company: 'Solimar Investment Company – Masar Eagle Project',
    location: "Sana'a, Yemen",
    period: 'Mar 2025 – May 2026',
    description: [
      'Developed a comprehensive ride-hailing mobile application (similar to Uber/Careem) for both passengers and drivers using Flutter.'
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Moteelz',
    location: 'Riyadh, Saudi Arabia (Remote)',
    period: 'Mar 2025 – Jul 2025',
    description: [
      'Designed, developed, and maintained a scalable and comprehensive hotel reservation system.'
    ],
  }
];

export const projects: Project[] = [
  {
    title: 'Masar Eagle',
    description: 'A comprehensive ride-hailing mobile application for both passengers and drivers, providing seamless booking and tracking experiences.',
    features: ['Real-time location tracking', 'Driver & Passenger apps', 'Cross-platform Flutter build'],
    image: masarImg,
    links: [
      { label: 'Driver - App Store', url: 'https://apps.apple.com/us/app/id6753741246' },
      { label: 'Driver - Google Play', url: 'https://play.google.com/store/apps/details?id=com.masareagle.driver' },
      { label: 'Passenger - App Store', url: 'https://apps.apple.com/us/app/id6754587666' },
      { label: 'Passenger - Google Play', url: 'https://play.google.com/store/apps/details?id=com.masareagle.passenger' },
    ],
  },
  {
    title: 'Moteelz',
    description: 'A scalable hotel reservation mobile application for finding and booking luxury stays with ease.',
    features: ['Scalable architecture', 'Comprehensive booking flow', 'User-friendly interface'],
    image: moteelzImg,
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/ye/app/%D9%85%D9%88%D8%AA%D9%8A%D9%84%D8%B2/id6476879248' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.moteelz.app' },
    ],
  },
  {
    title: 'Financial Management App',
    description: 'A comprehensive financial management system handling accounts, sales, purchases, and inventory.',
    features: [
      'Financial reporting & analytics',
      'Asynchronous data synchronization (gRPC)',
      'Cross-platform (Android, iOS, macOS, Windows)'
    ],
    image: financialImg,
    links: [
      { label: 'Huawei AppGallery', url: 'https://appgallery.huawei.com/app/C113470867?sharePrepath=ag' },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Dart', 'C#', 'Java', 'Kotlin', 'JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['Flutter', 'ASP.NET Core']
  },
  {
    name: 'State Management',
    skills: ['BLoC', 'Provider', 'Riverpod', 'GetX', 'Signals', 'Flutter Hooks']
  },
  {
    name: 'APIs & Integration',
    skills: ['RESTful APIs', 'gRPC']
  },
  {
    name: 'Databases & Backend',
    skills: ['Firebase (FCM)', 'SQLite', 'SQL Server']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'CI/CD', 'Android Studio', 'VS Code']
  },
  {
    name: 'Architecture',
    skills: ['OOP', 'SOLID', 'Clean Architecture', 'MVC', 'MVVM']
  },
  {
    name: 'Other',
    skills: ['Unit Testing', 'Debugging', 'Agile', 'UI/UX', 'Cross-Platform Dev']
  }
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Intermediate' }
];
