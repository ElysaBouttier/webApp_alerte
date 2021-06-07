<template>
  <div class="user">
    <!-- User Object -->

    <v-card class="pa-2 grey lighten-3" outlined tile>
      <v-row no-gutters @click="userClicked(user)">
        <v-col cols="11" sm="6" md="8">
          <p>{{ user.name }} {{ user.lastname }}</p>

          <!-- User Informations -->
          <v-expand-transition>
            <v-row
              class="secondRow"
              v-show="expanded == user.id"
              transition="expand-transition"
            >
              <v-col cols="12" sm="6" md="8">
                <p>e-mail : {{ user.mail }}</p>
                <p>Fonction : {{ user.fonction }}</p>
              </v-col>
            </v-row>
          </v-expand-transition>
        </v-col>

        <!-- Menu -->

        <v-col
          class="menu"
          cols="1"
          sm="6"
          md="8"
          align-self="center"
          @click.stop
        >
          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark icon v-bind="attrs" v-on="on" color="#283593">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(option, i) in options" :key="i">
                <v-list-item-title>{{ option }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "user",
  props: {
    user: {
      type: Object,
      require: true,
    },
  },

  data: () => ({
    options: ["Modifier l'utilisateur", "Supprimer l'utilisateur"],
    expanded: 0,
    showUser: true,
  }),
  methods: {
    // Open and close user informations
    userClicked(user) {
      if (this.expanded == 0) {
        console.log("ok");
        this.expanded = user.id;
      } else {
        this.expanded = 0;
      }
    },
  },

  computed: {
    ...mapState({
      alerts: (state) => state.alerts,
      users: (state) => state.users,
    }),
  },
};
</script>


<style lang="scss" scoped>
.alert {
  margin-bottom: 7px;


}
  .user {
    border-bottom:0.5px solid #283593 ;
  }

</style>


