<template>
<div> 
  <h1 class="title">profile</h1>
  <p class="description" > {{ profile }} </p>
</div>
</template>

<script>
export default {
  name: "Profile",
  props:['profile'],
};
</script>


<style scoped>
.title{
  font-size: 18px;
  letter-spacing: 6px;
  margin: 0 0 1em 0;
  text-transform: uppercase;
}

.description{
  display:inline-block;
  line-height: 19px;
  margin: 2px;
  font-size: 16px;
  color: #080808;
}
</style>