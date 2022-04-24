<template>
  <Title text="Skills" />
  <ul class="skill-line" v-for="(skill, index) in skills" :key="index">
      <li> {{skill}} </li>
  </ul>
  <!--
  <ul> 
      <li> 
        Hosting Platform:
        <ul>
        <li>Deta</li>
        <li>Heroku</li>
        <li>Netlify</li>
        <li>Vercel</li>
        </ul>
      </li>
  </ul>
  <ul> 
      <li> 
        Web Testing:
        <ul>
        <li>Selenium</li>
        <li>Appium</li>
        </ul>
      </li>
  </ul>

  -->
</template>

<script>
import Title from "@/components/Title.vue";
export default {
  Name: "Skills",
  props:['skills'],
  components: { Title}
};
</script>

<style scoped>
.skill-line {
  display: flex;
}
</style>
