const aboutCovid = {
    title: 'Coronavirus (COVID-19)',
    content: `
    COVID-19 adalah penyakit menular yang disebabkan oleh coronavirus yang paling baru ditemukan. 
    Virus dan penyakit baru ini tidak dikenal sebelum merebaknya wabah di Wuhan, China, pada Desember 2019. COVID-19 kini menjadi pandemi yang melanda banyak negara secara global.
    COVID-19 adalah penyakit yang disebabkan oleh Novel Coronavirus (2019-nCoV), 
    jenis baru coronavirus yang pada manusia menyebabkan penyakit mulai flu biasa hingga penyakit yang serius seperti Middle East Respiratory Syndrome (MERS) dan Sindrom Pernapasan Akut Berat atau 
    Severe Acute Respiratory Syndrome (SARS). Pada 11 Februari 2020, World Health Organization (WHO) mengumumkan nama penyakit yang disebabkan 2019-nCov, yaitu Coronavirus Disease (COVID-19). 
    Sebagian besar orang yang tertular COVID-19 akan mengalami gejala ringan hingga sedang, dan akan pulih tanpa penanganan khusus. 
    Namun, sebagian orang akan mengalami sakit parah dan memerlukan bantuan medis.`,
};

const infection = {
    infection: ` ini dapat menyebar melalui tetesan kecil (droplet) dari hidung atau mulut pada saat batuk atau bersin. Droplet tersebut
    kemudian jatuh pada benda di sekitarnya. Kemudian jika ada orang lain menyentuh benda yang sudah terkontaminasi dengan droplet tersebut, lalu orang itu menyentuh mata, hidung atau
    mulut (segitiga wajah), maka orang itu dapat terinfeksi COVID-19.<br> Seseorang juga bisa terinfeksi COVID-19 ketika tanpa sengaja menghirup droplet dari penderita. Inilah sebabnya
    mengapa kita penting untuk menjaga jarak hingga kurang lebih satu meter dari orang yang sakit.
    `,
};

const wishHand = [
    {
        title: 'Menggunakan Sabun',
        img: './img/hand-1.png',
    },
    {
        title: 'Menggosokan tangan depan',
        img: './img/hand-2.png',
    },
    {
        title: 'Menggosokan tangan belakang',
        img: './img/hand-3.png',
    },
    {
        title: 'Menggosokan selaput jari',
        img: './img/hand-4.png',
    },
    {
        title: 'Cuci dengan air',
        img: './img/hand-5.png',
    },
];

const preventionAdvice = [
    {
        title: 'Tutup saat batuk',
        img: './img/prevention-1.png',
        content: 'Kain penutup wajah Anda dapat melindungi mereka. Penutup wajah mereka dapat melindungi Anda, atau menggunakan masker',
    },
    {
        title: 'Pakai Masker Saat Keluar',
        img: './img/prevention-2.png',
        content: 'Selalu gunakan masker saat berpergian untuk mencegah penyebaran covid-19 virus',
    },
    {
        title: 'Jaga Jarak\n(Keep Social Distance)',
        img: './img/prevention-3.png',
        content: 'Mencaga jarak dengan orang lain saat berada diluar ruangan, hindari kerumunan untuk melindungi anda dan orang banyak',
    },
    {
        title: 'Cuci tangan secara teratur',
        img: './img/prevention-4.png',
        content: 'Sering-seringlah mencuci tangan setidaknya selama 20 detik dengan sabun dan air.',
    },
    {
        title: 'Jangan sentuh Wajahmu',
        img: './img/prevention-5.png',
        content: 'Menghindari tidak menyentuh mata, hidung, dan mulut dengan tangan yang belum dicuci.',
    },
    {
        title: 'Tetap diRumah aja',
        img: './img/prevention-6.png',
        content: 'dengan dirumah aja, anda dapat melindungi orang lain, kerabat, dan diri anda sendiri',
    },
];

const symptom = [
    {
        title: 'Batuk Kering',
        img: './img/symptoms-1.svg',
        content: 'Batuk kering biasanya disebabkan oleh flu. Namun, kondisi lain juga dapat memicu terjadinya batuk kering, seperti asma, bronkitis, GERD, alergi, infeksi saluran pernapasan, dan COVID-19.',
    },
    {
        title: 'Sakit kepala',
        img: './img/symptoms-2.svg',
        content: 'Sakit kepala adalah rasa sakit atau nyeri di kepala, yang bisa muncul secara bertahap atau mendadak. Nyeri bisa muncul di salah satu sisi kepala, atau di seluruh bagian kepala. Sakit kepala bisa membuat kepala terasa berdenyut, atau seperti terlilit kencang oleh tali. Perlu diketahui, sakit kepala merupakan salah satu gejala yang umum dialami penderita COVID-19.',
    },
    {
        title: 'Demam Tinggi',
        img: './img/symptoms-3.svg',
        content: 'Demam adalah peningkatan suhu tubuh di atas 38 derajat Celsius yang umumnya merupakan respons tubuh terhadap penyakit. Suhu tubuh yang meningkat atau demam sebenarnya merupakan salah satu cara sistem kekebalan tubuh manusia untuk memerangi infeksi. Itulah mengapa jika demamnya tidak terlalu parah, dokter menyarankan untuk tidak perlu menurunkannya',
    },
    {
        title: 'Kelelahan',
        img: './img/symptoms-4.svg',
        content: 'Fatigue atau kelelahan adalah kondisi di mana Anda selalu merasa lelah, lesu, atau kurang tenaga. Kondisi ini tidak sama dengan sekadar merasa ngantuk.Fatigue adalah kondisi yang membuat Anda tidak memiliki motivasi dan energi. Mengantuk mungkin adalah gejala fatigue, tetapi kedua kondisi itu tidak sama',
    },
    {
        title: 'Sesak Nafas',
        img: './img/symptoms-5.svg',
        content: 'Sesak napas dapat terjadi karena sistem pernapasan dan sirkulasi darah tidak mampu mengedarkan cukup oksigen untuk tubuh. Namun, di samping itu, sesak napas juga bisa menjadi gejala dari gangguan psikis seseorang',
    },
    {
        title: 'Nyeri otot',
        img: './img/symptoms-6.svg',
        content: 'Nyeri otot dapat disebabkan oleh hal-hal di luar penyakit yang mendasari. Contohnya meliputi olahraga, terlalu lama duduk atau berbaring, melakukan aktivitas fisik yang baru untuk pertama kalinya, keseleo, atau otot tegang',
    },
];

module.exports = {
    aboutCovid, infection, preventionAdvice, symptom, wishHand,
};
