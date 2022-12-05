<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <v-row class="mt-6">
      <v-col v-for="(n, index) in 16" md="3" :key="index">
          <Termo />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Termo from "@/components/Termo.vue";
export default {
  name: "Home",
  components: { Termo },

  data() {
    return {
      items: [
        {
          src: "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/CYW562AWOZAYHDADDZZNDIJ7LE.jpg",
        },
      ],
    };
  },
};
</script>
