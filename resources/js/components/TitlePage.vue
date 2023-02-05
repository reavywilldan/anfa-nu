<template>
    <div class="section-title mb-5" style="margin-top: 30px">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>

export default {
    name: 'TitlePageComponent',
    props: {
        msg: String
    }
}

</script>