import { Car, Testimonial } from '../types';

export const HIACE_VARIANTS: Car[] = [
  {
    id: 'hiace-commuter',
    name: 'Hiace Commuter',
    nameAr: 'تويوتا هايس كوميوتر',
    category: 'Transpor Rombongan',
    pricePerDay: 1000000,
    priceDisplay: 'Mulai Rp 1.000.000 / hari',
    image: '/hiace.avif',
    seats: 14,
    transmission: 'Manual/Matic',
    fuel: 'Diesel (Bertenaga & Irit)',
    includeList: [
      'Pilihan tepat untuk perjalanan keluarga & wisata',
      'Kapasitas 14 penumpang yang luas & nyaman',
      'AC Double Blower Dingin Merata',
      'Audio & USB Charging Port',
      'Pengemudi Ramah & Profesional'
    ],
    description: 'Pilihan tepat untuk perjalanan keluarga, wisata, maupun perjalanan rombongan dengan kapasitas penumpang yang nyaman.',
    rating: 5.0,
    reviewsCount: 156,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 1.000.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '14 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'Full AC Double Blower, Audio System, Reclining Seats' },
      { label: 'Kondisi Armada', value: 'Unit Bersih, Steril & Terawat Prima' }
    ]
  },
  {
    id: 'hiace-premio',
    name: 'Hiace Premio',
    nameAr: 'تويوتا هايس بريميو',
    category: 'Executive & Business',
    pricePerDay: 1200000,
    priceDisplay: 'Mulai Rp 1.200.000 / hari',
    image: '/hiace_premio.avif',
    seats: 12,
    transmission: 'Manual/Matic',
    fuel: 'Diesel Euro 4',
    includeList: [
      'Kenyamanan dan ruang yang lebih premium',
      'Cocok untuk perjalanan bisnis, wisata & keluarga',
      'Kabin Senyap & Suspensi Empuk',
      'Full AC Climate Control & Multimedia',
      'Driver Pengalaman & Tepat Waktu'
    ],
    description: 'Menghadirkan kenyamanan dan ruang yang lebih premium untuk perjalanan bisnis, wisata, maupun perjalanan keluarga.',
    rating: 4.9,
    reviewsCount: 142,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 1.200.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '12 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'Kabin Senyap, Captain Seats, Charger Port' },
      { label: 'Kondisi Armada', value: 'Bersih, Steril & Mewah' }
    ]
  },
  {
    id: 'hiace-commuter-luxury',
    name: 'Hiace Commuter Luxury',
    nameAr: 'هايس كوميوتر فاخرة',
    category: 'Luxury & VIP',
    pricePerDay: 1800000,
    priceDisplay: 'Mulai Rp 1.800.000 / hari',
    image: '/hiace.avif',
    seats: 9,
    transmission: 'Manual/Matic',
    fuel: 'Diesel',
    includeList: [
      'Konsep eksklusif untuk pengalaman perjalanan premium',
      'Kursi Pilot / Captain Seat Mewah',
      'Interior Design Custom Luxury',
      'TV / Screen Audio & System Hiburan',
      'Pelayanan VIP & Private Driver'
    ],
    description: 'Pilihan kendaraan dengan konsep lebih eksklusif untuk Anda yang mengutamakan kenyamanan dan pengalaman perjalanan yang lebih premium.',
    rating: 5.0,
    reviewsCount: 98,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 1.800.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '8-9 Kursi Pilot Luxury' },
      { label: 'Fasilitas Utama', value: 'Captain Seats, Ambient Lighting, Entertainment' },
      { label: 'Kondisi Armada', value: 'Kondisi Super Premium' }
    ]
  },
  {
    id: 'hiace-premio-luxury',
    name: 'Hiace Premio Luxury',
    nameAr: 'هايس بريميو فاخرة',
    category: 'Luxury & VIP Class',
    pricePerDay: 2000000,
    priceDisplay: 'Mulai Rp 2.000.000 / hari',
    image: '/hiace_premio.avif',
    seats: 9,
    transmission: 'Automatic/Manual',
    fuel: 'Diesel Euro 4',
    includeList: [
      'Kombinasi kapasitas, kenyamanan & nuansa premium',
      'Ideal untuk perjalanan VIP, perusahaan & rombongan khusus',
      'Interior Ultra Executive & Reclining Massage Seat',
      'Full Entertainment System & Connectivity',
      'Driver Berpengalaman Layanan VIP'
    ],
    description: 'Kombinasi antara kapasitas, kenyamanan, dan nuansa premium. Cocok untuk perjalanan VIP, perusahaan, maupun rombongan khusus.',
    rating: 5.0,
    reviewsCount: 110,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 2.000.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '8-9 Kursi Luxury VIP' },
      { label: 'Fasilitas Utama', value: 'Luxury Captain Seat, Smart TV, Wi-Fi ready' },
      { label: 'Kondisi Armada', value: 'Interior Mewah & Steril' }
    ]
  }
];

export const CARS: Car[] = [
  {
    id: 'hiace-series',
    name: 'Toyota Hiace Series',
    category: 'Hiace Series (4 Varian)',
    pricePerDay: 1000000,
    priceDisplay: 'Mulai Rp 1.000.000 / hari (4 Varian Available)',
    image: '/hiace_premio.avif',
    seats: 14,
    transmission: 'Manual/Matic',
    fuel: 'Diesel Euro 4',
    includeList: [
      'Hiace Commuter (Mulai Rp 1 Juta / hari)',
      'Hiace Premio (Mulai Rp 1.2 Juta / hari)',
      'Hiace Commuter Luxury (Mulai Rp 1.8 Juta / hari)',
      'Hiace Premio Luxury (Mulai Rp 2 Juta / hari)'
    ],
    description: 'Armada Toyota Hiace lengkap: Commuter (Mulai Rp 1 Juta), Premio (Mulai Rp 1.2 Juta), Commuter Luxury (Mulai Rp 1.8 Juta), dan Premio Luxury (Mulai Rp 2 Juta). Klik untuk memilih varian.',
    rating: 5.0,
    reviewsCount: 210,
    specifications: [
      { label: 'Tarif Mulai', value: 'Rp 1.000.000 / hari' },
      { label: 'Pilihan Varian', value: 'Commuter, Premio, Commuter Luxury, Premio Luxury' },
      { label: 'Kapasitas Penumpang', value: '9 s/d 14 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'Full AC Digital, Reclining Seats, Audio & USB Port' }
    ]
  },
  {
    id: 'elf-giga',
    name: 'Elf Giga',
    nameAr: 'إيسوزو إلف جيجا',
    category: 'Transpor Rombongan Besar',
    pricePerDay: 1600000,
    priceDisplay: 'Mulai Rp 1.600.000 / hari',
    image: '/elf_long.avif',
    seats: 19,
    transmission: 'Manual',
    fuel: 'Diesel High Power',
    includeList: [
      'Solusi transportasi untuk rombongan kapasitas besar',
      'Kenyamanan kabin tetap terjaga di perjalanan jauh',
      'AC Ducting Merata hingga baris belakang',
      'Bagasi Luas untuk barang rombongan',
      'Pengemudi Pengalaman Rute Antar Kota'
    ],
    description: 'Solusi transportasi untuk perjalanan rombongan dengan kapasitas besar dan kenyamanan yang tetap terjaga.',
    rating: 4.9,
    reviewsCount: 125,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '16-19 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'AC Louver per baris, Audio System, Bagasi Luas' },
      { label: 'Kategori Layanan', value: 'Gathering, Ziarah, Wisata Rombongan' },
      { label: 'Kondisi Armada', value: 'Tangguh & Terawat Berkala' }
    ]
  },
  {
    id: 'bus-medium',
    name: 'Bus Medium',
    nameAr: 'حافلة متوسطة',
    category: 'Bus Pariwisata & Event',
    pricePerDay: 2500000,
    priceDisplay: 'Mulai Rp 2.500.000 / hari',
    image: '/medium_bus.avif',
    seats: 33,
    transmission: 'Manual',
    fuel: 'Diesel Turbo Heavy Duty',
    includeList: [
      'Pilihan ideal untuk peserta jumlah lebih banyak',
      'Cocok untuk wisata, gathering, study tour & acara kantor',
      'Fasilitas Karaoke, TV, Multimedia & Full AC',
      'Bagasi Samping & Belakang Ekstra Luas',
      'Driver & Co-Driver Profesional'
    ],
    description: 'Pilihan ideal untuk kebutuhan perjalanan dengan jumlah peserta yang lebih banyak, seperti wisata, gathering, study tour, dan acara perusahaan.',
    rating: 5.0,
    reviewsCount: 88,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '30-35 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'Audio Karaoke, TV Monitor, Reclining Seats, Full AC' },
      { label: 'Kategori Layanan', value: 'Study Tour, Event & Outbound Perusahaan' },
      { label: 'Kondisi Armada', value: 'Prima, Bersih & Siap Jalan' }
    ]
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard',
    nameAr: 'تويوتا ألفارد',
    category: 'VIP Luxury Class',
    pricePerDay: 3200000,
    priceDisplay: 'Mulai Rp 3.200.000 / hari',
    image: '/innova3.avif',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Bensin Halus & Senyap',
    includeList: [
      'Pilihan kendaraan premium untuk kenyamanan eksklusif',
      'Cocok untuk perjalanan VIP, bisnis, maupun acara khusus',
      'First Class Executive Captain Seats',
      'Sunroof & Dual Climate Control',
      'Pelayanan Driver Profesional Berpakaian Rapi'
    ],
    description: 'Pilihan kendaraan premium bagi Anda yang membutuhkan kenyamanan dan eksklusivitas untuk perjalanan VIP, bisnis, maupun acara khusus.',
    rating: 5.0,
    reviewsCount: 74,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang VIP' },
      { label: 'Fasilitas Utama', value: 'Executive Leather Seats, Sunroof, JBL Sound System' },
      { label: 'Kategori Layanan', value: 'VIP Transfer, Tamu Negara & Wedding' },
      { label: 'Kondisi Armada', value: 'Super Luxury & Pristine Condition' }
    ]
  },
  {
    id: 'grand-tour',
    name: 'Grand Tour',
    nameAr: 'غراند تور',
    category: 'Family & Group Travel',
    pricePerDay: 750000,
    priceDisplay: 'Mulai Rp 750.000 / hari',
    image: '/avanza.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin (Efisien & Halus)',
    includeList: [
      'Pilihan transportasi untuk perjalanan bersama',
      'Mengutamakan kenyamanan dan kebutuhan rombongan',
      'AC Digital Double Blower Sejuk',
      'Kabin Bersih & Harum Terawat',
      'Pengemudi Pengalaman & Tepat Waktu'
    ],
    description: 'Pilihan transportasi untuk perjalanan bersama dengan mengutamakan kenyamanan dan kebutuhan rombongan.',
    rating: 4.9,
    reviewsCount: 130,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'AC Double Blower, Audio Bluetooth, USB Charger Port' },
      { label: 'Kategori Layanan', value: 'Perjalanan Keluarga & Harian' },
      { label: 'Kondisi Armada', value: 'Unit Bersih, Steril & Rutin Servis' }
    ]
  }
];

export const ALL_FLEET_UNITS: Car[] = [
  ...HIACE_VARIANTS,
  ...CARS.filter(c => c.id !== 'hiace-series')
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
