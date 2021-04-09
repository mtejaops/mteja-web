import Vue from "vue";
import Buefy from 'buefy';
import { library } from "@fortawesome/fontawesome-svg-core";
// internal icons
import {
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
  faExclamationCircle,
  faAddressCard,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faSlidersH,
  faEye,
  faEyeSlash,
  faCaretDown,
  faCaretUp,
  faUpload,
  faCalendar,
  faCalendarDay,
  faAddressBook,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faTag,
    faCheck,
    faCheckCircle,
    faInfoCircle,
    faExclamationTriangle,
    faExclamationCircle,
    faArrowUp,
    faAngleRight,
    faAngleLeft,
    faAngleDown,
    faAddressBook,
    faAddressCard,
    faEye,
    faEyeSlash,
    faCaretDown,
    faCaretUp,
    faUpload,
    faSlidersH,
    faCalendar,
    faCalendarDay
  );
  Vue.component("vue-fontawesome", FontAwesomeIcon);

Vue.use(Buefy, {
    defaultIconPack: "fas",
    defaultContainerElement: "#content"
});