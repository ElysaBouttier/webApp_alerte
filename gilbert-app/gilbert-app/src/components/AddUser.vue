<template>
  <div class="addUser">
    coucou
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        
        :counter="10"
        label="Prénom de l'utilisateur"
        required
      ></v-text-field>
      <!-- v-model="user.name" -->
      <!-- <v-text-field
        v-model="user.lastname"
        label="Nom de l'utilisateur"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.mail"
        label="e-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.fonction"
        label="Fonction occupée"
        required
      ></v-text-field> -->

      <!-- <v-btn color="success" class="mr-4" @click="submit"> Ajouter </v-btn>
      <v-btn @click="closeForm" color="red" dark> Annuler </v-btn> -->
    </v-form>
  </div>
</template>

<script>
export default {
    name: "addUser",

    data: () => ({
     showFormAddUser: false,
})
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
