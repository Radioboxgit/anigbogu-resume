<template>
<div class="container">
  <h1>Education</h1>
  <h4> {{ education.degreeTitle }}: </h4>
  <p class="school-name">{{ education.institutionName }}      -2013</p>
  <p>{{education.studyDirection }}</p>
</div>
</template>

<script>
export default {
  Name: "Education",
  props:['education']
};
</script>

<style scoped>
p{
  
  margin:4px;
}

h1{
  font-size: 18px;
  letter-spacing: 6px;
  margin: 0 0 1em 0;
  text-transform: uppercase;
}
</style>
