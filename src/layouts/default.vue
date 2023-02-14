<template>
  <v-app
    id="inside"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <v-card flat tile>
      <v-app-bar dense fixed class="beamplex-bg-1">
        <v-row align="center" no-gutters>
          <v-col align="left">
            
            <v-toolbar-title
              ><b>BEAMPLEX</b> | Multigaming
            </v-toolbar-title>
          </v-col>

          <v-col align="center">
            <v-btn text plain :ripple="false"> Home </v-btn>
            <v-btn text plain :ripple="false"> Über uns </v-btn>
            <v-btn text plain :ripple="false"> Gameserver </v-btn>
          </v-col>
          
          <v-col align="right">
            <v-btn 
            class="discord" 
            small
            @click="openDiscordLink()"
            > discord </v-btn>
          </v-col>

        </v-row>
      </v-app-bar>
    </v-card>

    <v-footer
    padless
    fixed
  >
    <v-card
      flat
      class="beamplex-bg-2 white--text text-center flex"
    >
      <v-card-text>
        <v-btn
          class="mx-1 white--text"
          small
          text
          plain
        >
        Impressum
        </v-btn>
        <v-btn
          class="mx-1 white--text"
          small
          text
          plain
        >
        Datenschutzerklärung
        </v-btn>
        <v-btn
          class="mx-1 white--text"
          small
          text
          plain
        >
        Kontakt
        </v-btn>
      </v-card-text>

      

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>beamplex</strong>
      </v-card-text>
    </v-card>
  </v-footer>

  <RouterView />
  </v-app>
</template>
 
 <script>
export default {
  name: "default-layout",
  components: {},
  methods:{
    openDiscordLink() {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      
    },
  },
};
</script>

<style scoped>

.navbar:hover {
  color: #2a5f9d;
}

</style>