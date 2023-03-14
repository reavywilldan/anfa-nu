<template>
    <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
        id="sidenav-main">
        <div class="sidenav-header">
            <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                aria-hidden="true" id="iconSidenav"></i>
            <a class="navbar-brand m-0" href="/admstr">
                <img src="/img/logo-bmt-anfanu-typho.png" class="navbar-brand-img h-100" alt="main_logo">
            </a>
        </div>
        <hr class="horizontal dark mt-0">
        <div class="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
            <ul class="navbar-nav">
                <li class="nav-item mt-3">
                    <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Berita</h6>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="/admstr/category-news">
                        <div
                            class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="ni ni-bold-right text-dark text-sm opacity-10"></i>
                        </div>
                        <span class="nav-link-text ms-1">Kategori Berita</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="/admstr/news">
                        <div
                            class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="ni ni-bold-right text-dark text-sm opacity-10"></i>
                        </div>
                        <span class="nav-link-text ms-1">Berita</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'SideNavComponent'
}
</script>