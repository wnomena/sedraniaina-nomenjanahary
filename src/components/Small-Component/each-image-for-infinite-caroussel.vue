<template>
    <section :class="'col-12 each-imge-with-all-specification element-of-caroussel-'.concat(element.child_key)">
        <img class="col-12" :src="(element.img as HTMLImageElement).src" alt="" />
    </section>
</template>

<script lang="ts" setup>
    const element = defineProps<{child_key:string,img : HTMLImageElement}>()
    const data = new Date()
</script>

<style scoped>
    .each-imge-with-all-specification > img {
        height: 5rem;
        border-radius: 5px;
    }
</style>
