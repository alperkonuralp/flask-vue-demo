<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-layout row>
      <v-flex md8>
        <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="rounded-tr-xl rounded-br-xl">
          <v-container>
            
            <router-view/>

          </v-container>
        </v-app>
      </v-flex>
      <v-flex md4>
        <v-app :style="{background: $vuetify.theme.themes.light.background}">
          <v-container>
            <v-row>
              <UserDrawer />
            </v-row>
          </v-container>
        </v-app>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
  import UserDrawer from "@/views/profile/UserDrawer.vue";

  export default {
    name: "AuthBase",
    components: {
      UserDrawer
    },
    data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
    computed: {
      theme() {
        return this.$vuetify.theme.dark ? "dark" : "light";
      }
    },

  };
</script>
<style scoped>
</style>
