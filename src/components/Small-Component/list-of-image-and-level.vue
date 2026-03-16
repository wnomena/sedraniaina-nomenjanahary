<template>
    <section class="col-11 image-and-level-container d-flex flex-nowrap border">
        <img style="z-index: 2;" class="col-4" :src="element.img" alt="">
        <div  class="col-10 container-for-tech-level">
            <div :style="{ 'width' : `${width_of_container_talent}%`}" ref="width_of_container_talent_as_element" class="div-to-contain-level-like-an-reactive-element "></div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import {  computed, ref } from 'vue';
    const element = defineProps<{img: string,talent:number,event:number,scroll:number}>()
    let width_of_container_talent = computed(() => {
        if(element.scroll < element.event) {
            if(element.event - element.scroll < 50) {
               return element.talent
            } else return 5;
        }else if(element.scroll > element.event) {
            if(element.scroll - element.event  < 50) {
                return element.talent
            } else return 5
        }
    })
</script>

<style scoped>
    section {
        height: 7vh;
        margin-top: 5px;
        margin-left: 10px;
    }
    section > img {
        border-radius: 5px;
    }
    section .container-for-tech-level {
        margin-left: 5px;
        border-radius: 5px;
        border: 1px solid;
        background-color: gray;
        width: 100%;

    }
    section .container-for-tech-level .div-to-contain-level-like-an-reactive-element {
        height: 100%;
        border-radius: 5px;
        width: 0;
        display: block;
        transition: 2s;
        background-color: rgb(9, 9, 138);
    }
</style>