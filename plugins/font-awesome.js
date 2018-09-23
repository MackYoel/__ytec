import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faCheck
} from '@fortawesome/free-solid-svg-icons'

import {
  faPaperclip
} from '@fortawesome/pro-light-svg-icons'


library.add(
  faCheck,
  faPaperclip
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
