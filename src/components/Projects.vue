<template>
  <Title text="projects" />
  <ul class="project" v-for="(project, index) in projects" :key="index">
      <li > <a  :href="project.link" target="_blank"><span v-html="project.description"> </span></a> </li>
  </ul>
</template>

<script>
import Title from "@/components/Title.vue";
export default {
  Name: "Skills",
  props:['projects'],
  components: { Title}
};
</script>


<style scoped>
li>a{
  color:black;
  text-decoration: none;
}

li>a:hover{
  background-color:rgb(97, 3, 15);
  color: rgb(236, 220, 229);
}
</style>
