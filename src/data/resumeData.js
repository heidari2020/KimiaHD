export const resumeData = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      badge: 'Open to Relocation • Germany',
      role: '.NET Software Engineer',
      name: 'Kimia Heidari',
      summary:
        '.NET Software Engineer with 5+ years of experience designing and scaling enterprise financial technology platforms using C#, ASP.NET Core, and .NET (6/8). Specialized in DDD, Clean Architecture, microservices, and high-throughput SQL Server systems.',
      copyEmail: 'Copy Email',
      copied: 'Copied!',
      email: 'kimia.heidari202@gmail.com',
      linkedin: 'https://www.linkedin.com/in/k-heidari-dev',
      github: 'https://github.com/heidari2020',
      floatingBadges: ['.NET 8 / C#', 'German B2', '5+ Yrs FinTech'],
    },
    bento: {
      stats: [
        { value: '5+', label: 'Years Experience', color: 'from-cyan-400 to-blue-500' },
        { value: '8+', label: 'Core Microservices', color: 'from-purple-400 to-indigo-500' },
        { value: '150K+', label: 'Daily API Requests', color: 'from-emerald-400 to-teal-500' },
        { value: '99.9%', label: 'System Uptime', color: 'from-amber-400 to-orange-500' },
      ],
      simTitle: 'Live API Health Check',
      simBtn: 'Simulate Request',
    },
    skills: {
      title: 'Technical Skills',
      all: 'All',
      categories: [
        { name: 'Backend', items: ['C#', '.NET (6/8)', 'ASP.NET Core', 'RESTful APIs', 'EF Core', 'Dapper', 'LINQ'] },
        { name: 'Architecture', items: ['Microservices', 'DDD', 'Clean Architecture', 'Event-Driven', 'SOLID', 'Design Patterns'] },
        { name: 'Data & Messaging', items: ['SQL Server (T-SQL)', 'Redis', 'MongoDB', 'RabbitMQ', 'Kafka', 'Hangfire'] },
        { name: 'Testing & DevOps', items: ['xUnit', 'Moq', 'Docker', 'Git / GitHub', 'Swagger/OpenAPI', 'Agile/Scrum'] },
        { name: 'Frontend', items: ['TypeScript', 'JavaScript', 'React', 'Blazor', 'Razor', 'Tailwind CSS'] },
      ],
    },
    experience: {
      title: 'Work Experience',
      jobs: [
        {
          role: 'Backend Engineer',
          company: 'Bank Refah',
          location: 'Tehran, Iran',
          period: 'Jan 2023 – Present',
          metrics: ['150K+ req/day', '99.9% uptime', '-70% manual time', '-45% SQL latency'],
          points: [
            'Architected and led 8+ core banking microservices using C#, ASP.NET Core, EF Core, and T-SQL based on DDD and Clean Architecture.',
            'Developed the IRMA real-time regulatory reporting system streaming live ATM telemetry and 50,000+ daily transactions with sub-second latency.',
            'Engineered the Digital Promissory Note platform (10,000+ purchases) and Open Banking / Direct-Debit modules (30,000+ monthly recurring payments).',
            'Optimized MS SQL Server stored procedures, Redis caching, and Hangfire jobs, cutting peak query time by 45% and tripling batch throughput.',
          ],
        },
        {
          role: 'Software Developer (Part-Time)',
          company: 'Viral Tech',
          location: 'Tehran, Iran',
          period: 'Aug 2023 – Dec 2023',
          metrics: ['80%+ test coverage', '-40% bugs'],
          points: [
            'Implemented 2FA and role-based access control (RBAC) across 5+ backend API modules.',
            'Built automated unit and integration test suites with xUnit and Moq, cutting post-release regression bugs by 40%.',
          ],
        },
        {
          role: 'Software Developer',
          company: 'RefahPardis',
          location: 'Tehran, Iran',
          period: 'Oct 2020 – Oct 2022',
          metrics: ['-35% API latency', '10K+ wallet tx/mo', '+50% report speed'],
          points: [
            'Led refactoring and migration of 3 core enterprise systems from .NET Framework to .NET 6, reducing average API latency by 35%.',
            'Engineered backend architecture for Digital Wallet apps (10,000+ monthly transactions) and Exclusive E-Banking services (5,000+ users).',
            'Designed complex T-SQL queries and indexed views, accelerating end-of-day financial reporting by 50%.',
          ],
        },
      ],
      education: {
        title: 'Education & Languages',
        degree: 'B.Sc. in Computer Science',
        uni: 'Islamic Azad University, West Tehran Branch (2017 – 2021)',
        languages: [
          { name: 'German', level: 'B2 (Upper Intermediate)', percent: '80%' },
          { name: 'English', level: 'B1 (Intermediate)', percent: '65%' },
          { name: 'Persian', level: 'Native', percent: '100%' },
        ],
      },
    },
  },
  de: {
    nav: {
      about: 'Profil',
      skills: 'Kenntnisse',
      experience: 'Erfahrung',
      contact: 'Kontakt',
    },
    hero: {
      badge: 'Umzugsbereit • Deutschland',
      role: '.NET Software Engineer',
      name: 'Kimia Heidari',
      summary:
        '.NET Software Engineer mit über 5 Jahren Erfahrung in der Konzeption und Skalierung von FinTech- und Enterprise-Plattformen mit C#, ASP.NET Core und .NET (6/8). Spezialisiert auf DDD, Clean Architecture, Microservices und performante SQL-Server-Systeme.',
      copyEmail: 'E-Mail kopieren',
      copied: 'Kopiert!',
      email: 'kimia.heidari202@gmail.com',
      linkedin: 'https://www.linkedin.com/in/k-heidari-dev',
      github: 'https://github.com/heidari2020',
      floatingBadges: ['.NET 8 / C#', 'Deutsch B2', '5+ Jahre FinTech'],
    },
    bento: {
      stats: [
        { value: '5+', label: 'Jahre Erfahrung', color: 'from-cyan-400 to-blue-500' },
        { value: '8+', label: 'Core-Microservices', color: 'from-purple-400 to-indigo-500' },
        { value: '150K+', label: 'Tägliche API-Anfragen', color: 'from-emerald-400 to-teal-500' },
        { value: '99,9%', label: 'Verfügbarkeit', color: 'from-amber-400 to-orange-500' },
      ],
      simTitle: 'Live API Health Check',
      simBtn: 'Anfrage simulieren',
    },
    skills: {
      title: 'Technische Kenntnisse',
      all: 'Alle',
      categories: [
        { name: 'Backend', items: ['C#', '.NET (6/8)', 'ASP.NET Core', 'RESTful APIs', 'EF Core', 'Dapper', 'LINQ'] },
        { name: 'Architektur', items: ['Microservices', 'DDD', 'Clean Architecture', 'Event-Driven', 'SOLID', 'Design Patterns'] },
        { name: 'Daten & Messaging', items: ['SQL Server (T-SQL)', 'Redis', 'MongoDB', 'RabbitMQ', 'Kafka', 'Hangfire'] },
        { name: 'Testing & DevOps', items: ['xUnit', 'Moq', 'Docker', 'Git / GitHub', 'Swagger/OpenAPI', 'Agile/Scrum'] },
        { name: 'Frontend', items: ['TypeScript', 'JavaScript', 'React', 'Blazor', 'Razor', 'Tailwind CSS'] },
      ],
    },
    experience: {
      title: 'Berufserfahrung',
      jobs: [
        {
          role: 'Backend Engineer',
          company: 'Bank Refah',
          location: 'Teheran, Iran',
          period: '01/2023 – heute',
          metrics: ['150K+ Req/Tag', '99,9% Uptime', '-70% manuelle Zeit', '-45% SQL-Latenz'],
          points: [
            'Konzeption und technische Leitung von über 8 Core-Banking-Microservices mit C#, ASP.NET Core, EF Core und T-SQL nach DDD und Clean Architecture.',
            'Entwicklung des Echtzeit-Meldesystems IRMA zur Übertragung von Live-ATM-Telemetrie und über 50.000 täglichen Transaktionen.',
            'Entwicklung der digitalen Schuldschein-Plattform (10.000+ Transaktionen) sowie Open-Banking- und Lastschrift-Modulen (30.000+ monatliche Abrechnungen).',
            'Optimierung von SQL-Server-Stored-Procedures, Redis-Caching und Hangfire-Jobs (45 % schnellere Abfragen, 3x Batch-Durchsatz).',
          ],
        },
        {
          role: 'Software Developer (Teilzeit)',
          company: 'Viral Tech',
          location: 'Teheran, Iran',
          period: '08/2023 – 12/2023',
          metrics: ['80%+ Testabdeckung', '-40% Bugs'],
          points: [
            'Implementierung von 2FA und rollenbasierter Zugriffskontrolle (RBAC) für über 5 Backend-API-Module.',
            'Aufbau automatisierter Unit- und Integrationstests mit xUnit und Moq (40 % weniger Regressionsfehler).',
          ],
        },
        {
          role: 'Software Developer',
          company: 'RefahPardis',
          location: 'Teheran, Iran',
          period: '10/2020 – 10/2022',
          metrics: ['-35% API-Latenz', '10K+ Wallet-Tx/Mo', '+50% Report-Speed'],
          points: [
            'Leitung der Migration von 3 Enterprise-Systemen von .NET Framework auf .NET 6 (35 % geringere API-Latenz).',
            'Entwicklung der Backend-Architektur für digitale Wallet-Apps (10.000+ monatliche Transaktionen) und E-Banking-Services.',
            'Erstellung komplexer T-SQL-Abfragen und indexierter Views zur Beschleunigung von Tagesabschlussberichten um 50 %.',
          ],
        },
      ],
      education: {
        title: 'Ausbildung & Sprachen',
        degree: 'B.Sc. in Informatik',
        uni: 'Islamic Azad University, West Tehran Branch (2017 – 2021)',
        languages: [
          { name: 'Deutsch', level: 'B2 (Fließend)', percent: '80%' },
          { name: 'Englisch', level: 'B1 (Gut)', percent: '65%' },
          { name: 'Persisch', level: 'Muttersprache', percent: '100%' },
        ],
      },
    },
  },
};