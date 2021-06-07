<template>
  <div class="adminUserView">
    <template v-if="!showFormAddUser">
      <User :user="user" v-for="user in users" :key="user.id" />
      <v-fab-transition>
        <v-btn
          v-show="!hidden"
          color="pink"
          dark
          right
          fab
          absolute
          @click="showFormAddUser = true"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
    </template>

    <AddUser
      v-if="showFormAddUser"
      @close="showFormAddUser = false"
      @add="addNewUser"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import User from "@/components/User.vue";
import AddUser from "@/components/AddUser.vue";

export default {
  name: "adminUserView",
  props: {},

  components: {
    User,
    AddUser,
  },
  data: () => ({
    showFormAddUser: false,
  }),
  computed: {
    ...mapState({
      alerts: (state) => state.alerts,
      users: (state) => state.users,
    }),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>


</style>

