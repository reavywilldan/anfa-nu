<template>
    <div class="card-body">
        <form role="form" action="javascript:void(0)" method="POST" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="newsTitle" class="form-control-label text-left">
                            Judul Berita
                        </label>
                        <input type="text" class="form-control" name="newsTitle" id="newsTitle" v-model="data.title"
                            disabled>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="news" class="form-control-label text-left">
                            Isi Berita
                        </label>
                        <QuillEditor theme="snow" aria-required="true" name="contentNews" id="contentNews" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="typeNews" class="form-control-label text-left">
                            Tipe Berita
                        </label>
                        <select class="form-control" name="typeNews" id="typeNews" disabled required>
                            <option value="news" :selected="data.type == 'news'">Berita</option>
                            <option value="promotion" :selected="data.type == 'promotion'">Promo</option>
                            <option value="auction">Lelang</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="newsCategory" class="form-control-label text-left">
                            Kategori Berita
                        </label>
                        <select multiple class="form-control" name="newsCategory" id="newsCategory" required>

                            <option v-for="category in data.news_category_list" :key="category.id" :id="category.id"
                                :value="category.id">{{ category.name }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="news" class="form-control-label text-left">
                    Foto Berita
                </label>

                <div id="gallery" v-if="data.news_media">
                    <div v-for="photo in data.news_media" :data-file="photo.name" :data-temp="photo.tempPath"
                        class="img-wrapper">
                        <img v-bind:src="'/img/' + photo.name">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
const waitFor = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// @ is an alias to /src
import SideNavComponent from '@/admin/components/SideNav.vue'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const quillOptions = {
    readOnly: true,
    theme: 'snow'
}

QuillEditor.props.globalOptions.default = () => quillOptions

export default {
    name: 'NewsDetailComponent',
    components: {
        QuillEditor,
        SideNavComponent
    },

    async mounted() {
        await waitFor(1500)

        let editorElement = document.getElementsByClassName('ql-editor')

        if (editorElement) {
            editorElement = editorElement[0]
            editorElement.innerHTML = this.data.text
        }
    },
    props: {
        data: Object
    },
}
</script>

<style scoped>
.img-wrapper {
    position: relative;
    width: fit-content;
    display: flex;
    width: 85px;
    height: 85px;
    border-radius: 10px;
    background-color: #ebebeb;
    align-items: center;
    overflow: hidden;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

#gallery {
    display: flex;
    gap: 16px;
    margin-top: 16px;
}

#gallery img {
    width: 100%;
    margin: 0 auto;
}

#remove {
    position: absolute;
    top: 0;
    right: 0;
}
</style>
