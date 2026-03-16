<template>
    <section class="col-12 container-which-cover-all-view-screen">
        <div class="col-lg-5 col-11 container-for-little-text-about-not-available-ai-and-some-button">
            <h4 class="text-center fw-bold text-light bg-primary p-1"> Annonces</h4>
            <p class="col-10 m-auto text-center fw-bold text-light">L'agent IA étant en cours de maintenance, nous vous invitons à choisir l'un des choix suivants pour avoir plus d'informations sur nos services et nos offres.</p>
            <p class="col-10 m-auto text-center fw-bold text-light"> Merci de votre compréhension</p>
            <div class="col-11 m-auto d-flex mt-1 mb-1 gap-2 justify-content-center html-element-for-selecting-all-btn">
                <div style="border: 2px solid white;"  class="col-3  p-1 rounded text-center"><a href="mailto:jsdev.web2@gmail.com" target="_blank" class="text-center text-decoration-none text-light fw-bold">Gmail</a></div>
                <div  style="border: 2px solid white;" class="col-3 p-1 rounded text-center"><a href="https://web.facebook.com/profile.php?id=61561678853280" target="_blank" class="text-center text-decoration-none text-light fw-bold">Facebook</a></div>
                <div @click="return_to_initial_value" style="border: 2px solid white;"  class="col-3 p-1 rounded text-center text-light fw-bold">Annuler</div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const modele = defineModel<Boolean>()
    const return_to_initial_value = () => {
        modele.value = false
    }
</script>

<style scoped>
    
    .container-which-cover-all-view-screen {
        height: 100vh;
        width: 100vw;
        position:fixed;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
    }
    .container-which-cover-all-view-screen .container-for-little-text-about-not-available-ai-and-some-button {
        align-self: center;
        height: fit-content;
        border-radius: 10px;
        outline: none;
        overflow: hidden;
        border: 2px solid white;
        background-color:   rgb(3, 3, 36);
        cursor: pointer;
    }
        .container-which-cover-all-view-screen .container-for-little-text-about-not-available-ai-and-some-button .html-element-for-selecting-all-btn div:nth-child(1) {
            background-color: rgb(251, 5, 5);
        }
        .container-which-cover-all-view-screen .container-for-little-text-about-not-available-ai-and-some-button .html-element-for-selecting-all-btn div:nth-child(2) {
            background-color: rgb(32, 32, 176);
        }
    .container-which-cover-all-view-screen .container-for-little-text-about-not-available-ai-and-some-button .html-element-for-selecting-all-btn div:hover {
        background-color: aliceblue;
        color: black !important;
        transform: translateY(-5px);
        transition: 0.5s;
    }
    .container-which-cover-all-view-screen .container-for-little-text-about-not-available-ai-and-some-button .html-element-for-selecting-all-btn div:hover > a {
        color: black !important;
        transition: 0.4s;
    } 
</style>