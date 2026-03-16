<template>
    <section class="col-12 container-to-do-quickly-all-style-of-element">
        <div class="col-lg-6 col-12 m-auto container-for-one-image-and-little-presentation-of-my-person">
            <div class="col-12 description-for-grid-layout ">
                <p class="col-12">Dans cet interstice, chaque détail compte, chaque ligne de force est une intention, et chaque silence visuel est une respiration nécessaire. C’est dans cette recherche constante de l’équilibre que nous transformons la complexité brute en une clarté évidente, rendant le futur accessible dès aujourd’hui."</p>
            </div>
        </div>
        <div class="col-12 container-to-simulate-grid-to-ajust-all-element">
            <div class="div-for-image">
                <img :src="lnk" alt="">
            </div>
            <div class="container-for-status">
                <h2 class="text-center">SEDRANIAINA NOMENJANAHARY</h2>
                <h4 class="text-center">Développeur Python | JavaScript | Automatisation</h4>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import lnk from "@/assets/Portfolio/lnk.png"
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Epunda+Slab:ital,wght@0,300..900;1,300..900&family=Indie+Flower&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Island+Moments&family=Itim&family=Karma:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
@media only screen and (max-width : 500px) {
        .container-for-one-image-and-little-presentation-of-my-person {
        font-family: "Epunda Slab";
        text-align: center;
        color: white;
    }
    .container-to-do-quickly-all-style-of-element .container-to-simulate-grid-to-ajust-all-element {
        height: 100vw;
        display: grid;
        grid-template-columns: repeat(11,1fr);
        grid-template-rows: repeat(10,1fr);
    }
    .container-to-do-quickly-all-style-of-element .container-to-simulate-grid-to-ajust-all-element .div-for-image {
        grid-row: 1 / 6;
        grid-column: 4 / 9;
    }
    .container-to-do-quickly-all-style-of-element .container-to-simulate-grid-to-ajust-all-element .div-for-image img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
    .container-to-do-quickly-all-style-of-element .container-to-simulate-grid-to-ajust-all-element .container-for-status {
        grid-row: 6 / 7;
        grid-column: 1 / 12;
        color: white;
        font-family: "Epunda Slab";
    }
}
@media only screen and (min-width : 500px) {

        .container-for-one-image-and-little-presentation-of-my-person {
        font-family: "Epunda Slab";
        text-align: center;
        color: white;
    }
    .container-to-do-quickly-all-style-of-element .container-to-simulate-grid-to-ajust-all-element {
        height: 40vw;
        display: grid;
        grid-template-columns: repeat(11,1fr);
        grid-template-rows: repeat(5,1fr);
    }
    .container-to-do-quickly-all-style-of-element .container-to-simulate-grid-to-ajust-all-element .div-for-image img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
    .container-to-do-quickly-all-style-of-element .container-to-simulate-grid-to-ajust-all-element .container-for-status {
        grid-row: 4 / 5;
        grid-column: 1 / 12;
        color: white;
        font-family: "Epunda Slab";
    }
    .container-to-do-quickly-all-style-of-element .container-to-simulate-grid-to-ajust-all-element .div-for-image {
        grid-row: 1 / 4;
        grid-column: 5 / 8;
    }
}
</style>