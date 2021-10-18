import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false;

library.add(faCoffee, faUser);