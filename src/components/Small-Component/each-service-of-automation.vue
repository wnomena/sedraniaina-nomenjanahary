<template>
    <section :id="key_for_class" class="col-lg-4 col-md-6 col-11 section-for-representing-element-of-service">
        <div class="col-12 just-for-quick mt-2">
            <div class="col-lg-6 col-8 m-auto container-link-for-aos" @click="function_">Plus</div>
            <div class="col-10 m-auto text-center text-light description">{{ element.element.description }}</div>
            <div class="col-11 m-auto p-2 d-flex flex-wrap container-for-each-image-of-representation justify-content-center gap-1">
                <img v-for="value in element.element.list_of_image" class="rounded" :src="(value.img as HTMLImageElement).src" alt="">
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import type { ServiceType } from '@/data';

    const element  = defineProps<{key_for_class:string,element : ServiceType}>()
    const bi_directionnal_props = defineModel<Boolean>()
    console.log(bi_directionnal_props.value)
    const function_ = () => bi_directionnal_props.value = true
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Epunda+Slab:ital,wght@0,300..900;1,300..900&family=Indie+Flower&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Island+Moments&family=Itim&family=Karma:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Epunda+Slab:ital,wght@0,300..900;1,300..900&family=Indie+Flower&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Island+Moments&family=Itim&family=Karma:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    .section-for-representing-element-of-service{
        margin-bottom: 3%;

        background: linear-gradient(#6060bb,#262672,#050534,#050534,#050534);
    }
    .section-for-representing-element-of-service .just-for-quick .description {
        font-family:  "Epunda Slab";
    }
    .section-for-representing-element-of-service .just-for-quick .container-link-for-aos  {
        align-self: center;
        padding: 3px 5px;
        text-decoration: none;
        font-weight: bold;
        font-size: 20px;
        height: fit-content;
        background-color: #041345;
        text-align: center;
        border-radius: 10px;
        color: white;
        border: 1px solid;
        transition: 0.2s;
        cursor: pointer;
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .section-for-representing-element-of-service .just-for-quick .container-link-for-aos a {
        color: white;
    }
    .section-for-representing-element-of-service .just-for-quick .container-link-for-aos:hover > a {
        color: #041345;
    }
    .section-for-representing-element-of-service .just-for-quick .container-link-for-aos:hover {
        background-color: #fff;
        color: #041345;
        transform: translateY(-20%);
        transition: 0.5s;
    }
    .section-for-representing-element-of-service .just-for-quick .container-for-each-image-of-representation img {
        width: 20% !important;
        height: 3rem;
    }
    @media only screen and (max-width : 370px) {
        img {
            display: none;
        }  
    }
</style>