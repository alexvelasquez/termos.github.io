<template>
  <v-card :to="`/details/${termo.id}`" :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="termo.src"
    ></v-img>

    <v-card-title>{{termo.titulo}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="termo.ranking"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">{{termo.ranking}}</div>
      </v-row>
      <div class="mt-4">
        {{termo.descripcion}}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="justify-center" v-if="!$route.params.id">
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Comprar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    termo: {
      type:Object,
    }
  },  
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
