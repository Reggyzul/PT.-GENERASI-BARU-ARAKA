import { Car, Testimonial } from '../types';

export const COMMON_HIACE_TERMS = [
  'Seluruh Biaya Sewa sudah termasuk mobil, supir, bbm',
  'Biaya Sewa belum termasuk Tol, Parkir, Penyebrangan Ferry, Makan Driver, Penginapan Driver dan Tip Driver',
  'Jangka Waktu Sewa dari Pukul 05:00 s/d 23:00',
  'Untuk Penjemputan sebelum Pukul 05:00 dan finish diatas pukul 23:00 akan dikenakan overtime Rp 150.000/jam',
  'Untuk informasi lebih lanjut maupun pemesanan silahkan hubungi kami'
];

export const HIACE_VARIANTS: Car[] = [
  {
    id: 'hiace-commuter',
    name: 'Hiace Commuter',
    nameAr: 'تويوتا هايس كوميوتر',
    category: 'Transpor Rombongan',
    pricePerDay: 1000000,
    priceDisplay: 'Mulai Rp 1.000.000 / hari',
    image: '/hiace.avif',
    interiorImage: '/hiace_commuter_interior.jpg',
    seats: 14,
    transmission: 'Manual/Matic',
    fuel: 'Diesel (Bertenaga & Irit)',
    includeList: [
      'Full AC',
      'Reclining Seats',
      'Hand Sanitizer',
      'Tissue',
      'Alat Kebersihan Disinfektan'
    ],
    terms: COMMON_HIACE_TERMS,
    description: 'Pilihan tepat untuk perjalanan keluarga, wisata, maupun perjalanan rombongan dengan kapasitas 14 penumpang yang nyaman dan steril.',
    rating: 5.0,
    reviewsCount: 156,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 1.000.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '14 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'Full AC, Reclining Seats, Sanitizer, Disinfektan' },
      { label: 'Kondisi Kabin', value: 'Super Bersih, Steril & Terawat Prima' }
    ]
  },
  {
    id: 'hiace-premio',
    name: 'Hiace Premio',
    nameAr: 'تويوتا هايس بريميو',
    category: 'Executive & Business',
    pricePerDay: 1200000,
    priceDisplay: 'Mulai Rp 1.200.000 / hari',
    image: '/hiace_premio_exterior.jpg',
    interiorImage: '/hiace_premio_interior.jpg',
    seats: 12,
    transmission: 'Manual/Matic',
    fuel: 'Diesel Euro 4',
    includeList: [
      'Full AC',
      'Reclining Seats',
      'Hand Sanitizer',
      'Tissue',
      'Alat Kebersihan Disinfektan'
    ],
    terms: COMMON_HIACE_TERMS,
    description: 'Menghadirkan kenyamanan dan ruang yang lebih premium dengan kabin senyap, kursi kulit berkualitas, serta fasilitas kebersihan lengkap.',
    rating: 4.9,
    reviewsCount: 142,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 1.200.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '12 Kursi Penumpang Executive' },
      { label: 'Fasilitas Utama', value: 'Full AC, Reclining Seats, Sanitizer, Disinfektan' },
      { label: 'Kondisi Kabin', value: 'Kabin Senyap & Kursi Kulit Premium' }
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
    interiorImage: '/hiace_commuter_luxury_interior.jpg',
    seats: 9,
    transmission: 'Manual/Matic',
    fuel: 'Diesel',
    includeList: [
      'Full AC',
      'Reclining Captain Seats',
      'Hand Sanitizer',
      'Tissue',
      'Alat Kebersihan Disinfektan'
    ],
    terms: COMMON_HIACE_TERMS,
    description: 'Konsep eksklusif dengan Kursi Pilot Captain Seat mewah bermaterial soft cream leather, Smart TV, ceiling LED lighting, dan kebersihan terjamin.',
    rating: 5.0,
    reviewsCount: 98,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 1.800.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '8-9 Kursi Pilot Luxury' },
      { label: 'Fasilitas Utama', value: 'Full AC, Reclining Captain Seats, Sanitizer, Disinfektan' },
      { label: 'Kondisi Armada', value: 'Interior Pilot Seat Cream Luxury' }
    ]
  },
  {
    id: 'hiace-premio-luxury',
    name: 'Hiace Premio Luxury',
    nameAr: 'هايس بريميو فاخرة',
    category: 'Luxury & VIP Class',
    pricePerDay: 2000000,
    priceDisplay: 'Mulai Rp 2.000.000 / hari',
    image: '/hiace_premio_luxury_exterior.jpg',
    interiorImage: '/hiace_premio_luxury_seats.jpg',
    seats: 9,
    transmission: 'Automatic/Manual',
    fuel: 'Diesel Euro 4',
    includeList: [
      'Full AC',
      'Electric Reclining Massage Seats',
      'Hand Sanitizer',
      'Tissue',
      'Alat Kebersihan Disinfektan'
    ],
    terms: COMMON_HIACE_TERMS,
    description: 'Pilihan kasta tertinggi Hiace Premio dengan Electric Captain Massage Seats, Smart TV, ambient ceiling lights, serta standar kebersihan & sterilitas VIP.',
    rating: 5.0,
    reviewsCount: 110,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 2.000.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '8-9 Kursi Luxury VIP' },
      { label: 'Fasilitas Utama', value: 'Full AC, Electric Reclining Seats, Sanitizer, Disinfektan' },
      { label: 'Kondisi Armada', value: 'Ultra Executive VIP Class B 7801 KMS' }
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
    image: '/hiace_premio_studio.png',
    interiorImage: '/hiace_premio_luxury_seats.jpg',
    seats: 14,
    transmission: 'Manual/Matic',
    fuel: 'Diesel Euro 4',
    includeList: [
      'Full AC & Reclining Seats',
      'Hand Sanitizer & Tissue',
      'Alat Kebersihan Disinfektan',
      'Include Mobil, Supir & BBM'
    ],
    terms: COMMON_HIACE_TERMS,
    description: 'Armada Toyota Hiace lengkap: Commuter (Mulai Rp 1 Juta), Premio (Mulai Rp 1.2 Juta), Commuter Luxury (Mulai Rp 1.8 Juta), dan Premio Luxury (Mulai Rp 2 Juta). Klik untuk memilih varian & lihat foto interior.',
    rating: 5.0,
    reviewsCount: 210,
    specifications: [
      { label: 'Tarif Mulai', value: 'Rp 1.000.000 / hari' },
      { label: 'Pilihan Varian', value: 'Commuter, Premio, Commuter Luxury, Premio Luxury' },
      { label: 'Kapasitas Penumpang', value: '9 s/d 14 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'Full AC, Reclining Seats, Sanitizer, Disinfektan' }
    ]
  },
  {
    id: 'elf-giga',
    name: 'Elf Giga',
    nameAr: 'إيسوزو إلف جيجا',
    category: 'Transpor Rombongan Besar',
    pricePerDay: 1200000,
    priceDisplay: 'Mulai Rp 1.200.000 / hari',
    image: '/elf_giga_studio.png',
    interiorImage: '/elf_long.avif',
    seats: 19,
    transmission: 'Manual',
    fuel: 'Diesel High Power',
    includeList: [
      'Full AC',
      'Reclining Seats',
      'Hand Sanitizer',
      'Tissue',
      'Alat Kebersihan Disinfektan'
    ],
    terms: COMMON_HIACE_TERMS,
    description: 'Solusi transportasi untuk perjalanan rombongan dengan kapasitas 19 penumpang yang nyaman, lega, dan steril.',
    rating: 4.9,
    reviewsCount: 125,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 1.200.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '16-19 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'Full AC, Reclining Seats, Sanitizer, Disinfektan' },
      { label: 'Kondisi Armada', value: 'Tangguh, Bersih & Terawat Berkala' }
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
      'Full AC & Audio Karaoke',
      'TV Monitor & Reclining Seats',
      'Hand Sanitizer & Tissue',
      'Bagasi Samping & Belakang Ekstra Luas'
    ],
    terms: COMMON_HIACE_TERMS,
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
      'First Class Executive Captain Seats',
      'Sunroof & Dual Climate Control AC',
      'Hand Sanitizer & Tissue',
      'Pelayanan Driver VIP'
    ],
    terms: COMMON_HIACE_TERMS,
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
      'Full AC Double Blower',
      'Reclining Seats',
      'Hand Sanitizer & Tissue',
      'Audio Bluetooth & USB Charger'
    ],
    terms: COMMON_HIACE_TERMS,
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
