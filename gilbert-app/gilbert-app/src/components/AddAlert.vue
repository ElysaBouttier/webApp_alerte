<template>
  <div class="addAlert">
    <!-- FORM -->
    <v-form ref="form" v-model="valid" lazy-validation>
      <!-- TITLE -->
      <v-text-field
        v-model="alert.title"
        :counter="10"
        label="Titre de l'alerte"
        required
      ></v-text-field>
      <!-- CONTENT -->
      <v-text-field
        v-model="alert.text"
        label="Contenu de l'alerte"
        required
      ></v-text-field>
      <!-- USER -->
      <v-text-field
        v-model="alert.user"
        label="Utilisateur"
        required
      ></v-text-field>
      <!-- STATUS -->
      <v-select
        :items="status"
        v-model="alert.status"
        label="Choisir un status"
      ></v-select>

<!--  -->
      <input type="date" v-model="alert.beginingDate" />
      <input type="date" v-model="alert.endingDate" />

      <v-btn color="success" class="mr-4" @click="submit"> Ajouter </v-btn>
      <v-btn @click="closeForm" color="red" dark> Annuler </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "addAlert",

  data: () => ({
    alert: {
      status: null,
      title: null,
      text: null,
      user: null,
      beginingDate: null,
      endingDate: null,
    },
    status: [
      {
        text: "Pré-alert",
        value: "prealert",
      },
      {
        text: "Alerte",
        value: "alert",
      },
      {
        text: "Fermée",
        value: "closed",
      },
    ],
  }),
  methods: {
    closeForm() {
      this.$emit("close");
    },
    submit() {
      this.$emit("add", this.alert);
    },
  },
};
</script>


<style lang="scss" scoped>
</style>


