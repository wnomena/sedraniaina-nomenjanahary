<template>
    <section class="container-to-contain-Google-WorkSpace-Image-and-offer-description col-12">
        <div class="m-auto container-for-GW-image-and-some-text col-8">
            <img :src="Gw" alt="" class="col-lg-8 col-10 rounded">
        </div>
        <div class="m-auto container-to-contain-text-and-button-to-contact-directy">
           <p class="col-lg-8 col-10 text-center mt-4">Propulsez votre productivité en transformant vos outils Google Workspace en véritables moteurs d'automatisation grâce à notre expertise Google Apps Script. Nous concevons des scripts sur mesure pour connecter vos données et éliminer définitivement vos tâches manuelles les plus chronophages. Contactez-nous dès aujourd'hui pour une analyse gratuite de vos besoins.</p>
            <div class="col-12 button-container-to-try-completing-element">
                <div class="col-lg-4 col-6 btn-for-btn-hover m-auto"><a class="col-12 text-decoration-none text-light text-center" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd9fBTNkqL0x3f-dh2mi4_ba1DxevfkOgXEw0F4XCUDM8GFXw/viewform?usp=header">Discutons de votre projet</a></div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import Gw from "@/assets/Portfolio/GW.png"

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Epunda+Slab:ital,wght@0,300..900;1,300..900&family=Indie+Flower&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Island+Moments&family=Itim&family=Karma:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+DK+Uloopet+Guides&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Epunda+Slab:ital,wght@0,300..900;1,300..900&family=Indie+Flower&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Island+Moments&family=Itim&family=Karma:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
   .container-to-contain-Google-WorkSpace-Image-and-offer-description {
    background: linear-gradient(#6060bb,#262672,#262672,#050534,#050534,#262672,#262672,#6060bb);
   }
.container-to-contain-Google-WorkSpace-Image-and-offer-description .container-for-GW-image-and-some-text {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
   }
   .container-to-contain-Google-WorkSpace-Image-and-offer-description .container-to-contain-text-and-button-to-contact-directy {
    font-family: "Epunda Slab"; 
    font-weight: bold;
    display: flex;
    justify-content: center;
    color: white;
    flex-wrap: wrap;
   }
   .container-to-contain-Google-WorkSpace-Image-and-offer-description .container-to-contain-text-and-button-to-contact-directy .button-container-to-try-completing-element .btn-for-btn-hover {
    font-family: "Montserrat";
    padding: 5px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background-color: #041345;
    border: 2px solid white;
        transition: 0.5s;
   }
   .container-to-contain-Google-WorkSpace-Image-and-offer-description .container-to-contain-text-and-button-to-contact-directy .button-container-to-try-completing-element .btn-for-btn-hover:hover {
    background-color: white;
    color: #041345 !important;
    transform: translateY(-10px);
    transition: 1s;
   }
   .container-to-contain-Google-WorkSpace-Image-and-offer-description .container-to-contain-text-and-button-to-contact-directy .button-container-to-try-completing-element .btn-for-btn-hover:hover > a  {
    color: #041345 !important;
    transition: 1s;
   }
</style>