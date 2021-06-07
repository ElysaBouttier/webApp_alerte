<template>
  <div class="alert" @click="expanded = !expanded">
    <v-row no-gutters>
      <!-- Color alert status -->
      <v-col cols="1" sm="6" md="8" align-self="stretch" :class="status">
      </v-col>

      <!-- ALERTE -->
      <v-col cols="10" sm="6" md="8">
        <v-card class="pa-2" outlined tile>
          <!-- First ROW -->
          <v-row>
            <v-col cols="6" sm="6" md="8"> {{ title }} </v-col>
            <v-col cols="6" sm="6" md="8"> Date et heure </v-col>
          </v-row>

          <div v-show="expanded">
            <!-- Second ROW -->
            <v-row class="secondRow" v-for="user in users" :key="user.id">
              <v-col cols="6" sm="6" md="8">
                <p>{{ user.name }}</p>
              </v-col>

              <v-col class="response"  :class="responseClass(user)" cols="6" sm="6" md="8">
                <p class="ok" v-if="user.response === true">Oui</p>
                <p class="nok" v-else-if="user.response === false">Non</p>
                <p class="null" v-else></p>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>

      <!-- Menu -->
      <v-col
        cols="1"
        sm="6"
        md="8"
        align-self="stretch"
        :class="status"
        @click.stop
      >
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
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
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: "alertManagment",
  props: ["status", "title", "state"],

  data: () => ({
    expanded: false,
    options: ["Modifier l'alerte", "Supprimer l'alerte"],

  }),   
  
  methods: {
    responseClass(user) {
      if (user === undefined) {
        return 'response-null'
      }

      if (user.response === true) {
        return 'response-ok'
      } else if (user.response === false) {
        return 'response-nok'
      }
      return 'response-null'
    }
  },

  
  computed: {
    ...mapState({
      alerts: state => state.alerts,
      users: state => state.users
    })
  }
};
</script>


<style lang="scss" scoped>
.alert {
  //margin-bottom: 7px;


  .prealert {
    background-color: orange;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
  .alert {
    background-color: red;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
  .closed {
    background-color: grey;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }

  .response-ok {
    background-color: rgba(0, 128, 0, 0.5);
  }
  .response-nok {
    background-color: rgba(255, 0, 0, 0.5);
  }
  .response-null {
    background-color: lightgrey;
  }

  
}
</style>


