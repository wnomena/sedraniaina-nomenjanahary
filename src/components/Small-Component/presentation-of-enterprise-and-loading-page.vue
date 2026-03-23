<template>
    <section class="col-12 container-for-presentation-for-all-screen-during-loadding">
        <div class="col-lg-8 col-md-10 col-11 m-auto container-for-each-element-of-presentation text-center rounded border p-2">
            <h3 class="fw-bold text-light text-center">🚀 Lambda Coder : Vos processus, en mode pilote automatique.</h3>
            <span class="col-12 text-container-to-contain-strong-text text-center text-light">
                Bonjour ! 👋 Nous sommes Lambda Coder, un cabinet de conseil et de réalisation spécialisé dans l’<strong class="fw-bold" >optimisation de la performance opérationnelle </strong> ⚙️. <br>
            </span>
            <span class="col-12 text-container-to-contain-strong-text text-center text-light">
                Notre métier ? Transformer la façon dont les indépendants, les professionnels libéraux et les PME gèrent leur quotidien. Comment ? En éliminant les tâches manuelles et répétitives qui freinent votre croissance 🧱➡️💨.
            </span>
            <h4 class="fw-bold text-light text-center">✨ Notre Mission : Vous rendre votre bien le plus précieux... votre TEMPS.</h4>
            <span class="col-12 text-center text-light">
                L’automatisation ? Ce n'est pas QUE pour les géants de la tech ! 🤖🏢 <br><br>
Soyons réalistes : vous perdez chaque jour des heures sur des tâches sans valeur ajoutée ⏱️💸. Notre mission est de vous libérer de ce fardeau. Nous créons pour vous des <strong> systèmes autonomes </strong> qui bossent en arrière-plan, 24h/24, sans erreur et sans fatigue 🌙☕️.
            </span> <br><br>
            <h3 class="text-light text-center fw-bold">🛠️ Nos Super-Pouvoirs : Où on intervient ?</h3>
            <div class="col-12 text-start text-light">
            <span class="col-12">On automatise les pans essentiels de votre activité :</span><br><br>
            <span class="col-12"><strong>1️⃣ Relation Client Intelligente 🤝💬 </strong> Imaginez des assistants intelligents capables d’accueillir, de répondre et de qualifier vos prospects instantanément, même pendant votre sommeil 😴💤. Vos clients sont pris en charge 24/7, sans effort de votre part.</span><br><br>
            <span class="col-12"><strong>2️⃣ Administration & Finance Autonomes</strong> 📊💶 Factures, devis, relances ? C’est de l’histoire ancienne 📜🔥. Vos paiements sont suivis et vos clients relancés automatiquement, sans que vous n’ayez à lever le petit doigt. La tranquillité d'esprit financière !</span><br><br>
            <span class="col-12"><strong>3️⃣ Organisation des Flux & Données </strong> 📂🔍 Fini le chaos des fichiers ! Nous structurons vos documents pour qu’ils se classent et s’analysent tout seuls. Vous obtenez une vision claire et en temps réel de votre activité, comme un vrai tableau de bord ✈️📈.</span>
            </div>
            <h5 class="text-center fw-bold text-light">🤔 Pourquoi choisir Lambda Coder ?</h5>
            <div class="col-lg-10 col-12 m-auto">
                <ul class="text-light">
                    <li><strong>Vitesse d’exécution 😎⚡</strong> : Vos solutions sont opérationnelles en quelques jours seulement. On aime quand ça dépote !</li>
                    <li><strong>Intégration Invisible 🤫👍</strong> : Pas besoin de tout réapprendre. On booste vos outils actuels, votre environnement devient juste plus malin.</li>
                    <li><strong>Rentabilité Immédiate 💰👏</strong> : En libérant jusqu’à 5 heures de travail par semaine (imaginez tout ce que vous pouvez faire !), nos services sont généralement rentabilisés dès le premier mois.</li>
                </ul>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <div @click="hide_component_function" style="cursor: pointer;" class="col-lg-4 col-md-6 col-8 rounded p-1 border bg-primary text-light fw-bold">{{text}}</div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
    const hide_component = defineModel<Boolean>()
    const text:Ref<"Continuer" | "Chargement..."> = ref("Continuer")
    const hide_component_function = () => {
        text.value = "Chargement..."
        hide_component.value = false
    }
</script>

<style scoped>
    .container-for-presentation-for-all-screen-during-loadding {
        z-index: 5;
        position: fixed;
        top: 12vh;
        left: 0;
        height: 80vh;
        overflow-y: scroll;
    }
    .container-for-presentation-for-all-screen-during-loadding .container-for-each-element-of-presentation {
        overflow-y: scroll;
        background: linear-gradient(#6060bb,#262672,#050534,#050534,#050534);
    }

</style>