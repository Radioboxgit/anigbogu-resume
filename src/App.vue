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
  background-image: url("~@/assets/shiny_background.svg");
  background-repeat: no-repeat;
  background-size:cover;
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
