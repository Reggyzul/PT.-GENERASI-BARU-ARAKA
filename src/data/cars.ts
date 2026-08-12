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
    image: '/hiace_commuter_real_exterior.jpg',
    interiorImage: '/hiace_commuter_real_interior.jpg',
    interiorSecondaryImage: '/hiace_commuter_interior.jpg',
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
    image: '/hiace_commuter_real_exterior.jpg',
    interiorImage: '/hiace_commuter_luxury_interior.jpg',
    interiorSecondaryImage: '/hiace_luxury_tv_interior.jpg',
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
    image: '/elf_giga_side_raw.png',
    interiorImage: '/elf_giga_real_interior_front.jpg',
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
    pricePerDay: 2000000,
    priceDisplay: 'Mulai Rp 2.000.000 / hari',
    image: '/bus_medium_real_exterior.jpg',
    interiorImage: '/bus_medium_real_interior_seats.jpg',
    seats: 33,
    transmission: 'Manual',
    fuel: 'Diesel Turbo Heavy Duty',
    includeList: [
      'Full AC',
      'Reclining Seats',
      'Hand Sanitizer',
      'Tissue',
      'Alat Kebersihan Disinfektan'
    ],
    terms: COMMON_HIACE_TERMS,
    description: 'Pilihan ideal untuk rombongan wisata, gathering, study tour & event kantor dengan armada Jetbus 3 Araka Trans 33 kursi reclining seats.',
    rating: 5.0,
    reviewsCount: 88,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 2.000.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '33 Kursi Penumpang Reclining' },
      { label: 'Fasilitas Utama', value: 'Full AC, Reclining Seats, Sanitizer, Disinfektan' },
      { label: 'Kondisi Armada', value: 'Unit Jetbus 3 Pariwisata B 7143 WGA' }
    ]
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard',
    nameAr: 'تويوتا ألفارد',
    category: 'VIP Luxury Class',
    pricePerDay: 2400000,
    priceDisplay: 'Mulai Rp 2.400.000 / hari',
    image: '/alphard_studio.jpg',
    interiorImage: '/alphard_real_interior_seats.jpg',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Bensin Halus & Senyap',
    includeList: [
      'Full AC',
      'Reclining Seats',
      'Hand Sanitizer',
      'Tissue',
      'Alat Kebersihan Disinfektan'
    ],
    terms: COMMON_HIACE_TERMS,
    description: 'Pilihan kendaraan premium VIP dengan First-Class Executive Captain Seats, kabin senyap, dan pelayanan supir profesional.',
    rating: 5.0,
    reviewsCount: 74,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 2.400.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang VIP' },
      { label: 'Fasilitas Utama', value: 'Full AC, Reclining Seats, Sanitizer, Disinfektan' },
      { label: 'Kondisi Armada', value: 'Unit Black Metallic VIP Class B 09-23' }
    ]
  },
  {
    id: 'toyota-avanza',
    name: 'Toyota Avanza',
    nameAr: 'تويوتا أفانزا',
    category: 'MPV Family Class',
    pricePerDay: 800000,
    priceDisplay: 'Mulai Rp 800.000 / hari',
    image: '/avanza_real_exterior.jpg',
    interiorImage: '/avanza_real_interior_cockpit.jpg',
    interiorSecondaryImage: '/avanza_real_interior_middle.jpg',
    seats: 7,
    transmission: 'Manual/Automatic',
    fuel: 'Bensin Irit',
    includeList: [
      'Full AC Double Blower',
      'Audio & USB Music',
      'Hand Sanitizer & Tissue',
      'Include Mobil, Supir & BBM'
    ],
    terms: COMMON_HIACE_TERMS,
    description: 'Pilihan praktis, irit, dan ekonomis untuk perjalanan keluarga, dinas harian, maupun city tour Jabodetabek & sekitarnya.',
    rating: 4.9,
    reviewsCount: 140,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 800.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '6-7 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'Full AC Double Blower, Charger USB, Sanitizer' },
      { label: 'Kondisi Armada', value: 'Unit Bersih, Irit & Terawat Berkala' }
    ]
  },
  {
    id: 'innova-reborn',
    name: 'Toyota Innova Reborn',
    nameAr: 'تويوتا إنوفا ريبورن',
    category: 'Executive MPV Class',
    pricePerDay: 1000000,
    priceDisplay: 'Mulai Rp 1.000.000 / hari',
    image: '/innova_reborn_real_exterior.jpg',
    interiorImage: '/innova_reborn_real_interior_front.jpg',
    interiorSecondaryImage: '/innova_reborn_real_interior_rear.jpg',
    seats: 7,
    transmission: 'Manual/Automatic',
    fuel: 'Diesel / Bensin Euro 4',
    includeList: [
      'Full AC Triple Blower',
      'Comfort Reclining Seats',
      'Hand Sanitizer & Tissue',
      'Include Mobil, Supir & BBM'
    ],
    terms: COMMON_HIACE_TERMS,
    description: 'Mobil MPV eksekutif favorit untuk kunjungan kerja dinas, tamu perusahaan, maupun liburan keluarga dengan suspensi super nyaman.',
    rating: 5.0,
    reviewsCount: 185,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 1.000.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang Executive' },
      { label: 'Fasilitas Utama', value: 'Full AC Triple Blower, Captain/Bench Seats, Sanitizer' },
      { label: 'Kondisi Armada', value: 'Kabin Senyap, Nyaman & Performa Handal' }
    ]
  },
  {
    id: 'grand-tour',
    name: 'Neo Grand Tour',
    nameAr: 'نيو جراند تور',
    category: 'Luxury GranTour Class',
    pricePerDay: 2000000,
    priceDisplay: 'Mulai Rp 2.000.000 / hari',
    image: '/neo_grand_tour_real_exterior.jpg',
    interiorImage: '/neo_grand_tour_real_interior_cabin.jpg',
    interiorSecondaryImage: '/neo_grand_tour_real_interior_seat.jpg',
    seats: 12,
    transmission: 'Automatic/Manual',
    fuel: 'Diesel Euro 4',
    includeList: [
      'Full AC Climate Control',
      'Grand Tour Executive Seats',
      'Smart TV & Premium Audio',
      'Include Mobil, Supir & BBM'
    ],
    terms: COMMON_HIACE_TERMS,
    description: 'Varian eksklusif Hiace Grand Tour khusus dirancang untuk perjalanan jarak jauh antar kota & provinsi dengan kemewahan dan kenyamanan maksimal.',
    rating: 5.0,
    reviewsCount: 95,
    specifications: [
      { label: 'Tarif Sewa', value: 'Mulai Rp 2.000.000 / hari' },
      { label: 'Kapasitas Penumpang', value: '10-12 Kursi Grand Tour VIP' },
      { label: 'Fasilitas Utama', value: 'Smart TV, Grand Tour Reclining Seats, Ambient Lighting' },
      { label: 'Kondisi Armada', value: 'Armada Jarak Jauh Ultra Executive' }
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
