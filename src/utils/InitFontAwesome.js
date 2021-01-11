import { library } from '@fortawesome/fontawesome-svg-core'

// Brand icons: fab
import {
  fab,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

// Solid icons: fas
import {
  faAddressCard,
  faBars,
  faCheck,
  faDatabase,
  faLaptopCode,
  faMapMarkerAlt,
  faMobileAlt,
  faUser,
  faUserCircle,
  faSignInAlt,
  faSignOutAlt,
  faSpellCheck,
  faStar,
  faTimes,
  faPlus,
  faLock,
  faLockOpen,
  faArrowLeft,
  faArrowRight,
  faCheckCircle,
  faTimesCircle,
  faClock,
  faGlobeAmericas,
  faSearchDollar,
  faTrashAlt,
  faEllipsisV,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'

// Regular icons: far
import {
  faEnvelope as farEnvelope,
  faStar as farStar,
  faEye as farEye,
  faLightbulb as farLightbulb,
} from '@fortawesome/free-regular-svg-icons'

function initFontAwesome() {
  library.add(
    // fab
    fab,
    faLinkedinIn,
    faFacebookF,
    faInstagram,
    faTwitter,
    // fas
    faAddressCard,
    faBars,
    faCheck,
    faDatabase,
    faLaptopCode,
    faMapMarkerAlt,
    faUser,
    faUserCircle,
    faSignInAlt,
    faSignOutAlt,
    faStar,
    faTimes,
    faPlus,
    faLock,
    faLockOpen,
    faMobileAlt,
    faArrowLeft,
    faArrowRight,
    faCheckCircle,
    faTimesCircle,
    faClock,
    faGlobeAmericas,
    faSearchDollar,
    faSpellCheck,
    faTrashAlt,
    faEllipsisV,
    faUserTie,
    // far
    farEnvelope,
    farStar,
    farEye,
    farLightbulb,
  )
}

export default initFontAwesome
