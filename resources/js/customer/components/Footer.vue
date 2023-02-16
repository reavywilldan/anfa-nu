<template>
    <footer id="footer">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg-6 text-lg-left text-center">
                    <div class="copyright">
                        &copy; {{ currentDate() }} <strong>BMT ANFA NU</strong>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
                        <a href="/" class="scrollto">Home</a>
                        <a href="/about-profile" class="scrollto">About</a>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'FooterComponent'
}

</script>