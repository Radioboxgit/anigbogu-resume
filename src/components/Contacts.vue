<template>
<div> 
  <h1> contacts </h1>
  <div class="contact">
    <p> <font-awesome-icon class="location" icon="map-marker" />   {{ contacts.location}} </p>
    <p> <font-awesome-icon class="phone" icon="phone" />   {{ contacts.phone}} </p>
    <p> <font-awesome-icon  class="email" icon="envelope" />   {{ contacts.email}}</p>
    <p> <font-awesome-icon :icon="['fab', 'github']" /><a  class="github" target="_blank" :href="contacts.github" >{{ contacts.github}}</a></p>
    <p> <font-awesome-icon class="globe" icon="globe" />   <a  target="_blank" :href="contacts.website" >{{ contacts.website}} </a></p>
    <p> <font-awesome-icon class="twitter" :icon="['fab', 'twitter']" />   <a target="_blank" href="https://twitter.com/AnigboguNedu" >{{ contacts.twitter}} </a></p>
    <p> <font-awesome-icon color="blue" :icon="['fab', 'linkedin']" />   <a class="linkedin-text" target="_blank" :href="contacts.linkedin" >{{ contacts.linkedin}} </a></p>
  </div>
  </div>
</template>

<script>
export default {
  props:['contacts'],
  name: "Contacts", 
}
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size:15px;
}

.contact>p{
  margin:5px;
  display:flex;
  gap:3px;
}

p>a{
  color:black;
  text-decoration: none;
}

h1{
  font-size: 18px;
  letter-spacing: 6px;
  margin: 0 0 1em 0;
  text-transform: uppercase;
}

.github{
  font-size:15px;
}

.email{
color:darkred;
}

.globe{
  color:rgb(65, 65, 252);
}
.twitter{
  color:rgb(89, 31, 143);
}
.phone{
  color:green;
}
@media print{
  .fa-envelope , .fa-globe ,.fa-twitter, .fa-phone, .fa-linkedin  {
    color:#000000;
  }
}
</style>
