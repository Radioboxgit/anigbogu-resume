<template>
  <section class="actions-section">
    <button title="Print Resume" class="print-button" @click="openPrintPage">
      <img src="@/assets/print.svg" />
    </button>
  </section>

  <div class="box">
    <div class="person-info">
      <h1 class="person-info-name" >{{ name.name}} </h1>
      <h2 class="person-info-position"  > {{name.position}}</h2>
    </div>
    <div class="person-photo">
    </div>
  </div>
</template>

<script>
export default {
  Name: "Header",
  props:['name'],
  methods: {
    openPrintPage() {
      window.print();
    },
  },
};
</script>

<style scoped>
.actions-section {
  display: flex;
  position: absolute;
  align-items: center;
  margin-left:15px;
  top:8px;
}

.print-button {
  padding: 5px;
  margin: 10px 10px 10px -10px;
  width: auto;
  height: auto;
  border: none !important;
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  border-radius:30px;
}

.print-button:hover {
  background-color: rgb(247, 194, 194);
  transition: all 0.5s ease-out;
  margin-top:12px;
}

.person-info {
  margin-left:90px;
  display: flex;
  flex-direction: column;
  
}

.person-info-name {
  margin: 0;
  font-weight: bold;
  font-size: 25px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color:#000000;
}

.person-info-position {
  margin: 0px;
  color: #f5f7fd;
  margin: 0 0 1em 0;
  line-height: 22px;
  letter-spacing: 4px;
  font-size: 16px;
  font-weight: 800;
  text-shadow: 2px 1px rgba(233, 228, 225, 0.3);
  text-transform: uppercase;
  padding-left:15px;
  padding-right:15px;
}

.box {
  padding: 60px;
  display: flex;
  flex-direction:row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.person-photo{
  background-image: url(~@/assets/standing-ipad-mockup.jpg);
  border-radius: 50%;
  background-position: center;
  background-size:cover;
  background-origin:content-box;
  background-repeat:no-repeat;
  height:100px;
  width:100px;
}

@media (max-width: 21cm) {
  .box {
    padding-top: 20px;
    flex-direction: column-reverse;
  }

  .print-button{
    background-color:white;
  }
.person-info-name{
  color:rgb(187, 187, 243);
  font-size:20px;
}
  .person-info {
    align-items: center;
    justify-content: center;
    margin-left:0px;
    display: flex;
    flex-direction: column;
    font-size:14px;
  }
  .person-info-position{
    font-size:14px;
    font-weight:bold;
  }
  .person-info-name,
  .person-info-position {
    text-align: center;
  }

  .actions-section {
    width: 100%;
    justify-content: space-between;
  }
}

@media print {
  .actions-section {
    display: none;
  }

  .box {
    padding-top: 0px;
    flex-direction: column-reverse;
  }
  .person-info-position {
  margin: 0px;
  color: black;
  margin: 0 0 1em 0;
  line-height: 22px;
  letter-spacing: 4px;
  font-size: 15px;
  font-weight: 800;
  text-shadow: 0 0  ;
  text-transform: uppercase;
  padding-left:15px;
  padding-right:15px;
}

.person-info-name{
color:black;
}
}
</style>
