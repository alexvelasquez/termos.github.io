<template>
  <v-app>
    <v-app-bar app height="90">
      <router-link to="/" class="text-decoration-none">
        <v-toolbar-title class="d-flex justify-center">
          <v-img
            :src="`${publicPath}images/logo.png`"
            max-height="auto"
          >
          </v-img>
        </v-toolbar-title>
      </router-link>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pa-0">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    publicPath: process.env.BASE_URL,
  }),
};
</script>
