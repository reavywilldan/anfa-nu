const config = {
    email: 'ksppsbmtanfa@gmail.com',
    phone: '0813-2817-9519',
    address: {
        headquarters: {
            address: 'Jl. Alternatif Pucang Magelang, Kauman, Pucang, Secang, Kabupaten Magelang, Jawa Tengah 56195',
            phone: '0813-2817-9519'
        },
        branchOffice: {
            address: 'Jl. Sekar Langit Km 0.5 ( depan pasar hewan ) Grabag, Kabupaten Magelang, Jawa Tengah 56196',
            phone: '0877-1918-6815'
        }
    }
}

const basicInfo = {
    email: 'ksppsbmtanfa@gmail.com',
    phone: '0813-2817-9519',
    address: 'Jl. Alternatif Pucang Magelang, Kauman, Pucang, Secang, Kabupaten Magelang, Jawa Tengah 56195',
}

const branchOffice = [
    {
        name: 'BMT Anfa NU Cabang Sekar Langit',
        address: 'Jl. Sekar Langit Km 0.5 ( depan pasar hewan ) Grabag, Kabupaten Magelang, Jawa Tengah 56196',
        phone: '0877-1918-6815'
    }
]

const visionAndMission = [
    {
        title: 'Visi',
        type: 'paragraph',
        value: 'MAJU BERSAMA MERAIH SUKSES DUNIA AKHIRAT'
    },
    {
        title: 'Misi',
        type: 'list',
        value: [
            'MENDORONG TERCIPTANYA EKONOMI KERAKYATAN',
            'MEMBUKA LAPANGAN PEKERJAAN',
            'MENSEJAHTARAKAN ANGGOTA',
            'PROFESIONAL DAN AMANAH DALAM MELAYANI ANGGOTA'
        ]
    }
]

const profile = [
    {
        'name': 'Nama Lembaga',
        'value': 'Koperasi Simpan Pinjam dan Pembiayaan Syari’ah ( KSPPS ) BMT ANFA’ NU'
    },
    {
        'name': 'Alamat E-mail',
        'value': ' ksppsbmtanfa@gamil.com'
    },
    {
        'name': 'Alamat',
        'value': 'Jl. Alternatif Pucang Magelang, Kauman, Pucang, Secang, Kabupaten Magelang, Jawa Tengah 56195'
    },
    {
        'name': 'Dasar Hukum Pendirian',
        'value': '67/Kep/M.KUM/VI/2006'
    },
    {
        'name': 'Jaringan',
        'value': `1 Kantor Pusat dan ${branchOffice.length} Kantor Cabang`
    },
    {
        'name': 'Kegiatan Usaha',
        'value': 'Bergerak dibidang Koperasi Simpan Pinjam dan Pembiayaan Syari’ah sesuai'
    },
    {
        'name': 'Anggaran Dasar',
        'value': 0
    },
    {
        'name': 'No Telp/ WA',
        'value': '0813-2817-9519'
    },
    {
        'name': 'Segmen Usaha Pembiayaan',
        'value': 'Bisnis UKM/UMKM dan Jual beli'
    },
]

export default {
    config,
    basicInfo,
    profile,
    visionAndMission,
    branchOffice
}