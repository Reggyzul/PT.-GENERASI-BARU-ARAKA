import { Car, Testimonial } from '../types';

export const CARS: Car[] = [
  {
    id: 'hiace-commuter',
    name: 'Hiace Commuter',
    nameAr: 'تويوتا هايس كوميوتر',
    category: 'Transpor Rombongan',
    pricePerDay: 1200000,
    priceDisplay: 'Solusi Nyaman Rombongan & Keluarga',
    image: '/hiace.avif',
    seats: 14,
    transmission: 'Manual/Matic',
    fuel: 'Diesel (Bertenaga & Irits)',
    fuelAr: 'ديزل',
    includeList: [
      'Pilihan tepat untuk perjalanan keluarga & wisata',
      'Kapasitas penumpang yang luas & nyaman',
      'AC Double Blower Dingin Merata',
      'Audio & USB Charging Port',
      'Pengemudi Ramah & Profesional'
    ],
    includeListAr: ['مكيف', 'سائق'],
    description: 'Pilihan tepat untuk perjalanan keluarga, wisata, maupun perjalanan rombongan dengan kapasitas penumpang yang nyaman.',
    descriptionAr: 'سيارة مريحة للغاية للرحلات العائلية والجماعية.',
    rating: 5.0,
    reviewsCount: 156,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '14 Kursi Penumpang', labelAr: 'السعة', valueAr: '١٤ ركاب' },
      { label: 'Fasilitas Utama', value: 'Full AC, Audio System, Reclining Seats', labelAr: 'الميزات', valueAr: 'مكيف، audio' },
      { label: 'Kategori Layanan', value: 'Wisata, Keluarga & Gathering', labelAr: 'الخدمة', valueAr: 'رحلات' },
      { label: 'Kondisi Armada', value: 'Unit Bersih, Steril & Terawat Prima', labelAr: 'الحالة', valueAr: 'ممتازة' }
    ]
  },
  {
    id: 'hiace-premio',
    name: 'Hiace Premio',
    nameAr: 'تويوتا هايس بريميو',
    category: 'Executive & Business',
    pricePerDay: 1500000,
    priceDisplay: 'Kenyamanan Premium & Ruang Luas',
    image: '/hiace_premio.avif',
    seats: 12,
    transmission: 'Manual/Matic',
    fuel: 'Diesel Euro 4',
    fuelAr: 'ديزل',
    includeList: [
      'Kenyamanan dan ruang yang lebih premium',
      'Cocok untuk perjalanan bisnis, wisata & keluarga',
      'Kabin Senyap & Suspensi Empuk',
      'Full AC Climate Control & Multimedia',
      'Driver Pengalaman & Tepat Waktu'
    ],
    includeListAr: ['مكيف', 'سائق'],
    description: 'Menghadirkan kenyamanan dan ruang yang lebih premium untuk perjalanan bisnis, wisata, maupun perjalanan keluarga.',
    descriptionAr: 'توفير الراحة والمساحة الأكثر تميزاً لرحلات العمل والسياحة.',
    rating: 4.9,
    reviewsCount: 142,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '12 Kursi Penumpang', labelAr: 'السعة', valueAr: '١٢ ركاب' },
      { label: 'Fasilitas Utama', value: 'Kabin Senyap, Captain Seats, Charger Port', labelAr: 'الميزات', valueAr: 'فاخرة' },
      { label: 'Kategori Layanan', value: 'Bisnis, Dinas & Perusahaan', labelAr: 'الخدمة', valueAr: 'أعمال' },
      { label: 'Kondisi Armada', value: 'Bersih, Steril & Mewah', labelAr: 'الحالة', valueAr: 'ممتازة' }
    ]
  },
  {
    id: 'hiace-commuter-luxury',
    name: 'Hiace Commuter Luxury',
    nameAr: 'هايس كوميوتر فاخرة',
    category: 'Luxury & VIP',
    pricePerDay: 1800000,
    priceDisplay: 'Konsep Eksklusif & Premium Experience',
    image: '/hiace.avif',
    seats: 9,
    transmission: 'Manual/Matic',
    fuel: 'Diesel',
    fuelAr: 'ديزل',
    includeList: [
      'Konsep eksklusif untuk pengalaman perjalanan premium',
      'Kursi Pilot / Captain Seat Mewah',
      'Interior Design Custom Luxury',
      'TV / Screen Audio & System Hiburan',
      'Pelayanan VIP & Private Driver'
    ],
    includeListAr: ['مكيف', 'سائق'],
    description: 'Pilihan kendaraan dengan konsep lebih eksklusif untuk Anda yang mengutamakan kenyamanan dan pengalaman perjalanan yang lebih premium.',
    descriptionAr: 'خيار فاخر مع مفهوم أكثر حصرية للرحلات المتميزة.',
    rating: 5.0,
    reviewsCount: 98,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '8-9 Kursi Pilot Luxury', labelAr: 'السعة', valueAr: '٩ ركاب' },
      { label: 'Fasilitas Utama', value: 'Captain Seats, Ambient Lighting, Entertainment', labelAr: 'الميزات', valueAr: 'VIP' },
      { label: 'Kategori Layanan', value: 'Perjalanan VIP & Tamu Khusus', labelAr: 'الخدمة', valueAr: 'VIP' },
      { label: 'Kondisi Armada', value: 'Kondisi Super Premium', labelAr: 'الحالة', valueAr: 'ممتازة' }
    ]
  },
  {
    id: 'hiace-premio-luxury',
    name: 'Hiace Premio Luxury',
    nameAr: 'هايس بريميو فاخرة',
    category: 'Luxury & VIP Class',
    pricePerDay: 2200000,
    priceDisplay: 'Kombinasi Kapasitas, Kenyamanan & Nuansa Premium',
    image: '/hiace_premio.avif',
    seats: 9,
    transmission: 'Automatic/Manual',
    fuel: 'Diesel Euro 4',
    fuelAr: 'ديزل',
    includeList: [
      'Kombinasi kapasitas, kenyamanan & nuansa premium',
      'Ideal untuk perjalanan VIP, perusahaan & rombongan khusus',
      'Interior Ultra Executive & Reclining Massage Seat',
      'Full Entertainment System & Connectivity',
      'Driver Berpengalaman Layanan VIP'
    ],
    includeListAr: ['مكيف', 'سائق VIP'],
    description: 'Kombinasi antara kapasitas, kenyamanan, dan nuansa premium. Cocok untuk perjalanan VIP, perusahaan, maupun rombongan khusus.',
    descriptionAr: 'تركييبة بين السعة والراحة واللمسة الفاخرة للرحلات VIP.',
    rating: 5.0,
    reviewsCount: 110,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '8-9 Kursi Luxury VIP', labelAr: 'السعة', valueAr: '٩ ركاب' },
      { label: 'Fasilitas Utama', value: 'Luxury Captain Seat, Smart TV, Wi-Fi ready', labelAr: 'الميزات', valueAr: 'Ultra VIP' },
      { label: 'Kategori Layanan', value: 'Kunjungan Kerja VIP & Event Perusahaan', labelAr: 'الخدمة', valueAr: 'شركة' },
      { label: 'Kondisi Armada', value: 'Interior Mewah & Steril', labelAr: 'الحالة', valueAr: 'ممتازة' }
    ]
  },
  {
    id: 'elf-giga',
    name: 'Elf Giga',
    nameAr: 'إيسوزو إلف جيجا',
    category: 'Transpor Rombongan Besar',
    pricePerDay: 1600000,
    priceDisplay: 'Solusi Kapasitas Besar & Tetap Nyaman',
    image: '/elf_long.avif',
    seats: 19,
    transmission: 'Manual',
    fuel: 'Diesel High Power',
    fuelAr: 'ديزل',
    includeList: [
      'Solusi transportasi untuk rombongan kapasitas besar',
      'Kenyamanan kabin tetap terjaga di perjalanan jauh',
      'AC Ducting Merata hingga baris belakang',
      'Bagasi Luas untuk barang rombongan',
      'Pengemudi Pengalaman Rute Antar Kota'
    ],
    includeListAr: ['مكيف', 'سائق'],
    description: 'Solusi transportasi untuk perjalanan rombongan dengan kapasitas besar dan kenyamanan yang tetap terjaga.',
    descriptionAr: 'حل نقل مثالي للمجموعات الكبيرة مع الحفاظ على الراحة.',
    rating: 4.9,
    reviewsCount: 125,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '16-19 Kursi Penumpang', labelAr: 'السعة', valueAr: '١٩ ركاب' },
      { label: 'Fasilitas Utama', value: 'AC Louver per baris, Audio System, Bagasi Luas', labelAr: 'الميزات', valueAr: 'مكيف' },
      { label: 'Kategori Layanan', value: 'Gathering, Ziarah, Wisata Rombongan', labelAr: 'الخدمة', valueAr: 'مجموعة' },
      { label: 'Kondisi Armada', value: 'Tangguh & Terawat Berkala', labelAr: 'الحالة', valueAr: 'ممتازة' }
    ]
  },
  {
    id: 'bus-medium',
    name: 'Bus Medium',
    nameAr: 'حافلة متوسطة',
    category: 'Bus Pariwisata & Event',
    pricePerDay: 2500000,
    priceDisplay: 'Ideal untuk Gathering & Tour Peserta Banyak',
    image: '/medium_bus.avif',
    seats: 33,
    transmission: 'Manual',
    fuel: 'Diesel Turbo Heavy Duty',
    fuelAr: 'ديزل',
    includeList: [
      'Pilihan ideal untuk peserta jumlah lebih banyak',
      'Cocok untuk wisata, gathering, study tour & acara kantor',
      'Fasilitas Karaoke, TV, Multimedia & Full AC',
      'Bagasi Samping & Belakang Ekstra Luas',
      'Driver & Co-Driver Profesional'
    ],
    includeListAr: ['مكيف', 'موسيقى', 'سائق'],
    description: 'Pilihan ideal untuk kebutuhan perjalanan dengan jumlah peserta yang lebih banyak, seperti wisata, gathering, study tour, dan acara perusahaan.',
    descriptionAr: 'خيار مثالي لرحلات المجموعات الكبيرة والسياحة والفعاليات.',
    rating: 5.0,
    reviewsCount: 88,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '30-35 Kursi Penumpang', labelAr: 'السعة', valueAr: '٣٥ ركاب' },
      { label: 'Fasilitas Utama', value: 'Audio Karaoke, TV Monitor, Reclining Seats, Full AC', labelAr: 'الميزات', valueAr: 'حافلة' },
      { label: 'Kategori Layanan', value: 'Study Tour, Event & Outbound Perusahaan', labelAr: 'الخدمة', valueAr: 'فعاليات' },
      { label: 'Kondisi Armada', value: 'Prima, Bersih & Siap Jalan', labelAr: 'الحالة', valueAr: 'ممتازة' }
    ]
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard',
    nameAr: 'تويوتا ألفارد',
    category: 'VIP Luxury Class',
    pricePerDay: 3200000,
    priceDisplay: 'Kemewahan & Eksklusivitas Perjalanan VIP',
    image: '/innova3.avif',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Bensin Halus & Senyap',
    fuelAr: 'بنزين',
    includeList: [
      'Pilihan kendaraan premium untuk kenyamanan eksklusif',
      'Cocok untuk perjalanan VIP, bisnis, maupun acara khusus',
      'First Class Executive Captain Seats',
      'Sunroof & Dual Climate Control',
      'Pelayanan Driver Profesional Berpakaian Rapi'
    ],
    includeListAr: ['مكيف', 'سائق VIP'],
    description: 'Pilihan kendaraan premium bagi Anda yang membutuhkan kenyamanan dan eksklusivitas untuk perjalanan VIP, bisnis, maupun acara khusus.',
    descriptionAr: 'سيارة فاخرة متميزة للرحلات VIP والأعمال والفعاليات الخاصة.',
    rating: 5.0,
    reviewsCount: 74,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang VIP', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas Utama', value: 'Executive Leather Seats, Sunroof, JBL Sound System', labelAr: 'الميزات', valueAr: 'VIP' },
      { label: 'Kategori Layanan', value: 'VIP Transfer, Tamu Negara & Wedding', labelAr: 'الخدمة', valueAr: 'VIP' },
      { label: 'Kondisi Armada', value: 'Super Luxury & Pristine Condition', labelAr: 'الحالة', valueAr: 'ممتازة' }
    ]
  },
  {
    id: 'grand-tour',
    name: 'Grand Tour',
    nameAr: 'غراند تور',
    category: 'Family & Group Travel',
    pricePerDay: 750000,
    priceDisplay: 'Praktis & Nyaman Bersama Keluarga',
    image: '/avanza.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin (Efisien & Halus)',
    fuelAr: 'بنزين',
    includeList: [
      'Pilihan transportasi untuk perjalanan bersama',
      'Mengutamakan kenyamanan dan kebutuhan rombongan',
      'AC Digital Double Blower Sejuk',
      'Kabin Bersih & Harum Terawat',
      'Pengemudi Pengalaman & Tepat Waktu'
    ],
    includeListAr: ['مكيف', 'سائق'],
    description: 'Pilihan transportasi untuk perjalanan bersama dengan mengutamakan kenyamanan dan kebutuhan rombongan.',
    descriptionAr: 'خيار نقل عملي ومريح للرحلات العائلية والجماعية.',
    rating: 4.9,
    reviewsCount: 130,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang', labelAr: 'السعة', valueAr: '٧ ركاب' },
      { label: 'Fasilitas Utama', value: 'AC Double Blower, Audio Bluetooth, USB Charger Port', labelAr: 'الميزات', valueAr: 'مكيف' },
      { label: 'Kategori Layanan', value: 'Perjalanan Keluarga & Harian', labelAr: 'الخدمة', valueAr: 'عائلية' },
      { label: 'Kondisi Armada', value: 'Unit Bersih, Steril & Rutin Servis', labelAr: 'الحالة', valueAr: 'ممتازة' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Bpk. Hendra Gunawan',
    role: 'Manager Perusahaan / Perjalanan Dinas',
    text: 'Sangat puas dengan layanan PT. Generasi Baru Araka. Kami menyewa Hiace Premio Luxury untuk kunjungan kerja direksi. Mobilnya sangat bersih, harum, pengemudinya sangat profesional dan tepat waktu.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    carModel: 'Hiace Premio Luxury',
    date: '2026-08-05'
  },
  {
    id: '2',
    name: 'Ibu Ratna Dewi',
    role: 'Panitia Gathering Perusahaan',
    text: 'Acara family gathering perusahaan kami berjalan sukses berkat dukungan bus medium dan Elf Giga dari Araka Trans. Armada nyaman, AC dingin, driver ramah dan menguasai rute dengan sangat baik.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    carModel: 'Bus Medium & Elf Giga',
    date: '2026-08-01'
  },
  {
    id: '3',
    name: 'Bpk. Dedi Kurniawan',
    role: 'Pengguna Jasa Perjalanan VIP',
    text: 'Menyewa Toyota Alphard untuk acara pernikahan & tamu VIP. Pelayanan Araka Trans sangat berkelas! Kendaraan dalam kondisi super mulus, bersih, dan driver berpenampilan sangat rapi.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    carModel: 'Toyota Alphard',
    date: '2026-07-28'
  }
];
