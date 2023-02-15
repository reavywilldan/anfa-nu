<template>
    <div class="home">

        <body>
            <HeaderComponent />

            <main id="main">
                <section id="product" class="product">
                    <div class="container">

                        <TitlePageComponent :msg="configProduct.name" />

                        <div v-for="products in groupedArr(configProduct.content)" class="row">
                            <div v-for="product in products" class="col">
                                <h2>{{ product.title }}</h2>

                                <div v-if="product.type == 'paragraph'">
                                    <p>{{ product.value }}</p>
                                </div>

                                <div v-else-if="product.type == 'list'">
                                    <section id="about" class="about">
                                        <div class="row content">
                                            <div class="col">

                                                <ul v-show="product.value.length > 0">
                                                    <li v-for="productValue in product.value">
                                                        <i class="ri-check-double-line"></i>
                                                        {{ productValue }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <!-- <div class="panel">
                                    <h1>{{ article.title }}</h1>
                                    <p>{{ article.summary }}</p>
                                </div> -->
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <ContactUsComponent />
            <FooterComponent />
        </body>

    </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/customer/components/Header.vue'
import FooterComponent from '@/customer/components/Footer.vue'
import TitlePageComponent from '@/customer/components/TitlePage.vue'
import ContactUsComponent from '@/customer/components/ContactUs.vue'

import configProduct from '../../../configProduct'

export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        FooterComponent,
        TitlePageComponent,
        ContactUsComponent
    },
    data() {
        return {
            configProduct: {},
            productFromRoute: '',
            productChildFromRoute: ''
        }
    },
    watch: {
        '$route.params': {
            handler(newValue) {
                this.productFromRoute = newValue.product
                this.productChildFromRoute = newValue.productChild

                this.getProduct(this.productFromRoute, this.productChildFromRoute)
            },
            immediate: true
        }
    },
    methods: {
        getProduct(params1, params2) {
            let productList = configProduct.configProduct

            const productFromRoute = params1 || ''
            const productChildFromRoute = params2 || ''

            const indexFromPathProduct = productList.findIndex(x => x.path == productFromRoute)

            if (indexFromPathProduct > -1) {
                productList = productList[indexFromPathProduct]

                if (Object.keys(productList).length > 0) {
                    if (productList.hasChild) {
                        const indexFromPathProductChild = productList.child.findIndex(x => x.path == productChildFromRoute)

                        if (indexFromPathProductChild > -1) {
                            productList = productList.child[indexFromPathProductChild]

                            if (Object.keys(productList).length > 0) {
                                this.configProduct = productList
                            }
                        }
                    } else {
                        this.configProduct = productList
                    }
                }
            }
        }
    }
}
</script>
