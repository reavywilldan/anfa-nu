<template>
    <div class="row">
        <div class="col-lg-8 col-md-12">
            <div class="card px-3 pt-3" style="max-width: 50rem">
                <!-- News block -->
                <div>
                    <!-- Featured image -->
                    <carousel :autoplay="2000" :items-to-show="1" :wrap-around="true">
                        <slide v-for="slide in data.news_media" :key="slide.id">
                            <div class="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
                                data-mdb-ripple-color="light">
                                <img v-bind:src="'/img/news/' + slide.name" class="img-fluid" />
                                <p class="text-left">* {{ slide.description }}</p>
                            </div>
                        </slide>
                        <template #addons>
                            <navigation />
                            <pagination />
                        </template>
                    </carousel>

                    <!-- Article data -->
                    <div class="row mb-3">
                        <div class="col-6">
                            <a class="text-info">
                                <i class="ri-account-circle-line"></i>
                                {{ data.username }}
                            </a>
                        </div>

                        <div class="col-6 text-end">
                            <u> {{ data.created_at }}</u>
                        </div>
                    </div>

                    <!-- Article title and description -->
                    <a class="text-dark">
                        <h5>{{ data.title }}</h5>

                        <span v-html="data.text"></span>
                    </a>
                </div>
                <!-- News block -->
            </div>
        </div>
        <div class="col-lg-4 col-md-12">
            <section id="about" class="about">
                <div class="row content">
                    <div class="col">
                        <h3>Kategori</h3>
                        <ul v-show="data.news_category_list.length > 0">
                            <li v-for="category in data.news_category_list">
                                <i class="ri-check-double-line"></i>
                                {{ category.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: 'NewsDetailComponent',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: {
        data: Object
    }
}
</script>