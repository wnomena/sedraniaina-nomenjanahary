<template>
    <section class="col-12 d-flex flex-wrap justify-content-around container-for-all-element-of-experiency">
        <each-experiency-element-component v-for="value in element.element" :element="value"/>
    </section>
</template>

<script lang="ts" setup>
import eachExperiencyElementComponent from '../Small-Component/each-experiency-element-component.vue';
import type { Experiency } from '@/data';

    const element = defineProps<{element : Experiency[]}>()
</script>

<style scoped>
    .container-for-all-element-of-experiency {
        margin-top: 5vh;
        gap: 5vh;
        background: linear-gradient(#6060bb,#262672,#262672,#050534,#050534);
    }

</style>