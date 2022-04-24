<template>
  <div class="wrapper">
    <div class="header">
      <Header :name="enData.name" />
    </div>
    <div class="contacts">
      <Contacts :contacts="enData.contacts"/>
    </div>
    <div class="profile">
      <Profile :profile="enData.profile"/>
    </div>
    <div class="skills">
      <Skills :skills="enData.skills"/>
    </div>
    <div class="experience">
      <Experiences :experiences="enData.experience"/> 
    </div>
    <div class="education">
      <Education :education="enData.education"/>
    </div>
    <div class="projects">
      <Projects :projects="enData.projects" />
    </div>
  </div>
  <div class="footer">
  </div>
</template>

<script>
import enData from "../../resume/en-data.yaml";
import Contacts from "@/components/Contacts.vue";
import Projects from "@/components/Projects.vue";
import Profile from "@/components/Profile.vue";
import Header from "@/components/Header.vue";
import Skills from "@/components/Skills.vue";
import Experiences from "@/components/Experiences.vue";
import Education from "@/components/Education.vue";

export default {
  name: "Resume",

  components: { Contacts, Profile, Header, Skills, Experiences, Education, Projects },
  data(){
    return{
      enData
    }
  }
};
</script>

<style scoped>
.footer{
   background-image: url("~@/assets/wave(6).svg");
   background-repeat:no-repeat;
   background-size:cover;
   width:100%;
   height:100px;
}
.wrapper {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 190px auto auto auto auto;
  grid-template-areas:
    "header header"
    "contacts profile"
    "skills experience"
    "education experience"
    "projects experience";
}

.contacts,
.skills,
.education,
.projects {
  padding: 0px 45px 0 45px;
  margin: 0px 0px 45px 0px;
}

.profile,
.experience {
  padding: 0px 45px 0 0;
  margin: 0px 0px 45px 0px;
}

.experience,
.projects {
  margin: 0;
}

.header {
  display: flex;
  grid-area: header;
  background-image: url("~@/assets/wave-haikei(2).svg");
  background-repeat: no-repeat;
  background-size:cover;
}

.contacts {
  grid-area: contacts;
}

.profile {
  grid-area: profile;
}

.skills {
  grid-area: skills;
}

.experience {
  grid-area: experience;
}

.education {
  grid-area: education;
}

.projects {
  grid-area: projects;
}

@media (max-width: 21cm) {
  .wrapper {
    width:100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, auto);
    grid-template-areas:
      "header"
      "contacts"
      "profile"
      "experience"
      "skills"
      "education"
      "projects";
  }

  .header {
    background-image: url("~@/assets/Moon(3).svg") !important;
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
    margin-bottom:10px;
    width:100%;
  }

  .contacts,
  .skills,
  .profile,
  .experience,
  .expertise,
  .skills,
  .education {
    padding: 0px 20px 0 20px !important;
  }
}

@media print {
  .wrapper {
    grid-template-columns: 3fr 3.5fr;
    grid-template-areas:
      "header header"
      "contacts profile"
      "skills experience"
      "education experience"
      "projects experience";
      gap:2px;
  }
 
.contacts,
  .skills,
  .profile,
  .experience,
  .expertise,
  .skills,
  .education {
    margin:5px;
  }


}

.svg{
  width:20%;
  height:5px;
}
</style>
