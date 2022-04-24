<template>
<div class="container">
    <div class="company-duration">
        <h3>{{job.company}}</h3> <span>{{job.duration}}</span>
    </div>
  <div class="designation">
    <h4 class="job-title">{{job.designation}}</h4>
  </div>
  <div class="achievements">
    <p>Achievements:</p>
      <ul class="heading" v-for="(achievements,index) in job.achievements" :key="index">
       <li>{{ achievements }} </li>
      </ul>
  </div>
</div>
</template>


<script>
export default {
    props:['job'],
    name:'Work'
}
</script>

<style scoped>
.container{
    margin-bottom:30px;
}
.company-duration{
  display:flex;
  justify-content:space-between ;
  align-items:center;
}

.job-title{
    color:rgb(190, 57, 8);
}
</style>