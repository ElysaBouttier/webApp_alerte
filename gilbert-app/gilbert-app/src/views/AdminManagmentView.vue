<template>
  <div class="adminManagmentView">
    <v-container>
      <v-row>
        <v-col cols="12">
    <h2>Gestion des alertes</h2>
    <br />
    <AlertManagment
      :status="alert.status"
      :title="alert.title"
      v-for="alert in alerts"
      :key="alert.id"
    />
        </v-col>
      </v-row>
   </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import AlertManagment from "@/components/AlertManagment.vue";
import { mapState } from "vuex";

export default {
  name: "adminManagmentView",
  components: {
    AlertManagment,
  },
  data: () => ({
    items: ["alert", "prealert", "closed"],
    myalert: "alert",
  }),

  computed: {
    ...mapState({
      alerts: (state) => state.alerts,
      users: (state) => state.users,
    }),
  },
};
</script>
