<template>
    <body class="g-sidenav-show bg-gray-100">
        <SideNavComponent />
        <main class="main-content position-relative border-radius-lg ">
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h6>Tambah Promosi</h6>
                            </div>
                            <div class="card-body">
                                <form role="form" action="javascript:void(0)" method="POST" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="newsTitle" class="form-control-label text-left">
                                                    Judul Promosi
                                                </label>
                                                <input type="text" class="form-control" name="newsTitle" id="newsTitle"
                                                    v-model="newsTitle" required>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="news" class="form-control-label text-left">
                                                    Isi Promosi
                                                </label>
                                                <QuillEditor theme="snow" aria-required="true" name="contentNews"
                                                    id="contentNews" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="typeNews" class="form-control-label text-left">
                                                    Tipe Promosi
                                                </label>
                                                <select class="form-control" name="typeNews" id="typeNews" disabled
                                                    required>
                                                    <option value="news">Berita</option>
                                                    <option value="promotion" selected>Promo</option>
                                                    <option value="auction">Lelang</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="newsCategory" class="form-control-label text-left">
                                                    Kategori Promosi
                                                </label>
                                                <select multiple class="form-control" name="newsCategory" id="newsCategory"
                                                    required>

                                                    <option v-for="category in newsCategory" :key="category.id"
                                                        :id="category.id" :value="category.id">{{ category.name }}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="news" class="form-control-label text-left">
                                            Foto Promosi
                                        </label>
                                        <input :disabled="newsPhoto.length >= 3" class="form-control" name="photo[]"
                                            id="photo" type="file" accept="image/png, image/jpeg" multiple
                                            @change="onFileChange" required>

                                        <div id="gallery" v-if="newsPhoto.length > 0">
                                            <div v-for="photo in newsPhoto" :data-file="photo.name"
                                                :data-temp="photo.tempPath" class="img-wrapper">
                                                <img :src="photo.tempPath">
                                                <a id="remove" :data-file="photo.name" :data-temp="photo.tempPath"
                                                    @click="onClickRemoveFile">
                                                    <i :data-file="photo.name" :data-temp="photo.tempPath"
                                                        class="fa fa-window-close">
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-sm ms-auto"
                                        @click="addNews">Simpan</button>
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

import newsPromotionServices from '../../services/newsPromotion'
import newsCategoryServices from '../../services/newsCategory'
import fileServices from '../../services/file'

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import Swal from 'sweetalert2'

const quillOptions = {
    placeholder: 'Ketik disini ...',
    readOnly: false,
    theme: 'snow'
}

QuillEditor.props.globalOptions.default = () => quillOptions

export default {
    name: 'AdminAddPromotion',
    components: {
        QuillEditor,
        SideNavComponent
    },
    data() {
        return {
            authenticated: (store.state.auth.authenticated),
            user: store.state.auth.user,
            newsMaxLengthPhoto: 3,
            newsUsername: '',
            newsTitle: '',
            newsText: '',
            newsCategory: [],
            newsPhoto: []
        }
    },
    methods: {
        async setNewsCategory() {
            try {
                const result = await newsCategoryServices.getNewsCategoryAll()

                if (result.data.length) {
                    this.newsCategory.push(...result.data);
                }
            } catch (err) { }
        },
        onFileChange(e) {
            const file = e.target.files[0]
            const name = file.name
            const tempPath = URL.createObjectURL(file)

            const obj = {
                file,
                name,
                tempPath,
            }

            this.newsPhoto.push(obj)
        },
        onClickRemoveFile(e) {
            e.preventDefault()

            const file = e.target.getAttribute('data-file')
            const temp = e.target.getAttribute('data-temp')

            for (let i = 0; i < this.newsPhoto.length; i++) {
                if (this.newsPhoto[i].name == file && this.newsPhoto[i].tempPath == temp) {
                    this.newsPhoto.splice(i, 1)
                    break
                }
            }

            document.getElementById('photo').value = ''
            e.target.parentElement.remove()
        },
        getSelectValues(select) {
            let result = [];
            let options = select && select.options;
            let opt;

            for (let i = 0, iLen = options.length; i < iLen; i++) {
                opt = options[i];

                if (opt.selected) {
                    result.push(opt.value || opt.text);
                }
            }
            return result;
        },
        async addNews() {
            this.newsUsername = this.user.name
            let editorElement = document.getElementsByClassName('ql-editor')
            let text = ''

            if (editorElement) {
                editorElement = editorElement[0]
                text = editorElement.innerHTML
            }

            const newsCategoryElement = document.getElementById('newsCategory')
            const category = this.getSelectValues(newsCategoryElement)

            let photo = await Promise.all(this.newsPhoto.map(async (item) => {
                const file = item.file
                const path = 'promotion'

                const formData = new FormData()
                formData.append('photo', file)

                const obj = {
                    file: formData,
                    path
                }

                const response = await fileServices.postImage(obj)
                formData.delete('photo')

                const pathResponse = response.data

                return pathResponse
            }))

            if (!photo) {
                photo = []
            }

            const obj = {
                username: this.newsUsername,
                title: this.newsTitle,
                text,
                category,
                photo
            }

            const postNews = await newsPromotionServices.postNews(obj, this.user.bearer)

            if (postNews.data) {
                let self = this

                Swal.fire({
                    title: 'Berhasil!',
                    text: 'Promosi berhasil ditambahkan.',
                    icon: 'success'

                }).then(function () {
                    self.$router.push('/admstr/promotion')
                })
            }
        }
    },
    async mounted() {
        await this.setNewsCategory()
    }
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
