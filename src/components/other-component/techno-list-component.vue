<template>
    <section class="col-12 container-to-separate-two-section-of-infinite-scroll">
        <div class="left-side-for-linear-gradient-left-to-right"></div>
        <div  ref="element_to_scroll_left" class="left-to-right-infinite-caroussel">
            <div v-for="[key,value] in reference_for_these_element.entries()" :class="('col-2 each-element-redimentionned-').concat(key.toString())">
                <each-image-for-infinite-caroussel :child_key="key.toString()" :img="(value.img as HTMLImageElement)"/>
            </div>    
        </div>
        <div class="right-side-for-linear-gradient-left-to-right"></div>
        <div class="left-side-for-linear-gradient-right-to-left"></div>
        <div class="right-to-left-infinite-caroussel">
            <div v-for="[key,value] in reference_for_these_element.entries()" class="col-2 each-element-redimentionned">
                <each-image-for-infinite-caroussel :child_key="key.toString()" :img="(value.img as HTMLImageElement)"/>
            </div>    
        </div>
        <div class="right-side-for-linear-gradient-right-to-left"></div>
    </section>
</template>

<script lang="ts" setup>
    import { onMounted, ref, type Ref } from 'vue';
import eachImageForInfiniteCaroussel from '../Small-Component/each-image-for-infinite-caroussel.vue';
    import { type AllStaticMode } from '@/data';
    const data = defineProps<{all_data_for_automation:AllStaticMode[],all_data_for_code : AllStaticMode[]}>()
    const reference_for_these_element:Ref<AllStaticMode[]> = ref([...data.all_data_for_automation,...data.all_data_for_code])
    const element_to_scroll_left:Ref<HTMLElement | null> = ref(null)
    const artificial_scroll = ref({
        first  : 1,
        second : 2
    })
    onMounted(() => {
        element_to_scroll_left.value = (element_to_scroll_left.value as unknown as HTMLElement)
    })
</script>

<style scoped>
        .container-to-separate-two-section-of-infinite-scroll {
            display: grid;
            grid-template-columns: repeat(10,1fr);
            grid-template-rows: repeat(3,1fr);
        }
    .container-to-separate-two-section-of-infinite-scroll  .left-side-for-linear-gradient-left-to-right {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        z-index: 2;
        background: linear-gradient(90deg,#6060bb,#6060bb,#6060bb,#6060bb,rgba(96, 96, 187,0.5),transparent);
    }
    .container-to-separate-two-section-of-infinite-scroll .right-side-for-linear-gradient-left-to-right {
        grid-column: 9 / 11;
        grid-row: 1 / 2;
        z-index: 2;
        background: linear-gradient(90deg,transparent,rgba(96, 96, 187,0.5),#6060bb,#6060bb,#6060bb,#6060bb);
    }
    .container-to-separate-two-section-of-infinite-scroll .left-to-right-infinite-caroussel {
        display: flex;
        gap: 4px;
        margin-top: 5vh;
        margin-bottom: 5vh;
        grid-row: 1 / 2;
        grid-column: 2 / 10;
        overflow-x: hidden;
        outline: none;
        z-index: -1;
        transition: 1s;


    }
    .container-to-separate-two-section-of-infinite-scroll .left-side-for-linear-gradient-right-to-left {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        z-index: 2;
        background: linear-gradient(90deg,#6060bb,#6060bb,#6060bb,#6060bb,rgba(96, 96, 187,0.5),transparent);
    }
    .container-to-separate-two-section-of-infinite-scroll .right-to-left-infinite-caroussel {
        display: flex;
        grid-row: 2 / 3;
        grid-column: 2 / 10;
        gap: 4px;
        margin-top: 5vh;
        flex-direction: row-reverse;
        outline: none;
        overflow: hidden;

    }
    .container-to-separate-two-section-of-infinite-scroll .right-side-for-linear-gradient-right-to-left {
        grid-column: 9 / 11;
        grid-row: 2 / 2;
        z-index: 2;
        background: linear-gradient(90deg,transparent,rgba(96, 96, 187,0.5),#6060bb,#6060bb,#6060bb,#6060bb);
    }

</style>