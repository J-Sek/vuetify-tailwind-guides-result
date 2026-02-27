<template>
  <v-app >
    <v-main :theme="$vuetify.theme.global.name">
      <nuxt-page />
    </v-main>
    <v-btn
      icon="mdi-theme-light-dark"
      position="absolute"
      location="top right"
      class="ma-2"
      color="secondary"
      elevation="2"
      @click="$vuetify.theme.cycle()"
    />
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
