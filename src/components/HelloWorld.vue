<template>
  <v-container class="wrapper">
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" md="6">
          <v-row class="pb-5">
            <v-btn class="mr-2" small color="success"> new ! </v-btn>
            <h1 class="title font-weight-thin">
              Wir bieten Gameserver in Spielen wie Minecraft, CSGO ... etc an.
            </h1>
          </v-row>

          <h1 class="pt-4 text-h2 font-weight-bold">"Gaming is not a hobby,</h1>
          <h1 class="text-h2 font-weight-bold">its a way of life."</h1>

          <div class="pt-5">
            <span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et
            </span>
          </div>

          <v-btn class="mt-8 font-weight-bold" color="primary" large
            >Jetzt beitreten</v-btn
          >
        </v-col>
        <v-col cols="12" md="4" class="ml-16"> 
          <img class="test" src="https://a-static.besthdwallpaper.com/ultravoilet-holo-wallpaper-1680x1260-38703_24.jpg">
        
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "inside",

  data() {
    return {
      test: "Tickets insgesamt",
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      items: [
        {
          src: "https://cdn.shopify.com/s/files/1/0490/0696/8986/products/Wallpaper_Mockup_Kursiv1_cc625de1-9e05-4a1d-8724-5f7686f07e2a_533x.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.shine:hover {
  background: #dc143d;
  box-shadow: 4px 4px 0px #dc143cb4;
  box-shadow: -40px -40px 80px #dc143cb4;
  box-shadow: 4px 4px 0px #dc143cb4;
  transition: 0.5s;
}

.shine {
  background: #dc143d;
  box-shadow: 0 0 0px #dc143c22;
  transition: 0.5s;
}
.wrapper {
  padding-top: 120px;
  padding-bottom: 32px;
}

.test {
  border-radius: 15px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin: 0 auto;
}

.title {
  font-size: 1.1rem;
}
</style>
