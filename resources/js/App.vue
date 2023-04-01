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
const waitFor = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const slideUp = (target, duration) => {
    target.style.transitionProperty = 'height, margin, padding'; /* [1.1] */
    target.style.transitionDuration = duration + 'ms'; /* [1.2] */
    target.style.boxSizing = 'border-box'; /* [2] */
    target.style.height = target.offsetHeight + 'px'; /* [3] */

    target.style.height = 0; /* [4] */
    target.style.paddingTop = 0; /* [5.1] */
    target.style.paddingBottom = 0; /* [5.2] */
    target.style.marginTop = 0; /* [6.1] */
    target.style.marginBottom = 0; /* [7.2] */
    target.style.overflow = 'hidden'; /* [7] */

    window.setTimeout(() => {
        target.style.display = 'none'; /* [8] */
        target.style.removeProperty('height'); /* [9] */
        target.style.removeProperty('padding-top');  /* [10.1] */
        target.style.removeProperty('padding-bottom');  /* [10.2] */
        target.style.removeProperty('margin-top');  /* [11.1] */
        target.style.removeProperty('margin-bottom');  /* [11.2] */
        target.style.removeProperty('overflow');  /* [12] */
        target.style.removeProperty('transition-duration');  /* [13.1] */
        target.style.removeProperty('transition-property');  /* [13.2] */
    }, duration);
}

const slideDown = (target, duration) => {
    target.style.removeProperty('display'); /* [1] */
    let display = window.getComputedStyle(target).display;
    if (display === 'none') { /* [2] */
        display = 'block';
    }
    target.style.display = display;

    let height = target.offsetHeight; /* [3] */
    target.style.height = 0; /* [4] */
    target.style.paddingTop = 0; /* [5.1] */
    target.style.paddingBottom = 0; /* [5.2] */
    target.style.marginTop = 0; /* [6.1] */
    target.style.marginBottom = 0; /* [6.2] */
    target.style.overflow = 'hidden'; /* [7] */

    target.style.boxSizing = 'border-box'; /* [8] */
    target.style.transitionProperty = "height, margin, padding";  /* [9.1] */
    target.style.transitionDuration = duration + 'ms'; /* [9.2] */
    target.style.height = height + 'px'; /* [10] */
    target.style.removeProperty('padding-top'); /* [11.1] */
    target.style.removeProperty('padding-bottom'); /* [11.2] */
    target.style.removeProperty('margin-top'); /* [12.1] */
    target.style.removeProperty('margin-bottom'); /* [12.2] */

    window.setTimeout(() => {
        target.style.removeProperty('height'); /* [13] */
        target.style.removeProperty('overflow'); /* [14] */
        target.style.removeProperty('transition-duration'); /* [15.1] */
        target.style.removeProperty('transition-property'); /* [15.2] */
    }, duration);
}

const slideToggle = (target, duration = 300) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}

const is = (elem, selector) => {
    if (selector.nodeType) {
        return elem === selector;
    }

    let qa = (typeof (selector) === 'string' ? document.querySelectorAll(selector) : selector),
        length = qa.length,
        returnArr = [];

    while (length--) {
        if (qa[length] === elem) {
            return true;
        }
    }

    return false;
}

export default {
    name: 'AppBase',
    async mounted() {
        await waitFor(1500)
        this.debug('mounted (after timeout)')

        const currentUrl = window.location.href

        if (!currentUrl.includes('admstr')) {
            // mobile navigation handler
            this.mobileMenu()

            // scroll handler
            window.addEventListener('scroll', this.handleScroll)
        }
    },
    methods: {
        handleScroll() {
            let header = document.getElementById('header')
            let navSection = document.querySelectorAll('section')
            let mainNav = document.querySelectorAll('.nav-menu, #mobile-nav')

            let scrollY = window.scrollY
            let curPos = scrollY + 80

            // Toggle .header-scrolled class to #header when page is scrolled
            if (scrollY > 100) {
                header.classList.add('header-scrolled')
            } else {
                header.classList.remove('header-scrolled')
            }
        },
        mobileMenu() {
            // Mobile Navigation
            if (document.querySelectorAll('.nav-menu').length > 0) {
                const mobileNav = document.getElementsByClassName('nav-menu')[0].cloneNode(true)
                mobileNav.className = 'mobile-nav d-lg-none'

                document.getElementsByTagName('body')[0].appendChild(mobileNav)
                document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>')

                const mobileNavOverly = document.createElement('div')
                mobileNavOverly.classList.add('mobile-nav-overly')
                mobileNavOverly.style.display = 'none'

                document.getElementsByTagName('body')[0].appendChild(mobileNavOverly)

                document.getElementsByClassName('mobile-nav-toggle')[0].addEventListener('click', (e) => {
                    document.getElementsByTagName('body')[0].classList.toggle('mobile-nav-active')

                    if (document.getElementsByClassName('mobile-nav-active').length > 0) {
                        document.querySelectorAll('.mobile-nav-toggle i')[0].className = 'icofont-close'
                    } else {
                        document.querySelectorAll('.mobile-nav-toggle i')[0].className = 'icofont-navigation-menu'
                    }

                    if (document.getElementsByClassName('mobile-nav-overly')[0].style.display == 'none') {
                        document.getElementsByClassName('mobile-nav-overly')[0].style.display = 'block'
                    } else {
                        document.getElementsByClassName('mobile-nav-overly')[0].style.display = 'none'
                    }
                })

                const clickButtonMobileNavDropdown = document.querySelectorAll('.mobile-nav .drop-down > a')
                for (const click of clickButtonMobileNavDropdown) {
                    click.addEventListener('click', function (e) {
                        e.preventDefault()

                        const nextElement = this.nextElementSibling
                        slideToggle(nextElement, 300)
                    })
                }

                const clickButtonMobileNav = document.querySelectorAll('.mobile-nav a')
                for (const click of clickButtonMobileNav) {
                    if (click.hasAttribute('href')) {
                        click.addEventListener('click', function (e) {
                            if (document.getElementsByTagName('body')[0].classList.contains('mobile-nav-active')) {
                                document.getElementsByTagName('body')[0].classList.toggle('mobile-nav-active')

                                if (document.getElementsByClassName('mobile-nav-active').length > 0) {
                                    document.querySelectorAll('.mobile-nav-toggle i')[0].className = 'icofont-close'
                                } else {
                                    document.querySelectorAll('.mobile-nav-toggle i')[0].className = 'icofont-navigation-menu'
                                }

                                if (document.getElementsByClassName('mobile-nav-overly')[0].style.display == 'none') {
                                    document.getElementsByClassName('mobile-nav-overly')[0].style.display = 'block'
                                } else {
                                    document.getElementsByClassName('mobile-nav-overly')[0].style.display = 'none'
                                }
                            }
                        })
                    }
                }

                document.body.addEventListener('click', (e) => {
                    const containerMobileNavToggle = document.querySelector('.mobile-nav-toggle')
                    const containerMobileNav = document.querySelector('.mobile-nav')

                    const target = e.target

                    const containMobileNavToggle = containerMobileNavToggle.contains(target)
                    const containMobileNav = containerMobileNav.contains(target)

                    const hasCheck = (containMobileNavToggle || containMobileNav)
                    const isCheck = is(target, '.mobile-nav, .mobile-nav-toggle')

                    if (!isCheck && !hasCheck) {
                        if (document.getElementsByTagName('body')[0].classList.contains('mobile-nav-active')) {
                            document.getElementsByTagName('body')[0].classList.toggle('mobile-nav-active')

                            if (document.getElementsByClassName('mobile-nav-active').length > 0) {
                                document.querySelectorAll('.mobile-nav-toggle i')[0].className = 'icofont-close'
                            } else {
                                document.querySelectorAll('.mobile-nav-toggle i')[0].className = 'icofont-navigation-menu'
                            }

                            if (document.getElementsByClassName('mobile-nav-overly')[0].style.display == 'none') {
                                document.getElementsByClassName('mobile-nav-overly')[0].style.display = 'block'
                            } else {
                                document.getElementsByClassName('mobile-nav-overly')[0].style.display = 'none'
                            }
                        }
                    }
                });

            } else if (document.querySelectorAll('.mobile-nav, .mobile-nav-toggle').length > 0) {
                const mobileNav = document.querySelectorAll('.mobile-nav, .mobile-nav-toggle')
                for (const item of mobileNav) {
                    item.style.display = 'none'
                }
            }
        },
        debug(tag) {
            console.log(`[${tag}] `, '$el:', this.$el)
        }
    }
}
</script>
