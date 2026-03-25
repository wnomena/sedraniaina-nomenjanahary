<script setup lang="ts">
import headerComponent from '@/components/other-component/header-component.vue';
import technoListComponent from "@/components/other-component/techno-list-component.vue";
import infiniteCarousselForTool from './components/other-component/infinite-caroussel-for-tool.vue';
import experiencyComponent from './components/other-component/experiency-component.vue';
import otherProfilComponent from './components/other-component/other-profil-component.vue';
import displayAiTemporarlyNotAvailable from './components/Small-Component/display-ai-temporarly-not-available.vue';
import essenceOfSedraniainaAsAutomationDevelopper from './components/other-component/essence-of-sedraniaina-as-automation-developper.vue';
import howDoResolveProblems from './components/other-component/how-do-resolve-problems.vue';
import specialOffreForEveryone from './components/other-component/special-offre-for-everyone.vue';
import presentationComponent from './components/other-component/presentation-component.vue';
import presentationOfEnterpriseAndLoadingPage from './components/Small-Component/presentation-of-enterprise-and-loading-page.vue';
import { All_static_Data, Props_For_Scroll } from './class';
import { onMounted, ref } from 'vue';
  const reactive_data = ref({
    bool : false,
    reference : false,
    loading : true,
    blur_efect_by_user : true
  })
  const Scroll_Event = new Props_For_Scroll()
  const all_static_Data = new All_static_Data()
  window.addEventListener('scroll',() => {
    Scroll_Event.set_value(window.scrollY)
  })
    all_static_Data.loading()
    setTimeout(() => {
      reactive_data.value.bool = true
    },3000)
  onMounted(() => {
    window.addEventListener("load",() => {
      reactive_data.value.loading = false
    })
  })
</script>

<template>
  <section v-if="reactive_data.bool" class="container-for-all-element">
    <presentation-of-enterprise-and-loading-page v-if="reactive_data.blur_efect_by_user || reactive_data.loading" v-model="reactive_data.blur_efect_by_user" />
    <display-ai-temporarly-not-available v-if="reactive_data.reference" v-model="reactive_data.reference"/>
    <section :style="{'filter' : `blur(${(reactive_data.reference || reactive_data.loading || reactive_data.blur_efect_by_user) ? '20px' : '0px'})`}" class="for-blur-all-element-except-one col-12">
      <header-component v-model="reactive_data.reference" :list_of_automation="all_static_Data.all_service_and_image_loaded_for_automation.value" :list_of_dev="all_static_Data.all_service_and_image_loaded_for_dev_solution.value" :reference="reactive_data.reference" />
      <other-profil-component :data="all_static_Data.all_image_and_name_for_social.value"/>
      <essence-of-sedraniaina-as-automation-developper/>
      <special-offre-for-everyone/>
      <how-do-resolve-problems/>
      <techno-list-component :all_data_for_automation="all_static_Data.all_data_for_automation.value" :all_data_for_code="all_static_Data.all_data_for_language.value" />
      <presentation-component/>
      <experiency-component :element="all_static_Data.all_experiency_tech_or_no.value"/>
    </section>
    <infinite-caroussel-for-tool :all_element_of_caroussel="all_static_Data.infinite_caroussel.value" />
  </section>
</template>
<style scoped>
  .container-for-all-element .for-blur-all-element-except-one {
    transition: 1s;
  }
</style>
