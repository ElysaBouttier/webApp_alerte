<template>
  <div class="AdminAlertView">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-select
            :items="items"
            label="Standard"
            v-model="myalert"
          ></v-select>

          <template v-if="!showFormAddAlert">
            <Alert :status="myalert" />

            <Alert :alert="alert" v-for="alert in alerts" :key="alert.id" />
            <v-fab-transition>
              <v-btn
                v-show="!hidden"
                color="pink"
                dark
                right
                fab
                absolute
                @click="showFormAddAlert = true"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
          </template>

          <AddAlert
            v-if="showFormAddAlert"
            @close="showFormAddAlert = false"
            @add="addNewAlert"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>




<script>
import { mapState } from "vuex";
import Alert from "@/components/Alert.vue";
import AddAlert from "@/components/AddAlert.vue";

export default {
  name: "AdminAlertView",
  components: {
    Alert,
    AddAlert,
  },
  data: () => ({
    items: ["alert", "prealert", "closed"],
    myalert: "alert",
    showFormAddAlert: false,
  }),

  computed: {
    ...mapState({
      alerts: (state) => state.alerts,
      users: (state) => state.users,
    }),
  },

  mounted: function() {
    this.$store.dispatch('loadalerts')
  },

  methods: {
    addNewAlert(alert) {
      // TODO: Make random id
      alert.id = 10;
      this.$store.commit("ADD_ALERT", alert);
      this.showFormAddAlert = false;
    },
  },
};
</script>


<style lang="scss">
</style>


