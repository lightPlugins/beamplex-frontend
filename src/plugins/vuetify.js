import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa'
    },
    theme: {
        dark: true,
        themes:{
            dark: {
                background: '#1c2433',
                primary: '#2a5f9d',
                // OCB CI Farben
                'beamplex-bg-1': '#161d29',
                'beamplex-bg-2': '#19212e',
                'discord': '#7289da',
                'ocb-red': '#dc143d',
                'ocb-unknown': '#c3cad3',
                'ocb-white': '#ffffff',
                'ocb-bg-1': '#11141a',
                'ocb-bg-2': '#161a22',
                'ocb-bg-3': '#191d26',
                'ocb-success': '#13DC7B',
                'ocb-info': '#00529D',
                'discord': '#7289da',
                'faceit': '#FF5500'
            }
        }
    }
});
