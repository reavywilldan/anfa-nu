<template>
    <body class="g-sidenav-show bg-gray-100">
        <SideNavComponent />
        <main class="main-content position-relative border-radius-lg ">
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Tambah Kategori Berita</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="POST">
                                    <div class="form-group">
                                        <label for="news" class="form-control-label text-left">
                                            Isi Berita
                                        </label>
                                        <input class="form-control" name="news" id="news" type="text" required>
                                        <editor-content :editor="editor" :class="form - control" />
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="typeNews" class="form-control-label text-left">
                                                    Tipe Berita
                                                </label>
                                                <select class="form-control" name="typeNews" id="typeNews" required>
                                                    <option value="news">Berita</option>
                                                    <option value="promotion">Promo</option>
                                                    <option value="auction">Lelang</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="newsCategory" class="form-control-label text-left">
                                                    Kategori Berita
                                                </label>
                                                <select multiple class="form-control" name="newsCategory" id="newsCategory"
                                                    required>

                                                    <option v-for="category in newsCategory" :key="category.id"
                                                        :id="category.id" :value="category.id">{{ category.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-sm ms-auto">Simpan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </body>
</template>

<script>
// @ is an alias to /src
import SideNavComponent from '@/admin/components/SideNav.vue'
import store from '@/store'

import newsCategoryServices from '../../services/newsCategory'

import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
    name: 'AdminAddNews',
    components: {
        EditorContent,
        SideNavComponent
    },
    setup() {
        const editor = useEditor({
            content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
            extensions: [
                StarterKit,
            ],
        })

        return { editor }
    },
    data() {
        return {
            authenticated: (store.state.auth.authenticated),
            user: store.state.auth.user,
            newsCategory: []
        }
    },
    methods: {
        async setNewsCategory() {
            try {
                const result = await newsCategoryServices.getNewsCategory(this.page)

                if (result.data.length) {
                    this.newsCategory.push(...result.data);
                }
            } catch (err) { }
        }
    },
    async mounted() {
        await this.setNewsCategory()
    }
}
</script>