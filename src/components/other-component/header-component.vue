<template>
    <section ref="parent_of_element_to_scroll" class="col-12 presentation-header">
        <div :style="{ 'opacity' : (screen_view.actual_position > 0 && screen_view.available_width < 767) ? 1: 0}"  class="container-for-left-btn-to-left-scroll">
            <img :src="left" alt="" class="col-12 align-self-center image-for-manual-scroll">
        </div>
        <div class="container-to-list-our-service m-auto">
            <each-service-of-automation v-for="[key,value] in list_of_services.list_of_automation.entries()" :key_for_class="('sub-element-for-scroll-').concat(key.toString())" v-model="reference_bi_directional" :element="value" />
            <each-service-of-automation v-for="[key,value] in list_of_services.list_of_dev.entries()" key_for_class="sub-element-for-scroll-2" v-model="reference_bi_directional" :element="value" />    
        </div>
        <div :style="{'opacity' : (screen_view.actual_position < 2 && screen_view.available_width < 767) ? 1 : 0}" class="container-for-right-btn-to-right-scroll">
            <img :src="right" alt="" class="col-12 align-self-center image-for-manual-scroll">
        </div>
    </section>
</template>

<script lang="ts" setup>
import left from "@/assets/Portfolio/left-arrow.png"
import right from "@/assets/Portfolio/right-arrow.png"
import type { ServiceType } from '@/data';
import eachServiceOfAutomation from "@/components/Small-Component/each-service-of-automation.vue";
import { onMounted, ref, type Ref } from "vue";
    const parent_of_element_to_scroll:Ref<HTMLElement | null> = ref(null)
    const screen_view = ref({
        available_width : window.innerWidth,
        actual_position : 0
    })
    onMounted(() => {
        screen_view.value.actual_position = screen_view.value.available_width < 767 ? 0 : screen_view.value.available_width <= 986 ? 1 : 2
        const available_element = parent_of_element_to_scroll.value as unknown as HTMLElement
        if(available_element) {

            available_element.querySelector(".container-for-left-btn-to-left-scroll")?.addEventListener("click",function () {
                if(screen_view.value.actual_position > 0) {
                    screen_view.value.actual_position -= 1
                    available_element.querySelector(`.container-to-list-our-service #sub-element-for-scroll-${screen_view.value.actual_position}`)?.scrollIntoView({
                        behavior : "smooth",
                        inline : "end",
                        block : "center"
                    })
                }
            });


            available_element.querySelector(".container-for-right-btn-to-right-scroll")?.addEventListener("click",function () {
                if(screen_view.value.actual_position < 2) {
                    screen_view.value.actual_position += 1
                    available_element.querySelector(`.container-to-list-our-service #sub-element-for-scroll-${screen_view.value.actual_position}`)?.scrollIntoView({
                        behavior : "smooth",
                        inline : "end",
                        block : "center"
                    })
                }
            });
        }
    })
    const text = "Une collaboration exemplaire. L'intervenant a su comprendre nos enjeux métier très rapidement et a livré une solution parfaitement fonctionnelle qui a radicalement changé notre manière de travailler. Professionnalisme et rigueur étaient au rendez-vous."
    const exp = "Jenny"
    const reference_bi_directional = defineModel<Boolean>()
    const list_of_services = defineProps<{list_of_automation : ServiceType[],list_of_dev : ServiceType[]}>()
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Epunda+Slab:ital,wght@0,300..900;1,300..900&family=Indie+Flower&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Island+Moments&family=Itim&family=Karma:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    .presentation-header {
        height: 100vh;
        padding-top: 5vh;
        display: grid;
        grid-template-columns: repeat(10,1fr);
        grid-template-rows: 1fr;
        background: linear-gradient(#050534,#050534,#050534,#262672,#6060bb);
        outline: none;
        overflow-y: hidden;
        overflow-x: scroll;
    }
    .presentation-header .container-for-left-btn-to-left-scroll {
        grid-column: 2 / 3;
        grid-row: 1;
        z-index: 3;
        display: flex;

    } 
    .presentation-header .container-for-right-btn-to-right-scroll {
        grid-column: 9 / 10;
        grid-row: 1;
        z-index: 3;
        display: flex;

    } 
    .presentation-header .container-to-list-our-service {
        grid-column: 2 / 10;
        grid-row: 1;
        display: flex;
        gap: 10px;
        overflow: scroll;
        outline: none;
    }
    .image-for-manual-scroll {
        background-color: rgba(255, 255, 255,0.4);
        margin: 2px;
        border-radius: 15px;
        border: 2px solid blueviolet;
        cursor: pointer;
    }
    @media only screen and (min-width : 750px) {
    .presentation-header .container-for-left-btn-to-left-scroll {
        grid-column: 2 / 3;
        grid-row: 1;
        z-index: 3;

    } 
    .presentation-header .container-for-right-btn-to-right-scroll {
        grid-column: 9 / 10;
        grid-row: 1;
        z-index: 3;

    }
        .presentation-header .container-to-list-our-service {
        display: flex;
        gap: 10px;
       height: 70%;
       overflow-x: visible;
        grid-column: 2 / 10;
    }
    }
</style>