<template>
    <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center">

            <div class="logo mr-auto">
                <a href="/"><img src="/img/logo-bmt-anfanu-typho.png" alt="" class="img-fluid"></a>
            </div>

            <nav class="nav-menu d-none d-lg-block">
                <ul>
                    <li class="active"><a href="/">Home</a></li>
                    <li class="drop-down"><a>Tentang Kami</a>
                        <ul>
                            <li><a href="/about-history">Sejarah</a></li>
                            <li><a href="/about-profile">Profil Perusahaan</a></li>
                            <li><a href="/about-vision-and-mission">Visi Dan Misi</a></li>
                            <li><a href="/about-organizational-structure">Struktur Organisasi</a></li>
                        </ul>
                    </li>
                    <li class="drop-down"><a>Tamwil dan Produk</a>
                        <ul v-show="Object.keys(configProduct).length > 0">
                            <li v-for="product in configProduct" :key="product.name"
                                :class="product.hasChild ? 'drop-down' : undefined">
                                <a :href="product.hasChild ? undefined : '/product/' + product.name">
                                    {{ product.name }}
                                </a>
                                <ul v-show="product.child.length > 0">
                                    <li v-for="productChild in product.child" :key="productChild.name">
                                        <a :href="'/product/' + product.path + '/' + productChild.path">
                                            {{ productChild.name }}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <!-- <li class="drop-down"><a href="#services">Maal dan CSR</a>
                        <ul>
                            <li><a href="#">Program Maal</a></li>
                        </ul>
                    </li> -->
                    <li class="drop-down"><a>Berita dan Publikasi</a>
                        <ul>
                            <li><a href="/news">Berita</a></li>
                            <li><a href="/news-promotion">Berita Promo</a></li>
                            <li><a href="/news-auction">Berita Lelang</a></li>
                        </ul>
                    </li>
                    <li class="drop-down"><a href="">Karir</a>
                        <ul>
                            <li><a href="#">Bekerja di BMT Anfa NU</a></li>
                            <li><a href="#">Lowongan</a></li>
                        </ul>
                    </li>
                    <li><a href="/contact">Kontak</a></li>
                </ul>
            </nav>

        </div>
    </header>
</template>

<script>

import configProduct from '../../../configProduct'

export default {
    name: 'HeaderComponent',
    data() {
        return {
            configProduct: []
        }
    },
    created() {
        this.configProduct = configProduct.configProduct
    }
}
</script>