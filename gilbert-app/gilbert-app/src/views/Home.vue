<template>
  <div class="home">
    <div>
      <template v-if="!isConnected">
        <v-card elevation="6" light tag="section">
          <v-card-title>
            <h3>Connexion</h3>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <p>Connectez-vous avec vos identifiants et mot de passe :</p>
            <v-form>
              <v-text-field
                outline
                label="Identifiant"
                type="text"
                v-model="userTry"
              ></v-text-field>
              <v-text-field
                outline
                hide-details
                label="Mot de passe"
                type="password"
                v-model="passwordTry"
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn color="info" text> Mot de passe oublié? </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="info" @click="tryToConnect">
              <v-icon left>lock</v-icon>
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>

      <!-- Log with success -->

      <v-card v-if="isConnected">
        <h1>Bonjour {{ userTry }}</h1>
        <p>La date du jour est le {{ dateNow }}</p>
      </v-card>

      <!-- <v-card>
        <h1>Error</h1>
        <p>Identifiant ou pseudo incorrect !</p>
      </v-card> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "home",
  props: {},

  //   components: {},
  data: () => ({
    dateNow: "",

    // User
    userTry: "",
    passwordTry: "",

    // Admin
    // userAdmin: "admin",
    // userPassword: "admin",
  }),
  computed: {
    ...mapState({
      users: (state) => state.users,
      isConnected: (state) => state.isConnected,
    }),
  },
  beforeMount() {
    this.returnDate();
  },
  methods: {
    tryToConnect() {

      const user = this.users.find(element => element.name === this.userTry);
      // Vérifier si l'utilisateur existe
      // for (var user in this.users) {
      //   console.log(user.name);
      //   if (this.userTry == user.name){
      //       console.log('youpi');
      //   }
      //Vérifier si le mdp + user ==
      //
      // }
      if (this.userTry && this.passwordTry) {

        if (this.passwordTry == user.password && user) {
          this.$store.commit("UPDATE_IS_CONNECTED", true);
        }else{
          alert('Identifiant ou mot de passe invalide ');
        }
      }
      else{
        alert('Veuillez remplir tous les champs')
      }
    },
    returnDate() {
      var dateOfTheDay = new Date();
      var month = dateOfTheDay.getMonth();
      var day = dateOfTheDay.getDate();

      if (day < 10) {
        day = "0" + day;
      }

      var months = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Spetmbre",
        "Octobre",
        "Nomvembre",
        "Décembre",
      ];

      this.dateNow =
        "le " + day + " " + months[month] + " " + dateOfTheDay.getFullYear();
    },
  },
};
</script>


<style lang="scss">
.container {
  flex-direction: column;
  margin: auto;
  margin-top: 21%;
}
</style>
