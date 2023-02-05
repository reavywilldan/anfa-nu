<template>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>

<script>
export default {
    name: 'AppBase',
    created() {
        // Smooth scroll for the navigation menu and links with .scrollto classes
        // document.querySelectorAll('.nav-menu a, .mobile-nav a, .scrollto').forEach(function (el) {
        //     el.addEventListener(function (e) {
        //         console.log(e)
        //     })
        // })

        // Mobile Navigation
        // document.getElementsByClassName('nav-menu')

        // Navigation active state on scroll

        window.addEventListener('scroll', this.handleScroll)
    },
    mounted() {
        this.$nextTick(() => {
            console.log('jembut')
            this.mobileMenu()
        });
    },
    methods: {
        handleScroll() {
            let header = document.getElementById('header')
            let navSection = document.querySelectorAll('section')
            let mainNav = document.querySelectorAll('.nav-menu, #mobile-nav')

            let scrollY = window.scrollY
            let curPos = scrollY + 80

            // Navigation active state on scroll
            // navSection.forEach(function (item) {
            //     let top = 0
            //     let bottom = 0

            //     if (!item.getClientRects().length) {
            //         top = 0
            //     } else {
            //         let rect = item.getBoundingClientRect();
            //         let win = item.ownerDocument.defaultView;

            //         top = rect.top + win.pageYOffset

            //         let styles = window.getComputedStyle(item)
            //         let margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom'])

            //         bottom = top + Math.ceil(item.offsetHeight + margin);
            //     }

            //     if (curPos >= top && curPos <= bottom) {
            //         if (curPos <= bottom) {
            //             Array.from(Array.from(mainNav).map(e => e.getElementsByTagName('li'))).forEach(e => [].forEach.call(e, function (el) {
            //                 el.classList.remove("active");
            //             }))
            //         }

            //         Array.from(Array.from(mainNav).map(e => e.getElementsByTagName('li'))).forEach(e => [].forEach.call(e, function (el) {
            //             el.classList.remove("active");
            //         }))
            //     }
            // })

            // Toggle .header-scrolled class to #header when page is scrolled
            if (scrollY > 100) {
                header.classList.add('header-scrolled')
            } else {
                header.classList.remove('header-scrolled')
            }

            this.mobileMenu()
        },
        mobileMenu() {
            if (document.querySelectorAll('.nav-menu').length > 0) {
                const mobileNav = document.getElementsByClassName('nav-menu')[0].cloneNode(true)
                mobileNav.classList.add('mobile-nav', 'd-lg-none')

                document.getElementsByTagName('body')[0].appendChild(mobileNav)
                document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>')

                const mobileNavOverly = document.createElement('div')
                mobileNavOverly.classList.add('mobile-nav-overly')
                mobileNavOverly.style.display = 'none'

                document.getElementsByTagName('body')[0].appendChild(mobileNavOverly)

                document.getElementsByClassName('mobile-nav-toggle')[0].addEventListener('click', (e) => {
                    document.getElementsByTagName('body')[0].classList.toggle('mobile-nav-active')
                    document.querySelectorAll('.mobile-nav-toggle i')[0].classList.toggle('icofont-navigation-menu', 'icofont-closee')
                    if (document.getElementsByClassName('mobile-nav-overly')[0].style.display == 'none') {
                        document.getElementsByClassName('mobile-nav-overly')[0].style.display = 'block'
                    } else {
                        document.getElementsByClassName('mobile-nav-overly')[0].style.display = 'none'
                    }
                })

            } else if (document.querySelectorAll('.mobile-nav, .mobile-nav-toggle').length > 0) {

            }
        }
    }
}
</script>
