<template>
    <section class="col-lg-5 col-11 element-to-containe-one-element">
        <img class="m-auto" :src="(element.element.img as HTMLImageElement).src" alt="">
        <h2 class="fw-bold text-center text-light mt-2 mb-2"><strong>{{ element.element.enterprise }}</strong></h2>
        <div class="col-12 best-way-to-center-element d-flex justify-content-center">
            <p> {{ element.element.description}}</p>
        </div>
        <div class="col-8 list-of-image d-flex gap-1 justify-content-center mt-2 mb-2 m-auto">
            <img v-for="value in element.element.list_of_image" :src="(value.img as HTMLImageElement).src" alt="">
        </div>
    </section>
</template>

<script lang="ts" setup>
import type { Experiency } from '@/data';
    const element = defineProps<{element : Experiency}>()
</script>

<style scoped>
@media only screen and (min-width : 500px) {
    .element-to-containe-one-element {
        border: 3px solid white;
        overflow: hidden;
        outline: none;
        align-self: center;
        padding: 5px;
        display: flex;
        flex-direction: column;
        transition: 0.3s;
    }
    .element-to-containe-one-element:hover {
        border: 3px solid rgb(61, 56, 214);
        transform: translateY(-10px);
        transition: 0.3s;
    }
    .element-to-containe-one-element:hover > img {
        border: 3px solid rgb(61, 56, 214);
        transition: 0.3s;
    }
    .element-to-containe-one-element img {
        width: 99.5%;
        border-radius: 10px 10px 5px 5px;
        border: 3px solid white;
        height: 33vh;
        transition: 0.3s;


    }
        .element-to-containe-one-element .best-way-to-center-element p {
            width: 90%;
            text-align: center;
            color: white;
            font-family: "Roboto",sans-serif;

        }
        .element-to-containe-one-element .list-of-image img {
        width: 5vw !important;
        height: 3rem;
        gap: 5px;
    }
}

@media only screen and (max-width : 500px) {
    .element-to-containe-one-element {
        border: 3px solid white;
        overflow: hidden;
        outline: none;
        align-self: center;
        padding: 5px;
        display: flex;
        flex-direction: column;
        transition: 0.3s;
    }
    .element-to-containe-one-element:hover {
        border: 3px solid rgb(61, 56, 214);
        transform: translateY(-10px);
        transition: 0.3s;
    }
    .element-to-containe-one-element:hover > img {
        border: 3px solid rgb(61, 56, 214);
        transition: 0.3s;
    }
    .element-to-containe-one-element img {
        width: 99.5%;
        border-radius: 10px 10px 5px 5px;
        border: 3px solid white;
        height: 20vh;
        transition: 0.3s;


    }
        .element-to-containe-one-element .best-way-to-center-element p {
            width: 90%;
            text-align: center;
            color: white;
            font-family: "Roboto",sans-serif;

        }
        .element-to-containe-one-element .list-of-image img {
        width: 5vw !important;
        height: 3rem;
        gap: 5px;
    }
}
</style>