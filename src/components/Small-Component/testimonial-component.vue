<template>
    <section class="col-12 testimonial-component-for-dsilaying-some-positif-feedback">
        <div class="element-one-of-testimonial-component-for-star-and-score">
            <img v-if="start" :src="(start as HTMLImageElement).src" alt="">
            <div class="fw-bold text-light score-container">5 / 5</div>
        </div>
        <div class="element-two-of-testimonial-component-for-text-testimo">
            {{ props_value.text }}
        </div>
        <h5 class="element-three-of-testimonial-component-for-expeditor-of-testimon">
            {{ props_value.exp }}
        </h5>
    </section>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue';
import star from "@/assets/Portfolio/star.png"
    const start:Ref<HTMLImageElement | undefined> = ref(undefined)
    const props_value = defineProps<{text : string,exp : string}>()
    onMounted(() => {
        const element = new Image()
        element.src = star
        element.onload = () => {
            start.value = element
        }
    })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Epunda+Slab:ital,wght@0,300..900;1,300..900&family=Indie+Flower&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Island+Moments&family=Itim&family=Karma:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Epunda+Slab:ital,wght@0,300..900;1,300..900&family=Indie+Flower&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Island+Moments&family=Itim&family=Karma:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+DK+Uloopet+Guides&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    .testimonial-component-for-dsilaying-some-positif-feedback {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(10,1fr);
        grid-template-rows: repeat(10,1fr);
        /*background: radial-gradient(closest-side at 40% 60%,#050534,#050534 ,#262672 ,#6060bb);*/
        overflow: hidden;
        outline: none;
    }
    .testimonial-component-for-dsilaying-some-positif-feedback .element-one-of-testimonial-component-for-star-and-score {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        margin-left: 2px;
        margin-top: 2px ;
        display: flex;
        overflow: hidden;
        gap: 5px;


    }
    .score-container {
        align-self: center;
        height: fit-content;
        font-family: "Roboto",sans-serif;
    }
    .testimonial-component-for-dsilaying-some-positif-feedback .element-two-of-testimonial-component-for-text-testimo {
        grid-column: 2 / 10;
        grid-row: 4 / 7;
        color: white;
        font-weight: bold;
        text-align: center;
        font-family: "Epunda Slab";
    }
    .testimonial-component-for-dsilaying-some-positif-feedback .element-three-of-testimonial-component-for-expeditor-of-testimon {
        grid-column: 7 / 11;
        grid-row: 9;
        text-align: center;
        font-weight: bold;
        color: white;
        font-family: "Indie Flower";
    }
</style>