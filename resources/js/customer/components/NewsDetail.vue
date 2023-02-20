<template>
    <div class="row">
        <div class="col-7">
            <div class="card px-3 pt-3" style="max-width: 50rem">
                <!-- News block -->
                <div>
                    <!-- Featured image -->
                    <div class="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light">
                        <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" class="img-fluid" />
                        <a href="#!">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                        </a>
                    </div>

                    <!-- Article data -->
                    <div class="row mb-3">
                        <div class="col-6">
                            <a href="" class="text-info">
                                <i class="fas fa-plane"></i>
                                Travels
                            </a>
                        </div>

                        <div class="col-6 text-end">
                            <u> 15.07.2020</u>
                        </div>
                    </div>

                    <!-- Article title and description -->
                    <a href="" class="text-dark">
                        <h5>This is title of the news</h5>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid. Sed
                            id nihil magni, sint vero provident esse numquam perferendis ducimus dicta
                            adipisci iusto nam temporibus modi animi laboriosam?
                        </p>
                    </a>
                </div>
                <!-- News block -->
            </div>
        </div>
        <div class="col-3">
            <section id="about" class="about">
                <div class="row content">
                    <div class="col">
                        <ul>
                            <li>
                                <i class="ri-check-double-line"></i>
                                kategori
                            </li>
                            <li>
                                <i class="ri-check-double-line"></i>
                                kategori
                            </li>
                            <li>
                                <i class="ri-check-double-line"></i>
                                kategori
                            </li>
                            <li>
                                <i class="ri-check-double-line"></i>
                                kategori
                            </li>
                            <li>
                                <i class="ri-check-double-line"></i>
                                kategori
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
</div>
</template>

<script>

export default {
    name: 'NewsDetailComponent',
    props: {
        msg: String
    }
}

</script>