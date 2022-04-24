import { createApp } from "vue";
import App from "./App.vue";
import { ClickOutside } from "././directives/clickOutside.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faEnvelope ,faGlobe,faMapMarker } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGlobe,faPhone,faEnvelope, faGithub,faLinkedin, faTwitter,faMapMarker);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .directive("click-outside", ClickOutside)
  .mount("#app");
