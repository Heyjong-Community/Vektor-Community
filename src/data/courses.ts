export interface CourseItem {
  id: string;
  imageUrl?: string;
  category: string;
  tutor: string;
  tutorRole: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  videoCount: number;
  duration: string;
  level: 'Pemula' | 'Menengah' | 'Mahir';
  highlights: string[];
  syllabus: { title: string; duration: string }[];
}

export const TOPIC_CATEGORIES = ['Semua', 'HTML', 'CSS', 'Javascript', 'TailwindCSS'];

export const dummyCourses: CourseItem[] = [
  {
    id: 'course-1',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    category: 'Soft Skill',
    tutor: 'Taqi Mundzir B',
    tutorRole: 'Communication & Public Speaking Mentor',
    title: 'Dasar Public Speaking 101: Bicara Runtut & Percaya Diri',
    description:
      'Kuasai teknik mengatasi demam panggung, menyusun opening memukau, dan artikulasi vokal yang jelas untuk presentasi profesional maupun berbicara di depan umum.',
    rating: 4.9,
    reviewCount: 32,
    videoCount: 8,
    duration: '2j 45m',
    level: 'Pemula',
    highlights: [
      'Mengatasi rasa gugup dan demam panggung dalam 3 menit pertama',
      'Struktur menyusun materi agar runtut dan mudah dipahami audiens',
      'Teknik pernapasan, intonasi, dan bahasa tubuh yang meyakinkan',
    ],
    syllabus: [
      { title: '1. Mindset & Mengatasi Demam Panggung', duration: '18m' },
      { title: '2. Merancang Opening Hook yang Memukau', duration: '24m' },
      { title: '3. Teknik Artikulasi & Intonasi Vokal', duration: '30m' },
      { title: '4. Studi Kasus: Presentasi & Q&A Session', duration: '25m' },
    ],
  },
  {
    id: 'course-2',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    category: 'Programming',
    tutor: 'Nadia Putri Rahma',
    tutorRole: 'Senior Frontend Engineer',
    title: 'React & TypeScript Modern: Membangun Web App Skalabel',
    description:
      'Pelajari pola arsitektur komponen React modern, manajemen state yang bersih, serta type-safety menggunakan TypeScript dari nol hingga siap produksi.',
    rating: 5.0,
    reviewCount: 84,
    videoCount: 16,
    duration: '5j 20m',
    level: 'Menengah',
    highlights: [
      'Menulis komponen React yang reusable dengan TypeScript strict mode',
      'Mengelola server state dan caching dengan efisien',
      'Optimasi performa rendering dan struktur folder skala industri',
    ],
    syllabus: [
      { title: '1. Setup Project & TypeScript Fundamentals', duration: '22m' },
      { title: '2. Custom Hooks & Composition Pattern', duration: '35m' },
      { title: '3. Data Fetching & Error Boundary', duration: '40m' },
      { title: '4. Deployment & Performance Audit', duration: '28m' },
    ],
  },
  {
    id: 'course-3',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    category: 'UI/UX Design',
    tutor: 'Rizky Pratama',
    tutorRole: 'Lead Product Designer',
    title: 'UI Design System dengan Figma: Dari Wireframe ke Prototype',
    description:
      'Rancang antarmuka aplikasi digital yang konsisten menggunakan Auto Layout, Design Tokens, dan interactive prototyping di Figma.',
    rating: 4.8,
    reviewCount: 51,
    videoCount: 12,
    duration: '4j 10m',
    level: 'Pemula',
    highlights: [
      'Membuat komponen dinamis dengan Auto Layout dan Variants',
      'Menyusun skala tipografi, warna, dan spacing yang konsisten',
      'Hand-off desain ke developer dengan dokumentasi rapi',
    ],
    syllabus: [
      { title: '1. Prinsip Dasar Visual Hierarchy & Grid', duration: '20m' },
      { title: '2. Menguasai Auto Layout & Component Variants', duration: '32m' },
      { title: '3. Membangun Color & Typography Tokens', duration: '26m' },
      { title: '4. Interactive Prototyping & Usability Testing', duration: '30m' },
    ],
  },
  {
    id: 'course-4',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'Data & Bisnis',
    tutor: 'Dimas Nugroho',
    tutorRole: 'Data Analyst Lead',
    title: 'Analisis Data Bisnis Praktis dengan SQL & Dashboard Visual',
    description:
      'Ubah data mentah perusahaan menjadi insight strategis menggunakan query SQL dan visualisasi dashboard interaktif untuk pengambilan keputusan.',
    rating: 4.7,
    reviewCount: 29,
    videoCount: 10,
    duration: '3j 30m',
    level: 'Pemula',
    highlights: [
      'Menulis query SQL untuk agregasi, join, dan segmentasi pelanggan',
      'Menentukan KPI utama yang relevan untuk pertumbuhan bisnis',
      'Menyajikan temuan data dalam bentuk storytelling visual',
    ],
    syllabus: [
      { title: '1. Dasar Database Relasional & Query SELECT', duration: '21m' },
      { title: '2. Teknik JOIN, GROUP BY, dan Cohort Analysis', duration: '34m' },
      { title: '3. Data Cleaning & Menangani Missing Values', duration: '25m' },
      { title: '4. Membangun Executive Dashboard', duration: '30m' },
    ],
  },
  {
    id: 'course-5',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    category: 'Digital Marketing',
    tutor: 'Salsabila Aulia',
    tutorRole: 'Growth Marketing Strategist',
    title: 'Content Strategy & Copywriting untuk Konversi Tinggi',
    description:
      'Pelajari formula menulis copy yang persuasif dan strategi distribusi konten organik untuk meningkatkan engagement serta penjualan produk.',
    rating: 5.0,
    reviewCount: 67,
    videoCount: 9,
    duration: '2j 55m',
    level: 'Pemula',
    highlights: [
      'Menggunakan framework AIDA dan PAS untuk menulis headline tajam',
      'Riset pain-point audiens sebelum membuat kalender konten',
      'Optimasi Call-to-Action (CTA) pada landing page dan media sosial',
    ],
    syllabus: [
      { title: '1. Psikologi Konsumen & Riset Persona', duration: '19m' },
      { title: '2. Formula Copywriting: AIDA, PAS, dan BAB', duration: '27m' },
      { title: '3. Merancang Content Pillar 30 Hari', duration: '23m' },
      { title: '4. Evaluasi Metrik & A/B Testing Copy', duration: '22m' },
    ],
  },
  {
    id: 'course-6',
    // Sengaja dikosongkan untuk menguji tampilan fallback banner kuning jika tidak ada gambar
    category: 'Programming',
    tutor: 'Fajar Hidayatullah',
    tutorRole: 'Backend Architect',
    title: 'REST API & Autentikasi Aman dengan Node.js dan PostgreSQL',
    description:
      'Bangun layanan backend yang cepat, terstruktur, dan aman lengkap dengan sistem autentikasi JWT, validasi input, serta manajemen database relasional.',
    rating: 4.8,
    reviewCount: 44,
    videoCount: 14,
    duration: '4j 50m',
    level: 'Menengah',
    highlights: [
      'Merancang endpoint RESTful API sesuai standar industri',
      'Implementasi autentikasi JWT, refresh token, dan role-based access',
      'Integrasi PostgreSQL menggunakan ORM modern dan migrasi database',
    ],
    syllabus: [
      { title: '1. Arsitektur Backend & Routing Express/Fastify', duration: '24m' },
      { title: '2. Desain Skema PostgreSQL & Relasi Tabel', duration: '31m' },
      { title: '3. Sistem Login, Hashing Password & JWT', duration: '38m' },
      { title: '4. Error Handling, Rate Limiting & API Docs', duration: '27m' },
    ],
  },
];
