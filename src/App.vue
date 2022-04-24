<template>
  <div class="a4">
    <Resume />
  </div>
</template>

<script>
import Resume from "./components/Resume";

export default {
  name: "App",
  components: {
    Resume,
  },
};
</script>

<style>
@import '~@/assets/styles/fonts.css';

#app {
  box-sizing: border-box;
  font-family: "Raleway", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  font-family: "Raleway", sans-serif !important;
}

body{
    background-color: rgb(208, 211, 212);
    background-image: radial-gradient(at 40% 55%, rgb(247, 11, 211) 0px, transparent 50%), radial-gradient(at 33% 94%, rgb(122, 6, 93) 0px, transparent 50%), radial-gradient(at 43% 99%, rgb(250, 4, 217) 0px, transparent 50%), radial-gradient(at 86% 24%, rgb(149, 154, 228) 0px, transparent 50%), radial-gradient(at 35% 71%, rgb(250, 69, 205) 0px, transparent 50%), radial-gradient(at 82% 63%, rgb(170, 4, 162) 0px, transparent 50%), radial-gradient(at 8% 13%, rgb(192, 79, 252) 0px, transparent 50%);
}

.a4 {
  background: #e9ebe9;
  display: block;
  margin: 0 auto;
  margin-top: 0.5cm;
  box-shadow: .01cm .5cm 0.8cm 0.2cm rgb(255, 255, 255), -.001cm -.1cm .2cm .2cm rgb(253, 253, 251);
  width: 21cm;
  min-height: 29.7cm;
}

@media only screen and (max-width: 21cm) {
  .a4 {
    width:100%;
    margin: 0 !important;
    box-shadow:none;
    position:absolute;
    right:0;
    overflow-x:hidden;
  
  }
  body{
    width:100%;
    margin:0;
  }
}

@media print {
  .a4 {
    margin: 0 !important;
    width: 25cm !important;
  }
}
</style>
