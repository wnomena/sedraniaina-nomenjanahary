<template>
    <section class="container-for-social-image-and-name">
        <div @click="on_click(element.data.link)" class="col-11 container-block-to-contain-image-rounded-and-name">
            <img  :src="(element.data.img as HTMLImageElement).src" alt="">
            <h5 class="text-center d-lg-block d-md-block d-none fw-bold text-light">{{ element.data.name }}</h5>
        </div>
    </section>
</template>

<script lang="ts" setup>
import type { Social } from '@/data';
    const element = defineProps<{data : Social}>()
    const on_click = (element2:string) => {
        window.location.href = element2
    }
</script>

<style scoped>
    .container-for-social-image-and-name {
        display: flex;
        justify-content: center;
        cursor: pointer;
        transition: 0.5s;
    }
    .container-for-social-image-and-name:hover {
        transform: translateY(-10px);
        transition: 0.5s;
    } 
    .container-for-social-image-and-name .container-block-to-contain-image-rounded-and-name {
        align-self: center;
        outline: none;
        overflow: hidden;
        display: block;

    }
    .container-for-social-image-and-name .container-block-to-contain-image-rounded-and-name img {
        border-radius: 10%;
        height: 100%;
        width: 100%;
    }
</style>