<template>
    <section class="component-to-talk-about-the-problem-and-one-testimonial">
        <div class="element-of-container-to-list-some-problem col-lg-4 col-12">
            <div class="col-12 container-to-list">
                <p class="ms-lg-5 ms-md-5">La répétition est souvent synonyme de perte de productivité. Chaque heure passée à effectuer manuellement une tâche automatisable est une heure de perdue pour votre développement. Notre mission est de transformer cette complexité en simplicité : nous créons des outils sur-mesure et des automates intelligents qui sécurisent vos données et accélèrent vos flux de travail. Choisir l'automatisation avec nous, c'est faire le choix de l'optimisation : réduire la charge mentale de vos équipes pour leur permettre de se consacrer exclusivement aux missions à haute valeur ajoutée.</p>
            </div>
        </div>
        <div class="col-lg-6 col-12 container-for-testimonial d-flex justify-content-lg-end">
            <testimonialComponent class="rounded" :text="text" :exp="exp" />   
        </div>
    </section>
</template>

<script lang="ts" setup>
    import testimonialComponent from '../Small-Component/testimonial-component.vue';
    const text = "Efficace et technique. Sedraniaina a su transformer nos besoins complexes en une application web rapide et intuitive. La communication a été fluide tout au long du projet, et le résultat final (une application CRUD sur mesure) dépasse nos attentes initiales."
    const exp = "Ny Fitia"
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Epunda+Slab:ital,wght@0,300..900;1,300..900&family=Indie+Flower&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Island+Moments&family=Itim&family=Karma:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    @media only screen and (min-width: 992px) {
    .component-to-talk-about-the-problem-and-one-testimonial {
        height: 70vh;
        width: 100vw;
        display: flex;
        margin-top: 5vh;
        margin-bottom: 10vh;
        justify-content: space-between;
    }
    .component-to-talk-about-the-problem-and-one-testimonial .element-of-container-to-list-some-problem {
        display: flex;
        font-family: 'Epunda Slab';
        font-weight: bold;
        color: white;
        background: linear-gradient(90deg,#050534,#6060bb,#6060bb,transparent);
        margin: 10px;
    }
    .component-to-talk-about-the-problem-and-one-testimonial:hover > .element-of-container-to-list-some-problem {
        background: linear-gradient(90deg,#050534,#050534,#262672,#6060bb,transparent);
    }
    .component-to-talk-about-the-problem-and-one-testimonial .element-of-container-to-list-some-problem .container-to-list {
        align-self: center;
    }
    }
    @media only screen and (max-width: 991px) {
    .component-to-talk-about-the-problem-and-one-testimonial {
        width: 100vw;
        margin-top: 5vh;
        margin-bottom: 10vh;
        display: block;
    }
        .component-to-talk-about-the-problem-and-one-testimonial .element-of-container-to-list-some-problem {
        display: flex;
        font-family: 'Epunda Slab';
        font-weight: bold;
        color: white;
    }
    .component-to-talk-about-the-problem-and-one-testimonial .element-of-container-to-list-some-problem .container-to-list {
        text-align: center;
    }
    .component-to-talk-about-the-problem-and-one-testimonial .container-for-testimonial {
        height: 50vh;
    }
    }

</style>