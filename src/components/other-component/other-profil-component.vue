<template>
    <section class="col-12 container-for-all-other-profil-to-contact-me">
        <p class="col-9">Que vous souhaitiez simplifier votre gestion quotidienne ou bâtir un projet numérique de A à Z, nous sommes à votre écoute pour transformer vos ambitions en réalité. Chaque grand projet commence par un échange : partagez-nous vos défis, et nous trouverons ensemble la stratégie d’automatisation la plus efficace. Profitez de notre expertise et d'un accompagnement sur mesure pour donner vie à vos solutions, à des tarifs pensés pour votre croissance. Transformons vos idées en systèmes performants dès aujourd'hui.</p>
        <div class="col-8 m-auto container-for-each-element-of-contact-link">
            <each-profil-and-link-to-contact class="col-lg-2 col-3" v-for="value in element.data" :data="value"/>
        </div>   
    </section>
</template>

<script lang="ts" setup>
import type { Social } from '@/data';
import eachProfilAndLinkToContact from '../Small-Component/each-profil-and-link-to-contact.vue';
    const element = defineProps<{data : Social[]}>()

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Epunda+Slab:ital,wght@0,300..900;1,300..900&family=Indie+Flower&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Island+Moments&family=Itim&family=Karma:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
  .container-for-all-other-profil-to-contact-me {
        margin-bottom: 5vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background: linear-gradient(#6060bb,#262672,#050534,#050534,#050534,#262672,#6060bb);
    }
    .container-for-all-other-profil-to-contact-me p {
            padding-top: 1%;
            font-family: 'Epunda Slap';
            font-weight: bold;
            text-align: center;
            color: white;
            margin-bottom: 10vh;
        }
    .container-for-all-other-profil-to-contact-me .container-for-each-element-of-contact-link {
        display: flex;
        gap: 10px;
        justify-content: space-around;

    }
</style>