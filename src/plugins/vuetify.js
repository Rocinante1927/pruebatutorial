// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";
// Vuetify
import { createVuetify } from 'vuetify'

/* import colors from 'vuetify/lib/util/colors' */


export default createVuetify({
  components: {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#42A5F5',
          secondary: '#0D47A1', 
          
        }
      },
    },
  },
})
