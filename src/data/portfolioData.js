const sharedSkills = [
  { group: "Backend", items: ["PHP", "Laravel", "NestJS", "REST API"] },
  { group: "Frontend", items: ["ReactJS", "JavaScript", "HTML", "CSS"] },
  { group: "Database", items: ["MySQL", "PostgreSQL"] },
  { group: "Tools", items: ["Git", "Linux", "API Integration"] },
];

const sharedContact = {
  location: "Kota Jambi, Indonesia",
  email: "adzypurnomo@gmail.com",
  phone: "082281388718",
};

export const portfolioContent = {
  en: {
    languageLabel: "EN",
    navItems: [
      { id: "summary", label: "Summary" },
      { id: "experience", label: "Experience" },
      { id: "systems", label: "Systems" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Contributions" },
      { id: "education", label: "Education" },
    ],
    controls: {
      contact: "Contact",
      language: "ID",
      switchLanguage: "Switch to Bahasa Indonesia",
      light: "Light",
      dark: "Dark",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
    hero: {
      eyebrow: "Enterprise Portfolio",
      name: "Adzi Purnomo",
      role: "IT Programmer / System Support Engineer",
      summary:
        "Production-focused IT Programmer responsible for keeping operational systems stable across HRD, finance, and operations. Handles backend, frontend, database troubleshooting, and service continuity under daily business pressure.",
      primaryCta: "View Experience",
      secondaryCta: "Contact",
      operationalScopeLabel: "Operational Scope",
      operationalScopeValue: "Production systems and user support",
      primaryResponsibilityLabel: "Primary Responsibility",
      primaryResponsibility:
        "Maintain continuity, isolate production faults, and support departments that depend on stable application and database workflows.",
      focusAreas: ["POS operations", "HRD Mitrasoft", "NestJS / ReactJS", "MySQL / PostgreSQL"],
      metrics: [
        { value: "2025", label: "Current IT role" },
        { value: "3", label: "Departments supported" },
        { value: "2", label: "Core systems handled" },
        { value: "8+", label: "Years diagnostic work" },
      ],
    },
    summary: {
      label: "Professional Summary",
      title: "System Reliability and Production Responsibility",
      description:
        "Focused on keeping production systems stable through disciplined incident handling, technical ownership, and practical root-cause resolution.",
      principlesLabel: "Working Principles",
      principles: ["Incident triage", "Root-cause isolation", "Database consistency", "User continuity"],
      paragraphs: [
        "Adzi Purnomo is an IT Programmer with direct responsibility for business-critical systems in active production environments. His daily scope combines backend support, frontend handling, database reliability, and cross-department operational coordination.",
        "He focuses on practical reliability work: triaging incidents, stabilizing user-facing systems, isolating root causes quickly, and applying durable fixes that reduce repeat disruption. The result is dependable system behavior where operational downtime is costly.",
      ],
    },
    experience: {
      label: "Experience",
      title: "Production-Driven Career Path",
      description:
        "Current responsibility is centered on live production systems. Previous experience provides the diagnostic discipline behind current incident handling decisions.",
      currentBadge: "Main Current Role",
      items: [
        {
          company: "PT Surya Pratama Keramindo",
          role: "IT Programmer",
          period: "2025 - Present",
          summary:
            "Owns day-to-day production reliability for operational applications, backend services, frontend workflows, and database-backed processes.",
          highlights: [
            "Maintains the Point of Sales (POS) system used in daily transactions and resolves incidents before they impact operational flow.",
            "Handles HRD system support (Mitrasoft), including troubleshooting, issue verification, and user guidance for HR-related processes.",
            "Handles backend and frontend operational work using NestJS and ReactJS for internal system maintenance, bug fixing, and feature support.",
            "Diagnoses production issues across application, API, MySQL, and PostgreSQL layers by tracing symptoms to root causes instead of applying temporary workarounds.",
            "Improves database behavior by optimizing queries and addressing data consistency issues that can affect reporting and transactional accuracy.",
            "Supports HRD, Finance, and Operations teams as a technical escalation point for bugs, performance drops, and process interruptions.",
            "Executes bug fixes in active environments with controlled, operationally safe changes to preserve service continuity.",
          ],
        },
        {
          company: "PT Sitcomtara",
          role: "Technician Consumer Electronics",
          period: "2017 - 2025",
          summary:
            "Built a high-discipline troubleshooting foundation through precision diagnostics and high-volume repair work.",
          highlights: [
            "Diagnosed and repaired electronic devices with a structured approach that prioritized accuracy over trial-and-error methods.",
            "Performed root-cause analysis across recurring hardware failures, improving repair consistency and turnaround quality.",
            "Handled hundreds of troubleshooting cases per month while maintaining consistent quality under time pressure.",
            "Refined troubleshooting workflows that improved analysis speed and decision clarity during complex failure cases.",
          ],
          transition:
            "This diagnostic background now strengthens his IT production work: faster fault isolation, clearer incident reasoning, and more reliable corrective actions in live systems.",
        },
      ],
    },
    systems: {
      label: "Systems Experience",
      title: "Operational System Ownership",
      description:
        "Hands-on responsibilities in active business systems with direct impact on daily continuity and user operations.",
      items: [
        {
          name: "Point of Sales (POS) System",
          focus: "Daily transaction operations",
          responsibilities: [
            "Monitors and supports system usage during active operational hours.",
            "Resolves transaction, master-data, and workflow issues that affect sales execution.",
            "Coordinates application, API, and database-level fixes when incidents involve data integrity or process failures.",
            "Supports stability improvements by documenting recurring issues and applying preventive corrections.",
          ],
        },
        {
          name: "HRD System (Mitrasoft)",
          focus: "HR operational workflows",
          responsibilities: [
            "Handles user-reported errors and process blockers across HR administrative flows.",
            "Validates issue context with HR users and applies corrective actions aligned with existing business rules.",
            "Troubleshoots underlying database, integration, or configuration issues that create reporting and process inconsistencies.",
            "Maintains continuity for HR operations through responsive support and controlled production updates.",
          ],
        },
      ],
    },
    skills: {
      label: "Technical Skills",
      title: "Core Technologies",
      description:
        "Technology stack used for production support, maintenance, and implementation in operational environments.",
      items: sharedSkills,
    },
    projects: {
      label: "Technical Contributions",
      title: "Operational Reliability Work",
      description:
        "Selected technical work focused on reliability, operational continuity, and production issue handling. Presented without visual galleries to keep attention on responsibility and business impact.",
      stackLabel: "Stack",
      items: [
        {
          title: "Production Incident Tracking for Internal Applications",
          context: "Operational Control Initiative",
          summary:
            "Structured incident categorization and follow-up workflow for recurring application disruptions in operational systems.",
          stack: ["NestJS", "ReactJS", "PostgreSQL", "Git"],
        },
        {
          title: "POS Data Consistency and Query Stabilization",
          context: "Data Reliability Improvement",
          summary:
            "Refined problematic transaction/report queries and corrected data inconsistency patterns that affected operational visibility.",
          stack: ["MySQL", "PostgreSQL", "PHP", "Linux"],
        },
        {
          title: "HRD Support Process Documentation (Mitrasoft)",
          context: "Support Standardization",
          summary:
            "Created technical handling references for recurring HRD system issues to improve response consistency and reduce repeated escalation cycles.",
          stack: ["Documentation Workflow", "SQL Validation", "User Support"],
        },
      ],
    },
    education: {
      label: "Education",
      title: "Technical Foundation",
      description:
        "Formal education that supports software development, database analysis, and disciplined system troubleshooting.",
      items: [
        {
          degree: "Bachelor of Informatics Engineering",
          institution: "Universitas Nurdin Hamzah Jambi",
          period: "2020 - 2024",
          meta: "GPA: 3.78/4.00",
          details: [
            "Focused on software development, data analysis, IoT, and information systems.",
            "Final project: IoT-based Smart Garden system prototype.",
          ],
        },
        {
          degree: "Industrial Electronics Engineering",
          institution: "SMK Negeri 1 Natar Lampung Selatan",
          period: "2013 - 2016",
          meta: "Vocational technical education",
          details: [
            "Focused on industrial electronics, control systems, and technical diagnostics.",
          ],
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Professional Contact",
      description:
        "Available for roles requiring practical production-system ownership, reliable incident response, and cross-functional technical support.",
      fields: {
        location: "Location",
        email: "Email",
        phone: "Phone / WhatsApp",
        availability: "Availability",
      },
      note:
        "Open to IT Programmer and system support roles for enterprise, government, and defense-sector environments.",
      ...sharedContact,
    },
  },
  id: {
    languageLabel: "ID",
    navItems: [
      { id: "summary", label: "Ringkasan" },
      { id: "experience", label: "Pengalaman" },
      { id: "systems", label: "Sistem" },
      { id: "skills", label: "Keahlian" },
      { id: "projects", label: "Kontribusi" },
      { id: "education", label: "Pendidikan" },
    ],
    controls: {
      contact: "Kontak",
      language: "EN",
      switchLanguage: "Switch to English",
      light: "Terang",
      dark: "Gelap",
      switchToLight: "Ganti ke mode terang",
      switchToDark: "Ganti ke mode gelap",
    },
    hero: {
      eyebrow: "Portofolio Profesional",
      name: "Adzi Purnomo",
      role: "IT Programmer / System Support Engineer",
      summary:
        "IT Programmer berorientasi produksi yang bertanggung jawab menjaga stabilitas sistem operasional lintas HRD, finance, dan operations. Menangani backend, frontend, database troubleshooting, serta kontinuitas layanan dalam aktivitas bisnis harian.",
      primaryCta: "Lihat Pengalaman",
      secondaryCta: "Kontak",
      operationalScopeLabel: "Ruang Lingkup Operasional",
      operationalScopeValue: "Sistem produksi dan dukungan pengguna",
      primaryResponsibilityLabel: "Tanggung Jawab Utama",
      primaryResponsibility:
        "Menjaga kontinuitas layanan, mengisolasi gangguan produksi, dan mendukung departemen yang bergantung pada workflow aplikasi dan database yang stabil.",
      focusAreas: ["Operasional POS", "HRD Mitrasoft", "NestJS / ReactJS", "MySQL / PostgreSQL"],
      metrics: [
        { value: "2025", label: "Peran IT saat ini" },
        { value: "3", label: "Departemen didukung" },
        { value: "2", label: "Sistem inti ditangani" },
        { value: "8+", label: "Tahun kerja diagnostik" },
      ],
    },
    summary: {
      label: "Ringkasan Profesional",
      title: "Reliabilitas Sistem dan Tanggung Jawab Produksi",
      description:
        "Berfokus pada stabilitas sistem produksi melalui penanganan insiden yang disiplin, kepemilikan teknis, dan penyelesaian akar masalah yang praktis.",
      principlesLabel: "Prinsip Kerja",
      principles: ["Triage insiden", "Isolasi akar masalah", "Konsistensi database", "Kontinuitas pengguna"],
      paragraphs: [
        "Adzi Purnomo adalah IT Programmer dengan tanggung jawab langsung terhadap sistem bisnis kritikal di lingkungan produksi aktif. Ruang lingkup hariannya mencakup backend support, frontend handling, reliabilitas database, dan koordinasi operasional lintas departemen.",
        "Fokus kerjanya adalah reliabilitas yang praktis: menilai prioritas insiden, menstabilkan sistem yang digunakan user, mengisolasi akar masalah dengan cepat, dan menerapkan perbaikan yang mengurangi gangguan berulang. Pendekatan ini relevan untuk lingkungan enterprise, pemerintahan, dan institusi yang menuntut disiplin operasional.",
      ],
    },
    experience: {
      label: "Pengalaman",
      title: "Karier Berbasis Sistem Produksi",
      description:
        "Tanggung jawab saat ini berpusat pada sistem produksi yang berjalan aktif. Pengalaman sebelumnya memperkuat disiplin diagnostik dalam pengambilan keputusan saat menangani insiden.",
      currentBadge: "Peran Utama Saat Ini",
      items: [
        {
          company: "PT Surya Pratama Keramindo",
          role: "IT Programmer",
          period: "2025 - Sekarang",
          summary:
            "Bertanggung jawab terhadap reliabilitas harian aplikasi operasional, backend service, workflow frontend, dan proses yang bergantung pada database.",
          highlights: [
            "Memelihara sistem Point of Sales (POS) yang digunakan dalam transaksi harian dan menangani insiden sebelum mengganggu alur operasional.",
            "Menangani support sistem HRD (Mitrasoft), termasuk troubleshooting, verifikasi masalah, dan pendampingan user untuk proses HR.",
            "Menangani pekerjaan backend dan frontend menggunakan NestJS dan ReactJS untuk maintenance sistem internal, bug fixing, dan dukungan fitur.",
            "Mendiagnosis masalah produksi pada layer aplikasi, API, MySQL, dan PostgreSQL dengan menelusuri gejala hingga akar masalah.",
            "Mengoptimalkan perilaku database melalui query improvement dan penanganan konsistensi data yang dapat memengaruhi laporan maupun akurasi transaksi.",
            "Mendukung tim HRD, Finance, dan Operations sebagai eskalasi teknis untuk bug, penurunan performa, dan gangguan proses.",
            "Melakukan bug fixing pada environment aktif dengan perubahan yang terkendali agar kontinuitas layanan tetap terjaga.",
          ],
        },
        {
          company: "PT Sitcomtara",
          role: "Technician Consumer Electronics",
          period: "2017 - 2025",
          summary:
            "Membangun fondasi troubleshooting yang disiplin melalui diagnosis presisi dan pekerjaan perbaikan bervolume tinggi.",
          highlights: [
            "Mendiagnosis dan memperbaiki perangkat elektronik dengan pendekatan terstruktur yang mengutamakan akurasi.",
            "Melakukan root-cause analysis terhadap pola kerusakan berulang untuk meningkatkan konsistensi perbaikan.",
            "Menangani ratusan kasus troubleshooting per bulan dengan tetap menjaga kualitas di bawah tekanan waktu.",
            "Menyempurnakan alur troubleshooting agar proses analisis lebih cepat dan keputusan teknis lebih jelas.",
          ],
          transition:
            "Fondasi diagnostik ini memperkuat pekerjaan IT saat ini: fault isolation lebih cepat, penalaran insiden lebih jelas, dan tindakan korektif lebih andal di sistem yang sedang berjalan.",
        },
      ],
    },
    systems: {
      label: "Pengalaman Sistem",
      title: "Kepemilikan Sistem Operasional",
      description:
        "Tanggung jawab langsung pada sistem bisnis aktif yang berdampak terhadap kontinuitas harian dan operasional user.",
      items: [
        {
          name: "Point of Sales (POS) System",
          focus: "Operasional transaksi harian",
          responsibilities: [
            "Memantau dan mendukung penggunaan sistem selama jam operasional aktif.",
            "Menyelesaikan masalah transaksi, master data, dan workflow yang memengaruhi proses penjualan.",
            "Mengkoordinasikan perbaikan pada level aplikasi, API, dan database saat insiden berkaitan dengan integritas data atau kegagalan proses.",
            "Mendukung peningkatan stabilitas melalui dokumentasi masalah berulang dan tindakan pencegahan.",
          ],
        },
        {
          name: "HRD System (Mitrasoft)",
          focus: "Workflow operasional HR",
          responsibilities: [
            "Menangani error yang dilaporkan user dan hambatan proses pada alur administrasi HR.",
            "Memvalidasi konteks masalah bersama user HR dan menerapkan tindakan korektif sesuai business rule yang berlaku.",
            "Melakukan troubleshooting pada database, integrasi, atau konfigurasi yang menyebabkan inkonsistensi proses dan laporan.",
            "Menjaga kontinuitas operasional HR melalui support responsif dan update produksi yang terkendali.",
          ],
        },
      ],
    },
    skills: {
      label: "Keahlian Teknis",
      title: "Teknologi Utama",
      description:
        "Stack teknologi yang digunakan untuk support produksi, maintenance, dan implementasi pada lingkungan operasional.",
      items: sharedSkills,
    },
    projects: {
      label: "Kontribusi Teknis",
      title: "Pekerjaan Reliabilitas Operasional",
      description:
        "Pekerjaan teknis terpilih yang berfokus pada reliabilitas, kontinuitas operasional, dan penanganan masalah produksi. Disajikan tanpa galeri visual agar fokus tetap pada tanggung jawab dan dampak kerja.",
      stackLabel: "Stack",
      items: [
        {
          title: "Production Incident Tracking untuk Aplikasi Internal",
          context: "Inisiatif Kontrol Operasional",
          summary:
            "Menyusun kategorisasi insiden dan alur follow-up untuk gangguan aplikasi yang berulang pada sistem operasional.",
          stack: ["NestJS", "ReactJS", "PostgreSQL", "Git"],
        },
        {
          title: "Stabilisasi Query dan Konsistensi Data POS",
          context: "Peningkatan Reliabilitas Data",
          summary:
            "Merapikan query transaksi/laporan yang bermasalah dan menangani pola inkonsistensi data yang memengaruhi visibilitas operasional.",
          stack: ["MySQL", "PostgreSQL", "PHP", "Linux"],
        },
        {
          title: "Dokumentasi Support HRD System (Mitrasoft)",
          context: "Standardisasi Support",
          summary:
            "Menyusun referensi penanganan teknis untuk masalah HRD yang berulang agar respons lebih konsisten dan eskalasi berulang berkurang.",
          stack: ["Documentation Workflow", "SQL Validation", "User Support"],
        },
      ],
    },
    education: {
      label: "Pendidikan",
      title: "Fondasi Teknis",
      description:
        "Pendidikan formal yang mendukung pengembangan perangkat lunak, analisis data, dan troubleshooting sistem secara disiplin.",
      items: [
        {
          degree: "Sarjana Teknik Informatika",
          institution: "Universitas Nurdin Hamzah Jambi",
          period: "2020 - 2024",
          meta: "IPK: 3.78/4.00",
          details: [
            "Fokus pada pengembangan perangkat lunak, analisis data, IoT, dan sistem informasi.",
            "Skripsi: Prototype sistem Smart Garden berbasis IoT.",
          ],
        },
        {
          degree: "Teknik Elektronika Industri",
          institution: "SMK Negeri 1 Natar Lampung Selatan",
          period: "2013 - 2016",
          meta: "Pendidikan kejuruan teknis",
          details: [
            "Fokus pada elektronika industri, sistem kendali, dan diagnosis teknis.",
          ],
        },
      ],
    },
    contact: {
      label: "Kontak",
      title: "Kontak Profesional",
      description:
        "Terbuka untuk peran IT Programmer dan system support yang membutuhkan kepemilikan sistem produksi, respons insiden yang andal, dan dukungan teknis lintas fungsi.",
      fields: {
        location: "Lokasi",
        email: "Email",
        phone: "Telepon / WhatsApp",
        availability: "Kesiapan",
      },
      note:
        "Siap untuk lingkungan enterprise, pemerintahan, dan institusi sektor pertahanan yang membutuhkan disiplin operasional dan tanggung jawab teknis.",
      ...sharedContact,
    },
  },
};
