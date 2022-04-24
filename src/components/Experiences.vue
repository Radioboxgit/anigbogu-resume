<template>
<div class="template">
  <h1 class="title">
      work experience
  </h1>
  <div class="template" v-for="(experience,index) in experiences" :key="index">
    <Work :job="experience" />
  </div>
</div>
</template>

<script>
import Work from "./Work.vue";
export default {
  Name: "Experiences",
  props:['experiences'],
  components:{ Work }

};
</script>

<style scoped>
.title{
  font-size: 18px;
  letter-spacing: 6px;
  margin: 0 0 1em 0;
  text-transform: uppercase;
}

</style>
