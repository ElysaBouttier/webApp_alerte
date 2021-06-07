<template>
  <div id="app">
    <v-app class="vapp">
      <v-app-bar app class="header" dense>
        <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

        <v-toolbar-title>Gilbert-app</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn small tile depressed>{{statusConnection}}</v-btn>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main class="vmain">
        <!-- Provides the application the proper gutter -->
        <v-container fluid class="pa-0">
          <!-- SHOW WHAT'S INSIDE VIEWS  -->
          <!-- <v-row><v-col cols=12> -->
          <router-view></router-view>
          <!-- </v-col></v-row> -->
        </v-container>
      </v-main>

      <v-bottom-navigation
        class="bottomNavigation"
        color="primary"
        background-color="darkblue"
        horizontal
        fixed
        height="25px"
        v-if="isConnected"
      >
        <v-btn>
          <!-- <router-link to="/adminManagmentView">Gestion</router-link> -->
          <router-link :to="{ name: 'AdminManagmentView' }"
            >Gestion</router-link
          >
        </v-btn>

        <v-btn>
          <!-- <router-link to="/adminUserView">Utilisateurs</router-link> -->
          <router-link :to="{ name: 'AdminUserView' }"
            >Utilisateurs</router-link
          >
        </v-btn>

        <v-btn>
          <router-link to="/adminAlertView">Alertes</router-link>
        </v-btn>
        <!-- <router-link to="/">Home</router-link> | -->
        <!-- <router-link to="/login">Login</router-link>| -->
      </v-bottom-navigation>
    </v-app>
  </div>
</template>


<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "app",
  props: {},

  //   components: {},
  data: () => ({

  }),
  computed: {
    ...mapState({
      isConnected: (state) => state.isConnected,
    }),

    statusConnection() {
      if (this.isConnected) return "Déconnexion";
      return "Connexion";
    }
  },
  methods: {
    
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');

#app {
  .header {
    background-color: darkblue;
    color: white;
    .v-toolbar__title{
      font-family: 'Nunito', sans-serif;
    }
  }

  .bottomNavigation {
    background-color: darkblue;

    a{
    color: white;

    }
  }
  .bottomNavigation {
    a {
      text-decoration: none;
    }
  }
}
</style>
