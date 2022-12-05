<template>
  <div>
    <v-row  class="d-flex justify-center align-center">
      <v-col sm="12" md="4">
        <Termo></Termo>
      </v-col>
      <v-col sm="12" md="4" class="pa-10">
        <v-row class="pt-10">
          <v-col sm="12">
            <v-text-field label="Nombre" outlined clearable></v-text-field>
            <v-text-field label="Apellido" outlined clearable></v-text-field>
            <v-text-field
              label="Número de Tarjeta"
              outlined
              clearable
            ></v-text-field>
            <v-btn
              block
              class="purple darken-2 text-center white--text"
              @click="simulation()"
            >
              Confirmar Compra
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-snackbar v-model="pay" top color="success">
      ¡Gracias, por tu compra!
    </v-snackbar>
  </div>
</template>
<script>
import Termo from "@/components/Termo.vue";
export default {
  components: { Termo },
  data() {
    return {
      pay: false,
    };
  },
  methods: {
    simulation() {
      this.pay = true;
    },
  },
};
</script>
