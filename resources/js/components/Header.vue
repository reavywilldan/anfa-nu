<template>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">

            <div class="logo mr-auto">
                <a @click="$router.push('/')"><img src="../../assets/img/logo-bmt-anfa-nu.png" alt=""
                        class="img-fluid"></a>
            </div>

            <nav class="nav-menu d-none d-lg-block">
                <ul>
                    <li class="active"><a @click="$router.push('/')">Home</a></li>
                    <li class="drop-down"><a>Tentang Kami</a>
                        <ul>
                            <li><a @click="$router.push('/about-history')">Sejarah</a></li>
                            <li><a @click="$router.push('/about-profile')">Profil Perusahaan</a></li>
                            <li><a href="#">Visi Dan Misi</a></li>
                            <li><a href="#">Struktur Organisasi</a></li>
                        </ul>
                    </li>
                    <li class="drop-down"><a href="#services">Tamwil dan Produk</a>
                        <ul>
                            <li class="drop-down"><a href="#">Simpanan</a>
                                <ul>
                                    <li><a href="#">Simpanan Mudharabah</a></li>
                                    <li><a href="#">Simpanan Berjangka / Deposito</a></li>
                                    <li><a href="#">Simpanan Arisan Mudharabah</a></li>
                                    <li><a href="#">Simpanan Haji Mudharabah</a></li>
                                    <li><a href="#">Simpanan Tarbiyah / Pendidikan</a></li>
                                </ul>
                            </li>
                            <li class="drop-down"><a href="#">Pembiayaan</a>
                                <ul>
                                    <li><a href="#">Pembiayaan Mudharabah / Pembiayaan Murabahah</a></li>
                                    <li><a href="#">Pembiayaan Qhordul Hasan</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="drop-down"><a href="#services">Maal dan CSR</a>
                        <ul>
                            <li><a href="#">Program Maal</a></li>
                        </ul>
                    </li>
                    <li class="drop-down"><a>Berita dan Publikasi</a>
                        <ul>
                            <li><a @click="$router.push('/news')">Berita</a></li>
                            <li><a href="#">Promo</a></li>
                            <li><a href="#">Pengumuman</a></li>
                        </ul>
                    </li>
                    <li class="drop-down"><a href="#services">Karir</a>
                        <ul>
                            <li><a href="#">Bekerja di BMT Anfa NU</a></li>
                            <li><a href="#">Lowongan</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Kontak</a></li>
                </ul>
            </nav><!-- .nav-menu -->

        </div>
    </header><!-- End Header -->
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>