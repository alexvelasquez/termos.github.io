<template>
  <div>
    <v-carousel>
      <v-carousel-item
        src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/CYW562AWOZAYHDADDZZNDIJ7LE.jpg"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <v-row class="mt-6 pa-5">
      <v-col v-for="(t, index) in $root.$data.termos" md="3" :key="index">
        <Termo :termo="t" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Termo from "@/components/Termo.vue";
export default {
  name: "Home",
  components: { Termo },
  mounted(){
    console.log(this.$root.$data)
  }
};
</script>
