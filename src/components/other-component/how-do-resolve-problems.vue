<template>
    <section class="component-to-talk-about-the-problem-and-one-testimonial">
        <div class="col-lg-6 col-12 container-for-testimonial d-flex justify-content-lg-end">
            <testimonialComponent  :text="text" :exp="exp" />   
        </div>
        <div class="element-of-container-to-list-some-problem col-lg-4 col-12">
            <div class="col-12 container-to-list">
                <p class="ms-lg-5 ms-md-5">Nous ne nous contentons pas de coder : nous concevons les moteurs de votre productivité. Pour transformer vos flux de travail manuels en systèmes fluides, nous nous appuyons sur un arsenal de technologies modernes et éprouvées. Que ce soit par la puissance de Python pour le traitement de données, la flexibilité du JavaScript pour vos interfaces, ou l'agilité des écosystèmes Google Cloud et autre, nous choisissons toujours l'outil le plus performant pour votre besoin spécifique.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import testimonialComponent from '../Small-Component/testimonial-component.vue';
    const text = "Nous avions besoin d'une solution d'automatisation robuste et auto-hébergée. Il a mis en place un environnement Docker avec n8n parfaitement configuré. Les flux de données entre notre CRM et nos outils internes sont désormais fluides et sans erreur. Un vrai travail de pro sur l'infrastructure."
    const exp = "Entreprise anonyme"
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