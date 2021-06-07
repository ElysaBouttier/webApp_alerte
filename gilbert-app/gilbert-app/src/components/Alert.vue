<template>
  <div class="alert" @click="expanded = !expanded">
    <v-row no-gutters>
      <!-- Color alert status -->
      <v-col cols="1" sm="6" md="8" align-self="stretch" :class="alert.status">
      </v-col>

      <!-- ALERTE -->
      <v-col cols="11" sm="6" md="8">
        <v-card class="pa-2" outlined tile>
          <!-- First ROW -->
          <v-row>
            <v-col cols="6" sm="6" md="8"> {{ alert.title }} </v-col>
            <v-col cols="6" sm="6" md="8"> Alerte Pour Machin </v-col>
          </v-row>

          <div v-show="expanded">
            <!-- Second ROW -->
            <v-row class="secondRow">
              <h3>{{ alert.title }}</h3>
              <p>Je mets le texte de mon alerte</p>
            </v-row>

            <!-- Third ROW -->
            <v-row>
              <!-- Button No -->
              <v-col cols="6" sm="6" md="6">
                <v-btn block color="error" @click.stop> NON </v-btn>
                <!-- Button Validate -->
              </v-col>
              <v-col cols="6" sm="6" md="6">
                <v-btn block color="success" @click.stop> OUI </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "alert",
  props: {
    alert: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    expanded: false,
  }),
};
</script>


<style lang="scss" scoped>
.alert {
  //margin-bottom: 7px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 80%);

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

  .secondRow {
    flex-direction: column;
  }

  .expandable {
  }
  .detail {
  }
}
</style>


