<template>
    <section class="col-12  container-for-slide-css-infinite-carrousel">
        <div ref="element_to_scroll" class="col-10 m-auto v-for-container-for-all-element-of-caroussel">
            <each-image-for-infinite-caroussel v-for="[key,element] in reference_for_infinite_caroussel.entries()" :child_key="key.toString()" :img="(element.img as HTMLImageElement)"/>
        </div>
        <div class="presentation-of-my-person">
            <strong>BY SEDRANIAINA NOMENJANAHARY</strong>
            <p class="m-0">Expert en automatisation</p>
            <p class="m-0">Dévelopeur Python et JavaScript</p>
        </div>
    </section>
</template>

<script lang="ts" setup>
import type { Infinite_Caroussel } from '@/data';
import eachImageForInfiniteCaroussel from '../Small-Component/each-image-for-infinite-caroussel.vue';
import { onMounted, ref, type Ref } from 'vue';
    const infinite_caroussel_reference = ref(1)
    const { all_element_of_caroussel } = defineProps<{all_element_of_caroussel : Infinite_Caroussel[]}>()
    const reference_for_infinite_caroussel:Ref<Infinite_Caroussel[]> = ref([...all_element_of_caroussel,...all_element_of_caroussel])
    const element_to_scroll = ref(null)
    onMounted(() => {
        let reference = element_to_scroll.value as unknown as HTMLElement
        console.log(reference)
        setInterval(() => {
            const class_of_element_where_i_want_to_scroll = reference.querySelector(`.element-of-caroussel-${infinite_caroussel_reference.value.toString()}`)
            if(class_of_element_where_i_want_to_scroll) {
                class_of_element_where_i_want_to_scroll.scrollIntoView({
                    behavior: "smooth",
                    inline : 'start',
                    
                    
                })
                infinite_caroussel_reference.value += 1
                if(infinite_caroussel_reference.value % 5 == 0) {
                    reference_for_infinite_caroussel.value.push(...all_element_of_caroussel)
                }
            }
        }, 2000);

    })
</script>

<style scoped>
    @media only screen and (min-width:700px){
    .container-for-slide-css-infinite-carrousel {
        padding: 15px 0;
        position: fixed;
        top: 0px;
        z-index: 10;
        background: linear-gradient(#050534,#050534,#262672,transparent,transparent);
        display: grid;
        grid-template-columns: repeat(10,1fr);
        grid-template-rows: 1;
    }
    .container-for-slide-css-infinite-carrousel .v-for-container-for-all-element-of-caroussel {
        display: flex;
        flex-wrap: nowrap;
        gap: 5px;
        z-index: 3;
        overflow-x: scroll;
        scrollbar-width: 0px;
        grid-row: 1;
        grid-column: 1 / 2;
    }
    .container-for-slide-css-infinite-carrousel .presentation-of-my-person {
        grid-row: 1;
        grid-column: 2 / 7;
        color: white;
    }
    .container-for-slide-css-infinite-carrousel .container-for-slide-css-infinite-carrousel::-webkit-scrollbar-button,::-webkit-scrollbar {
    display: none;
}
        
    }
    @media only screen and (max-width:700px) {
        .container-for-slide-css-infinite-carrousel {
        padding: 15px 0;
        position: fixed;
        top: 0px;
        z-index: 10;
        background: linear-gradient(#050534,#050534,#262672,transparent,transparent);
        display: grid;
        grid-template-columns: repeat(10,1fr);
        grid-template-rows: 1;
    }
    .container-for-slide-css-infinite-carrousel .v-for-container-for-all-element-of-caroussel {
        display: none;
        flex-wrap: nowrap;
        gap: 5px;
        z-index: 3;
        overflow-x: scroll;
        scrollbar-width: 0px;
        grid-row: 1;
        grid-column: 1 / 2;
    }
    .container-for-slide-css-infinite-carrousel .presentation-of-my-person {
        grid-row: 1;
        grid-column: 1 / 11;
        color: white;
    }
    .container-for-slide-css-infinite-carrousel .container-for-slide-css-infinite-carrousel::-webkit-scrollbar-button,::-webkit-scrollbar {
    display: none;
}
    }
</style>